let b = localStorage.getItem("login_name")
if(b){
    $(".top>.center>ol>li:eq(0)>a").html(b)
}else{
    $(".top>.center>ol>li:eq(0)>a").html("登录")
}
// 下滑二级菜单
function Menu1(){
    $.get("http://localhost:86/Mi/getGoodsList.php?typeId=016",function(data){
        let htmlStr=""
        htmlStr+=`<aside><ul>`
        data.forEach(item =>{
            htmlStr+=`
            <li>
                <img src="${item.goodsImg}" alt="">
                <p>${item.goodsName}</p>
                <span>${item.goodsPrice}元起</span>
            </li>
            `
        })
        htmlStr+=`</ul></aside>`
        $(".e_j").append(htmlStr)
    },"json")
}
function Menu2(){
    $.get("http://localhost:86/Mi/getGoodsList.php?typeId=017",function(data){
        let htmlStr=""
        htmlStr+=`<aside><ul>`
        data.forEach(item =>{
            htmlStr+=`
            <li>
                <img src="${item.goodsImg}" alt="">
                <p>${item.goodsName}</p>
                <span>${item.goodsPrice}元起</span>
            </li>
            `
        })
        htmlStr+=`</ul></aside>`
        $(".e_j").append(htmlStr)
    },"json")
} 
function Menu3(){
    $.ajax({
        url:"http://localhost:86/Mi/getGoodsList.php",
        data:{
            "typeId":"018"
        },
        dataType:"json",
        type:"GET",
        success:function(data){
            let htmlStr=""
            htmlStr+=`<aside><ul>`
            data.forEach(item =>{
                htmlStr+=`
                <li>
                    <img src="${item.goodsImg}" alt="">
                    <p>${item.goodsName}</p>
                    <span>${item.goodsPrice}元起</span>
                </li>
                `
            })
            htmlStr+=`</ul></aside>`
        $(".e_j").append(htmlStr)
        },
        error:function(){
            console.log("失败了")
        }
    })
} 
function Menu4(){
    $.ajax({
        url:"http://localhost:86/Mi/getGoodsList.php",
        data:{
            "typeId":"019"
        },
        dataType:"json",
        type:"GET",
        success:function(data){
            let htmlStr=""
            htmlStr+=`<aside><ul>`
            data.forEach(item =>{
                htmlStr+=`
                <li>
                    <img src="${item.goodsImg}" alt="">
                    <p>${item.goodsName}</p>
                    <span>${item.goodsPrice}元起</span>
                </li>
                `
            })
            htmlStr+=`</ul></aside>`
            $(".e_j").append(htmlStr)
        },
        error:function(err){
            console.log(err)
            console.log("失败了")
        }
    })
} 
function Menu5(){
    $.ajax({
        url:"http://localhost:86/Mi/getGoodsList.php",
        data:{
            "typeId":"020"
        },
        dataType:"json",
        type:"GET",
        success:function(data){
            let htmlStr=""
            htmlStr+=`<aside><ul>`
            data.forEach(item =>{
                htmlStr+=`
                <li>
                    <img src="${item.goodsImg}" alt="">
                    <p>${item.goodsName}</p>
                    <span>${item.goodsPrice}元起</span>
                </li>
                `
            })
            htmlStr+=`</ul></aside>`
            $(".e_j").append(htmlStr)
        },
        error:function(err){
            console.log(err)
            console.log("失败了")
        }
    })
} 
function Menu6(){
    $.ajax({
        url:"http://localhost:86/Mi/getGoodsList.php",
        data:{
            "typeId":"021"
        },
        dataType:"json",
        type:"GET",
        success:function(data){
            let htmlStr=""
            htmlStr+=`<aside><ul>`
            data.forEach(item =>{
                htmlStr+=`
                <li>
                    <img src="${item.goodsImg}" alt="">
                    <p>${item.goodsName}</p>
                    <span>${item.goodsPrice}元起</span>
                </li>
                `
            })
            htmlStr+=`</ul></aside>`
            $(".e_j").append(htmlStr)
        },
        error:function(err){
            console.log(err)
            console.log("失败了")
        }
    })
} 
function Menu7(){
    $.ajax({
        url:"http://localhost:86/Mi/getGoodsList.php",
        data:{
            "typeId":"022"
        },
        dataType:"json",
        type:"GET",
        success:function(data){
            let htmlStr=""
            htmlStr+=`<aside><ul>`
            data.forEach(item =>{
                htmlStr+=`
                <li>
                    <img src="${item.goodsImg}" alt="">
                    <p>${item.goodsName}</p>
                    <span>${item.goodsPrice}元起</span>
                </li>
                `
            })
            htmlStr+=`</ul></aside>`
            $(".e_j").append(htmlStr)
        },
        error:function(err){
            console.log(err)
            console.log("失败了")
        }
    })
} 
// 轮播图1
// 从后端获取所有的商品
function getGoods1(){
    $.get("http://localhost:86/Mi/getGoodsList.php?typeId=001",function(data){
        let htmlStr = ""
        data.forEach(item=>{
            htmlStr+=`
            <li>
                <a href="details.html?goodsId=${item.goodsId}"><img src="${item.goodsImg}"></a>
            </li>
            `
        })
        $(".banner>#box").html(htmlStr); 
    },"json");
}

