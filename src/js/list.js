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
            console.log(data)
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
// 清单
function list1(){
    $.ajax({
        url:"http://localhost:86/Mi/getGoodsList.php",
        data:{
            "typeId":"023"
        },
        dataType:"json",
        type:"GET",
        success:function(data){
            let htmlStr=""
            data.forEach(item =>{
                htmlStr+=`
                <li>
                    <img src="${item.goodsImg}" alt="">
                    <h3>${item.goodsName}</h3>
                    <p>${item.goodsPrice}元&nbsp;起<del>${item.beiyong1}</del></p>
                    <strong>
                        <img src="${item.goodsImg}" alt="">
                    </strong>
                    <div class="j_s">
                        <em>${item.beiyong2}</em>
                        <i>${item.beiyong3}</i>
                        <b>${item.beiyong4}</b>
                    </div>
                </li>
                `
            })
            $("section>.list>ul:eq(0)").html(htmlStr)
        },
        error:function(err){
            console.log(err)
            console.log("失败了")
        }
    })
} 
function list2(){
    $.ajax({
        url:"http://localhost:86/Mi/getGoodsList.php",
        data:{
            "typeId":"024"
        },
        dataType:"json",
        type:"GET",
        success:function(data){
            let htmlStr=""
            data.forEach(item =>{
                htmlStr+=`
                <li>
                    <img src="${item.goodsImg}" alt="">
                    <h3>${item.goodsName}</h3>
                    <p>${item.goodsPrice}元&nbsp;起<del></del></p>
                    <strong>
                        <img src="${item.goodsImg}" alt="">
                    </strong>
                    <div class="j_s">
                        <em>${item.beiyong2}</em>
                        <i>${item.beiyong3}</i>
                        <b>${item.beiyong4}</b>
                    </div>
                </li>
                `
            })
            $("section>.list>ul:eq(1)").html(htmlStr)
        },
        error:function(err){
            console.log(err)
            console.log("失败了")
        }
    })
} 
$(function(){
    Menu1()
    Menu2()
    Menu3()
    Menu4()
    Menu5()
    Menu6()
    Menu7()
    list1()
    list2()
})
// 分页
$("section>.page>aside:eq(0)").css({
    backgroundColor: "grey",
    color: "white"
})
// 点击左变成数量为1
$("section>.page>.prev").click(function(){
    $("section>.list>ul:eq(0)").css({
        display:"grid"
    }).siblings().css({
        display:"none"
    })
    $("section>.page>aside:eq(0)").css({
        backgroundColor: "grey",
        color: "white"
    }).siblings("aside").css({
        backgroundColor: "",
        color: ""
    })
})
$("section>.page>aside:eq(0)").click(function(){
    $("section>.list>ul:eq(0)").css({
        display:"grid"
    }).siblings().css({
        display:"none"
    })
    $("section>.page>aside:eq(0)").css({
        backgroundColor: "grey",
        color: "white"
    }).siblings("aside").css({
        backgroundColor: "",
        color: ""
    })
})
// 点击右变成数量为2
$("section>.page>.next").click(function(){
    $("section>.list>ul:eq(1)").css({
        display:"grid"
    }).siblings().css({
        display:"none"
    })
    $("section>.page>aside:eq(1)").css({
        backgroundColor: "grey",
        color: "white"
    }).siblings("aside").css({
        backgroundColor: "",
        color: ""
    })
})
$("section>.page>aside:eq(1)").click(function(){
    $("section>.list>ul:eq(1)").css({
        display:"grid"
    }).siblings().css({
        display:"none"
    })
    $("section>.page>aside:eq(1)").css({
        backgroundColor: "grey",
        color: "white"
    }).siblings("aside").css({
        backgroundColor: "",
        color: ""
    })
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

// 猜你喜欢轮播图
// 轮播图
$("section>.z_z>p:eq(1)").click(function(){
    $(this).css({
        background:"grey",
        border:"1px solid orangered"
    }).siblings().css({
        background:"grey",
        border:""
    })
    $("section>.l_b>ol").animate({
        left:"-1190px"
    },2000)
})
$("section>.z_z>p:eq(0)").css({
    background:"grey",
    border:"1px solid orangered"
})
$("section>.z_z>p:eq(0)").click(function(){
    $(this).css({
        background:"grey",
        border:"1px solid orangered"
    }).siblings().css({
        background:"grey",
        border:""
    })
    $("section>.l_b>ol").animate({
        left:"0"
    },2000)
})


