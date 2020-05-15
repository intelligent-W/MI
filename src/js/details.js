let b = localStorage.getItem("login_name")
if(b){
    $(".top>.center>ol>li:eq(0)>a").html(b)
}else{
    $(".top>.center>ol>li:eq(0)>a").html("登录")
}
if(b != ""){
    $(".msg").css({
        display:"none"
    })
}else{
    $(".msg").css({
        display:"block"
    })
}
// 获取请求的id的数据
let goodsId = location.search.split("=")[1];
getDate(goodsId)
function getDate(goodsId){
    // 发送请求
    $.ajax({
        url:"http://localhost:86/Mi/getGoodsInfo.php",
        data:{
            "goodsId":goodsId,
        },
        dataType:"json",
        type:"get",
        success:function(data){
            // console.log(data.goodsPrice)
            // 数据渲染
            let htmlStr = ""
            htmlStr+=`
                    <li>
                        <img src="${data.goodsImg}" alt="">
                    </li>
                `
            $("section>.l_b_t>ul").prepend(htmlStr)
            let aa = data.goodsPrice 
            $(".y_c>.price").html(aa)
            $(".y_c>.t_p>.all_p").html("总计："+aa+"元")

        },
        error:function(err){
            console.log(err)
            console.log("失败了")
        }
    })
}
// 点击加入购物车
var count = 0
$("section>.y_c>.g_s>li:eq(0)").click(function(){
    count++
    if(count == 20){
        count=20,
        alert("您最多只能加入20个哦！")
    }
    addCart(goodsId,count)
})
function addCart(goodsId){
    // 发送请求
    $.post("http://localhost:86/MI/addShoppingCart.php",{
        "vipName":b,
        "goodsId":goodsId,
        "goodsCount":count
    },function(data){
        if(data == "1"){
            alert("我成功了,快去查看吧")
        }else{
            alert("请重新添加")
        }
    })
}
$(".right>ul>li:last").click(function(){
    location.href = "http://localhost:86/MI/pages/cart.html"
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
    if(ord>$("section>.l_b_t>ul>li").length-1){
        ord = 0
    }else if(ord<0){
        ord = $("section>.l_b_t>ul>li").length-1
    }
    // 外观呈现
    $("section>.l_b_t>ul>li").eq(outOrd).animate({
        "opacity":0
    },1000)
    $("section>.l_b_t>ul>li").eq(ord).animate({
        "opacity":1
    },1000)
    $("section>.l_b_t>.bot>span").eq(outOrd).css({
        "background":"grey"
    })
    $("section>.l_b_t>.bot>span").eq(ord).css({
        "background":"black"
    })
}
// 点击左右两边的按钮
$("section>.l_b_t>.prev").click(function(){
    goImg(ord-1)
})
$("section>.l_b_t>.next").click(function(){
    goImg(ord+1)
})
// 鼠标悬停上去定时器停止
$("section>.l_b_t").mouseover(function(){
    stopPlay()
})
// 鼠标离开重启
$("section>.l_b_t").mouseout(function(){
    autoPlay()
})
// 点击下面的豆豆，点到哪个豆豆，显示对应豆豆的图片
$("section>.l_b_t>.bot>span").click(function(){
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
// 鼠标悬停在全部商品分类上显示
$(".main>ul>li:eq(9)").mouseenter(function(){
    $(".pos").css({
        display:"block"
    })
})
$(".pos").mouseleave(function(){
    $(".pos").css({
        display:"none"
    })
})


$(".pos>.zuo_ce>ol>li").mouseenter(function(){
    $(this).css({
        background:"orangered"
    }).siblings().css({
        background:""
    })
    $(".pos>.er_ji>aside").eq($(this).index()).css({
        display:"block"
    }).siblings().css({
        display:"none"
    })
    $(".pos>.er_ji>aside").mouseleave(function(){
        $(this).css({
            display:"none"
        })
        $(".pos>.zuo_ce>ol>li").css({
            background:""
        })
    })
})