// 闪购2
// 从后端获取所有的商品
function getGoods2(){
    $.get("http://localhost:86/Mi/getGoodsList.php?typeId=002",function(data){
        let htmlStr = ""
        data.forEach(item=>{
            htmlStr+=`
                <li>
                    <img src="${item.goodsImg}" alt="">
                    <h3>${item.goodsName}</h3>
                    <span>${item.goodsDesc}</span>
                    <em>${item.goodsPrice}元<del>${item.beiyong1}元</del></em>
                </li>
            `
        })
        $(".goods>.shan_gou>ul").html(htmlStr);  
    },"json");
}
// 手机3
// 从后端获取所有的商品
function getGoods3(){
    $.get("http://localhost:86/Mi/getGoodsList.php?typeId=003",function(data){
        let htmlStr = ""
        data.forEach(item=>{
            htmlStr+=`
                <li>
                    <img src="${item.goodsImg}" alt="">
                    <h3>${item.goodsName}</h3>
                    <span>${item.goodsDesc}</span>
                    <em>${item.goodsPrice}元起<del>${item.beiyong1}</del></em>
                </li>
            `
        })
        $(".goods>.shou_ji>.section>.you>ul").html(htmlStr);
    },"json");
}

// 家电4-1
function getGoods4(){
    $.get("http://localhost:86/Mi/getGoodsList.php?typeId=004",function(data){
        let htmlStr = ""
        data.forEach(item=>{
            htmlStr+=`
            <li>
                <img src="${item.goodsImg}" alt="">
                <h3>${item.goodsName}</h3>
                <span>${item.goodsDesc}</span>
                <em>${item.goodsPrice}元<del>${item.beiyong1}</del></em>
            </li>
            `
        })
        $(".goods>.jia_dian>.section>.you>ul:eq(0)>li").before(htmlStr);
    },"json");
}

