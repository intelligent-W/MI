let b = localStorage.getItem("login_name")

if(b){
    $("header>.center>ul>li:eq(0)").html(b)
}else{
    $("header>.center>ul>li:eq(0)").html("登录")
}
// 获取购物车的数据
function upData(cb){
    // 发送请求
    $.get("http://localhost:86/MI/getShoppingCart.php",{
        "vipName":b
    },function(data){
        // 渲染数据
        let htmlStr = ""
        data.forEach(item=>{
            htmlStr+=`
            <div class="goods">
                <input type="checkbox">
                <img src="${item.goodsImg}" alt="">
                <p class="goods_id">${item.goodsId}</p>
                <p class="goods_name">${item.beiyong1}</p>
                <div class="y_b">
                    <p class="goods_price">${item.goodsPrice}元</p>
                    <div class="goods_count">
                        <p class="min">-</p>
                        <p class="count">${item.goodsCount}</p>
                        <p class="max">+</p>
                    </div>
                    <div class="total">${item.goodsCount*item.goodsPrice}元</div>
                    <p class="c_z">×</p>
                </div>
            </div>
            `
        })
        $("section>.section").append(htmlStr)
        // 给dom添加事件
        cb&&cb()
    },"json")
}
upData(addEvent)
// 修改购物车的数量
function upCount(goodsIdA,goodsCountA,cb){
    // 发送请求
    $.ajax({
        url:"http://localhost:86/MI/updateGoodsCount.php",
        data:{
            "vipName":b,
            "goodsId":goodsIdA ,
            "goodsCount":goodsCountA
        },
        type:"GET",
        success:function(data){
            if(data == "1"){
                cb&&cb()
            }else{
                console.log("服务器崩了")
            }
        },
        cache:false
    })
}
// 添加事件
function addEvent(){
    // 全选
    $("section>.section>.cart>ul>li>input").click(function(){
        $("section>.section>.goods>input").each((index,item)=>{
            $("section>.section>.goods>input").prop("checked",this.checked)
        })
        $("section>.d_b>ul>li>em").html($("section>.section>.goods>input:checked").length)
        let money = 0
        let str = $("section>.section>.goods>input")
        str.each(function(index,item){
            if($(this).prop("checked") == true){
                money += parseInt($(this).siblings(".y_b").children(".total").html());
            }
        })
        $("section>.d_b>ol>li>span").html(money+"元")

    })
    // 点击单个
    $("section>.section>.goods>input").click(function(){
        // 假设全选选中了
        let allChecked = true
        $("section>.section>.goods>input").each(function(index,item){
            if(this.checked != true){
                allChecked = this.checked
            }
        })
        $("section>.section>.cart>ul>li>input").prop("checked",allChecked)
        $("section>.d_b>ul>li>em").html($("section>.section>.goods>input:checked").length)
        let money = 0
        let str = $("section>.section>.goods>input")
        str.each(function(index,item){
            if($(this).prop("checked") == true){
                money += parseInt($(this).siblings(".y_b").children(".total").html());
            }
        })
        $("section>.d_b>ol>li>span").html(money+"元")
    })

    // 加减的功能
    $("section>.section>.goods>.y_b>.goods_count>.min").click(function(){
        // 修改后端的数据
        // 获取商品编号
        let goodsId = $(this).parent().parent().siblings(".goods_id").html()
        // 获取商品的数量
        let goodsCount = $(this).siblings(".count").html()
        goodsCount--
        upCount(goodsId,goodsCount,()=>{
            // 小于等于0
            if(goodsCount<=0){
                goodsCount= 0
            }
            $(this).siblings(".count").html(goodsCount)
            // 小计发生变化
            let cc = parseInt($(this).parent().siblings(".goods_price").html())
            console.log($(this).parent().siblings(".total").html)
            $(this).parent().siblings(".total").html(goodsCount*cc+"元")
            totalMoney()
        })
    })
    $("section>.section>.goods>.y_b>.goods_count>.max").click(function(){
        // 修改后端的数据
        // 获取商品编号
        let goodsId = $(this).parent().parent().siblings(".goods_id").html()
        // 获取商品的数量
        let goodsCount = $(this).siblings(".count").html()
        goodsCount++
        upCount(goodsId,goodsCount,()=>{
            // 修改前端的数据
            // 大于等于20
            if(goodsCount>=20){
                goodsCount= 20
            }
            $(this).siblings(".count").html(goodsCount) 
            // 小计发生变化
            let xx = parseInt($(this).parent().siblings(".goods_price").html())
            $(this).parent().siblings(".total").html(goodsCount*xx+"元")
            // 合计发生变化
            totalMoney()
        })
        
    })

    // 点击×
    $("section>.section>.goods>.y_b>.c_z").click(function(e){
        let a = window.confirm("您确定要删除吗？")
        if(a == true){
            // 获取后端的数据
            let goodsId = $(this).parent().siblings(".goods_id").html()
            delData(goodsId,()=>{
                $(this).parent().parent().remove()
                totalMoney()
            })
        }
    })

    // 共几件商品，已选中几件商品
    let c = $("section>.section>.goods>input").length
    $("section>.d_b>ul>li>span").html(c)
    // 每个选中的小计
    let qq = $("section>.section>.goods>input:checked").length
    console.log(qq)
}
function totalMoney(){
    let money = 0
    let str = $("section>.section>.goods>input")
    str.each(function(index,item){
        if($(this).prop("checked") == true){
            money += parseInt($(this).siblings(".y_b").children(".total").html());
        }
    })
    $("section>.d_b>ol>li>span").html(money+"元")
}


// 删除数据库
function delData(goodsId,cb){
    // 发送请求
    $.get("http://localhost:86/MI/deleteGoods.php",{
        "vipName":b,
        "goodsId":goodsId
    },function(data){
        // 执行操作
        cb&&cb()
    })
}
