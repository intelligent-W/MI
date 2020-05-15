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
        // console.log(outOrd)
        // console.log(ord)
        // 外观呈现
        $("section>.l_b_t>ul>li").eq(outOrd).animate({ "left": "-1226px" }, 1000);
        $("section>.l_b_t>ul>li").eq(ord).css({
            "left": "1226px"
        });
        $("section>.l_b_t>ul>li").eq(ord).animate({ "left": 0 }, 1000);
        $("section>.l_b_t>.circle>p").eq(outOrd).css({
            "background": "rgb(150, 146, 146)"
        })
        $("section>.l_b_t>.circle>p").eq(ord).css({
            "background": "white"
        })
    }
    // 鼠标悬停上去定时器停止
    $("section>.l_b_t").mouseenter(function(){
        stopPlay()
    })
    // 鼠标离开重启
    $("section>.l_b_t").mouseleave(function(){
        autoPlay()
    })
    // 点击下面的豆豆，点到哪个豆豆，显示对应豆豆的图片
    $("section>.l_b_t>.circle>p").click(function(){
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

    $("section>.zi_zhu>li").mouseenter(function(){
        $(this).children().css({
            color:"#f56000"
        })
    })
    $("section>.zi_zhu>li").mouseleave(function(){
        $(this).children().css({
            color:""
        })
    })
    $("section>.product>li").mouseenter(function(){
        $(this).children().css({
            color:"#f56000"
        })
    })
    $("section>.product>li").mouseleave(function(){
        $(this).children().css({
            color:""
        })
    })

    // 常见问题
    $("section>.per>ul>li:first").css({
        background:"orangered"
    })
    $("section>.per>ul>li").click(function(){
        $(this).css({
            background:"orangered"
        }).siblings().css({
            background:""
        })
        $("section>.per>aside").eq($(this).index()).css({
            display:"block"
        }).siblings("aside").css({
            display:"none"
        })
    })