// 显示商品4-2
function getGoods5(){
    $.get("http://localhost:86/Mi/getGoodsList.php?typeId=005",function(data){
        let htmlStr = ""
        data.forEach(item=>{
            htmlStr+=`
            <li>
                <img src="${item.goodsImg}" alt="">
                <h3>${item.goodsName}</h3>
                <span>${item.goodsDesc}</span>
                <em>${item.goodsPrice}元<del>${item.beiyong1}</del></em>
            </li>
            `
        })
        $(".goods>.jia_dian>.section>.you>ul:eq(1)>li").before(htmlStr);
    },"json");
}
// 智能6-1
function getGoods6(){
    $.get("http://localhost:86/Mi/getGoodsList.php?typeId=006",function(data){
        let htmlStr = ""
        data.forEach(item=>{
            htmlStr+=`
            <li>
                <img src="${item.goodsImg}" alt="">
                <h3>${item.goodsName}</h3>
                <span>${item.goodsDesc}</span>
                <em>${item.goodsPrice}元<del>${item.beiyong1}</del></em>
            </li>
            `
        })
        $(".goods>.zhi_neng>.section>.you>ul:eq(0)>li").before(htmlStr); 
    },"json");
}
// 智能6-2
function getGoods7(){
    $.get("http://localhost:86/Mi/getGoodsList.php?typeId=007",function(data){
        let htmlStr = ""
        data.forEach(item=>{
            htmlStr+=`
            <li>
                <img src="${item.goodsImg}" alt="">
                <h3>${item.goodsName}</h3>
                <span>${item.goodsDesc}</span>
                <em>${item.goodsPrice}元<del>${item.beiyong1}</del></em>
            </li>
            `
        })
        $(".goods>.zhi_neng>.section>.you>ul:eq(1)>li").before(htmlStr);  
    },"json");
}
// 智能6-3
function getGoods8(){
    $.get("http://localhost:86/Mi/getGoodsList.php?typeId=008",function(data){
        let htmlStr = ""
        data.forEach(item=>{
            htmlStr+=`
            <li>
                <img src="${item.goodsImg}" alt="">
                <h3>${item.goodsName}</h3>
                <span>${item.goodsDesc}</span>
                <em>${item.goodsPrice}元<del>${item.beiyong1}</del></em>
            </li>
            `
        })
        $(".goods>.zhi_neng>.section>.you>ul:eq(2)>li").before(htmlStr);  
    },"json");
}
// 搭配7-1
function getGoods9(){
    $.get("http://localhost:86/Mi/getGoodsList.php?typeId=009",function(data){
        let htmlStr = ""
        data.forEach(item=>{
            htmlStr+=`
            <li>
                <img src="${item.goodsImg}" alt="">
                <h3>${item.goodsName}</h3>
                <span>${item.goodsDesc}</span>
                <em>${item.goodsPrice}元<del>${item.beiyong1}</del></em>
            </li>
            `
        })
        $(".goods>.da_pei>.section>.you>ul:eq(0)>li").before(htmlStr);  
    },"json");
}
// 搭配7-2
function getGoods10(){
    $.get("http://localhost:86/Mi/getGoodsList.php?typeId=010",function(data){
        let htmlStr = ""
        data.forEach(item=>{
            htmlStr+=`
            <li>
                <img src="${item.goodsImg}" alt="">
                <h3>${item.goodsName}</h3>
                <span>${item.goodsDesc}</span>
                <em>${item.goodsPrice}元<del>${item.beiyong1}</del></em>
            </li>
            `
        })
        $(".goods>.da_pei>.section>.you>ul:eq(1)>li").before(htmlStr);  
    },"json");
}
// 配件
function getGoods11(){
    $.get("http://localhost:86/Mi/getGoodsList.php?typeId=011",function(data){
        let htmlStr = ""
        data.forEach(item=>{
            htmlStr+=`
            <li>
                <img src="${item.goodsImg}" alt="">
                <h3>${item.goodsName}</h3>
                <span>${item.goodsDesc}</span>
                <em>${item.goodsPrice}元<del>${item.beiyong1}</del></em>
            </li>
            `
        })
        $(".goods>.pei_jian>.section>.you>ul:eq(0)>li").before(htmlStr);  
    },"json");
}
// 配件
function getGoods12(){
    $.get("http://localhost:86/Mi/getGoodsList.php?typeId=012",function(data){
        let htmlStr = ""
        data.forEach(item=>{
            htmlStr+=`
            <li>
                <img src="${item.goodsImg}" alt="">
                <h3>${item.goodsName}</h3>
                <span>${item.goodsDesc}</span>
                <em>${item.goodsPrice}元<del>${item.beiyong1}</del></em>
            </li>
            `
        })
        $(".goods>.pei_jian>.section>.you>ul:eq(1)>li").before(htmlStr);  
    },"json");
}
function getGoods13(){
    $.get("http://localhost:86/Mi/getGoodsList.php?typeId=013",function(data){
        let htmlStr = ""
        data.forEach(item=>{
            htmlStr+=`
            <li>
                <img src="${item.goodsImg}" alt="">
                <h3>${item.goodsName}</h3>
                <span>${item.goodsDesc}</span>
                <em>${item.goodsPrice}元<del>${item.beiyong1}</del></em>
            </li>
            `
        })
        $(".goods>.pei_jian>.section>.you>ul:eq(2)>li").before(htmlStr);  
    },"json");
}
// 周边
function getGoods14(){
    $.get("http://localhost:86/Mi/getGoodsList.php?typeId=014",function(data){
        let htmlStr = ""
        data.forEach(item=>{
            htmlStr+=`
            <li>
                <img src="${item.goodsImg}" alt="">
                <h3>${item.goodsName}</h3>
                <span>${item.goodsDesc}</span>
                <em>${item.goodsPrice}元<del>${item.beiyong1}</del></em>
            </li>
            `
        })
        $(".goods>.zhou_bian>.section>.you>ul:eq(0)>li").before(htmlStr);  
    },"json");
}
function getGoods15(){
    $.get("http://localhost:86/Mi/getGoodsList.php?typeId=015",function(data){
        let htmlStr = ""
        data.forEach(item=>{
            htmlStr+=`
            <li>
                <img src="${item.goodsImg}" alt="">
                <h3>${item.goodsName}</h3>
                <span>${item.goodsDesc}</span>
                <em>${item.goodsPrice}元<del>${item.beiyong1}</del></em>
            </li>
            `
        })
        $(".goods>.zhou_bian>.section>.you>ul:eq(1)>li").before(htmlStr);  
    },"json");
}
$(function(){
    getGoods1()
    getGoods2()
    getGoods3()
    getGoods4()
    getGoods5()
    getGoods6()
    getGoods7()
    getGoods8()
    getGoods9()
    getGoods10()
    getGoods11()
    getGoods12()
    getGoods13()
    getGoods14()
    getGoods15()
    Menu1()
    Menu2()
    Menu3()
    Menu4()
    Menu5()
    Menu6()
    Menu7()
})
    // 鼠标放在购物车上显示
    $(".top>.center>ol>p").mouseenter(function(){
        $(this).css({
            background:"white",
            color:"orangered"
        })
        $(".top>.center>.x_l").slideDown("slow")
    })
    $(".top>.center>ol>p").mouseleave(function(){
        $(this).css({
            background:"",
            color:""
        })
        $(".top>.center>.x_l").slideUp("slow")
    })
    // 下载app鼠标悬停上去
    $(".top>.center>ul>li:eq(10)").mouseenter(function(){
        $(".top>.center>.t").css({
            display:"block"
        })
    })
    $(".top>.center>ul>li:eq(10)").mouseleave(function(){
        $(".top>.center>.t").css({
            display:"none"
        })
    })
    // 鼠标悬停在手机app上显示
    $(".right>ul>li:first>p").mouseenter(function(){
        $(".right>.t").css({
            display:"block"
        })
    })
    $(".right>ul>li:first>p").mouseleave(function(){
        $(".right>.t").css({
            display:"none"
        })
    })
    // 输入框里的信息
    $(".main>.form1>.one").mouseenter(function(){
        $(this).css({
            background:"#f56000"
        })
    })
    $(".main>.form1>.one").mouseleave(function(){
        $(this).css({
            background:""
        })
    })
    $(".main>.form1>.two").mouseenter(function(){
        $(this).css({
            background:"#f56000"
        })
    })
    $(".main>.form1>.two").mouseleave(function(){
        $(this).css({
            background:""
        })
    })
    $(".main>.form1>.search").focus(function(){
        $(".main>.form1>.one").html("")
        $(".main>.form1>.two").html("")
    })
    $(".main>.form1>.search").blur(function(){
        $(".main>.form1>.one").html("小米10")
        $(".main>.form1>.two").html("Redmin K30 Pro")
    })
    // 轮播图
    let ord = 0
    let myTimer = null
    // 自动播放
    function autoPlay(){
        myTimer = setInterval(()=>{
            goImg(ord+1)
        },2000)
    }
    function stopPlay(){
        window.clearInterval(myTimer)
        myTimer = null
    }
    function goImg(transOrd){
        let outOrd = ord
        ord = transOrd
        // 数据处理
        if(ord>$(".banner>ul>li").length-1){
            ord = 0
        }else if(ord<0){
            ord = $(".banner>ul>li").length-1
        }
        // 外观呈现
        $(".banner>ul>li").eq(outOrd).animate({
            "opacity":0
        },1000,function(){
            $(this).css({
                display:"none"
            })
        })
        $(".banner>ul>li").eq(ord).css({
            display:"block"
        })
        $(".banner>ul>li").eq(ord).animate({
            "opacity":1
        },1000)
        $(".banner>.circle>p").eq(outOrd).css({
            "background":"black"
        })
        $(".banner>.circle>p").eq(ord).css({
            "background":"white"
        })
    }
    // 点击左右两边的按钮
    $(".banner>.prev").click(function(){
        goImg(ord-1)
    })
    $(".banner>.next").click(function(){
        goImg(ord+1)
    })
    // 鼠标悬停上去定时器停止
    $(".banner").mouseover(function(){
        stopPlay()
    })
    // 鼠标离开重启
    $(".banner").mouseout(function(){
        autoPlay()
    })
    // 点击下面的豆豆，点到哪个豆豆，显示对应豆豆的图片
    $(".banner>.circle>p").click(function(){
        goImg($(this).index())
    })
    $(function(){
        autoPlay()
    })
    $(window).blur(function(){
        stopPlay()
    })
    $(window).focus(function(){
        autoPlay()
    })

    // 二级菜单
    $(".main>ul>li").mouseenter(function(){
        $(".e_j>aside").eq($(this).index()).slideToggle("slow").siblings().css({
            display:"none"
        })
        $(".e_j>aside").eq($(this).index()).mouseleave(function(){
            $(this).css({
                display:"none"
            })
        })
    })
    // 轮播图左侧二级菜单
    $(".banner>.zuo_ce>ol>li").mouseenter(function(){
        $(this).css({
            background:"orangered"
        }).siblings().css({
            background:""
        })
        $(".banner>.er_ji>aside").eq($(this).index()).css({
            display:"block"
        }).siblings().css({
            display:"none"
        })
        $(".banner>.er_ji>aside").mouseleave(function(){
            $(this).css({
                display:"none"
            })
            $(".banner>.zuo_ce>ol>li").css({
                background:""
            })
        })
    })
    // 右侧定位滚动
    $(window).scroll(function(){
        let a = $(window).scrollTop()
        if(a>=300){
            $(".right>.z_h").css({
                display:"block"
            })
        }else{
            $(".right>.z_h").css({
                display:"none"
            })
        }
    })
    // 点击返回顶部
    $(window).scroll(function(){
        $('.right>.z_h').click(function(){
            $("html").finish().animate({
               scrollTop:0
            },100)
        })
    })
    $(".goods>.shipin>ul>li").mouseenter(function(){
        $(".shipin>ul>li>em").eq($(this).index()).css({
            background:"#f56000"
        })
    })
    $(".goods>.shipin>ul>li").mouseleave(function(){
        $(".shipin>ul>li>em").eq($(this).index()).css({
            background:""
        })
    })
    // 定时器
    // 设置未来时间
    function moreTen(num) {
        return (num < 10) ? ("0" + num) : num;
    }
    let times = setInterval(()=>{
        var newDate = new Date(2020,4,22,14,0,0,0)
        // 获取当前时间
        var oDate = new Date()
        // 设置时间差
        var cha = parseInt((newDate-oDate)/1000)
        var day = parseInt(cha/86400)
        var h = moreTen(parseInt(cha/86400)*24)
        var m = moreTen(parseInt(cha%86400%3600/60))
        var s = moreTen(cha%60)
        $(".goods>.shan_gou>.first>.timer>p:eq(0)").html(h)
        $(".goods>.shan_gou>.first>.timer>p:eq(1)").html(m)
        $(".goods>.shan_gou>.first>.timer>p:eq(2)").html(s)
        if(h==0&&m==0&&s==0){
            clearInterval(times)
        }
    },1000)
    
    // 轮播图
    $(".goods>.header>.tab>p:first").click(function(){
        $(".goods>.shan_gou>ul").animate({
            left:"-1200px"
        })
    })
    $(".goods>.header>.tab>p:last").click(function(){
        $(".goods>.shan_gou>ul").animate({
            left:"250px"
        })
    })

    // 选项卡
    // 家电
    $(".goods>.jia_dian>.tou>ol>li").click(function(){
        // console.log($(this).index())
        $(".goods>.jia_dian>.section>.you>ul").eq($(this).index()).css({
            display:"flex"
        }).siblings().css({
            display:"none"
        })
        $(this).addClass("color").siblings().removeClass("color")
    })
    // 智能
    $(".goods>.zhi_neng>.tou>ol>li").click(function(){
        // console.log($(this).index())
        $(".goods>.zhi_neng>.section>.you>ul").eq($(this).index()).css({
            display:"flex"
        }).siblings().css({
            display:"none"
        })
        $(this).addClass("color").siblings().removeClass("color")
    })
    // 搭配
    $(".goods>.da_pei>.tou>ol>li").click(function(){
        // console.log($(this).index())
        $(".goods>.da_pei>.section>.you>ul").eq($(this).index()).css({
            display:"flex"
        }).siblings().css({
            display:"none"
        })
        $(this).addClass("color").siblings().removeClass("color")
    })
    // 配件
    $(".goods>.pei_jian>.tou>ol>li").click(function(){
        // console.log($(this).index())
        $(".goods>.pei_jian>.section>.you>ul").eq($(this).index()).css({
            display:"flex"
        }).siblings().css({
            display:"none"
        })
        $(this).addClass("color").siblings().removeClass("color")
    })
    // 周边
    $(".goods>.zhou_bian>.tou>ol>li").click(function(){
        // console.log($(this).index())
        $(".goods>.zhou_bian>.section>.you>ul").eq($(this).index()).css({
            display:"flex"
        }).siblings().css({
            display:"none"
        })
        $(this).addClass("color").siblings().removeClass("color")
    })