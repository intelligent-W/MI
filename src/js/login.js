// 登录扫码登陆切换
$(".information>.right>ul>li").each(function(index,item){
    $(this).click(function(){
        $(this).css({
            color:"#f56000"
        }).siblings().css({
            color: "#666"
        }).parent().siblings().children().eq($(this).index()).css({
            display:"block"
        }).siblings().css({
            display:"none"
        })
        
    })
})

// 邮箱/手机号码/小米ID正则
// 邮箱
// 手机号码：
// 小米ID 
$reg1 = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
$reg2 = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
$reg3 = /[1-9]\d{3,7}$/
// 密码  强密码(必须包含大小写字母和数字的组合，可以使用特殊字符，长度在8-10之间)
$reg4 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/

// 点击登录的时候判断
$(".information>.right>.y_c>.t_h>.deng_lu").click(function(){
    $a = $reg1.test($(".information>.right>.y_c>.t_h>.user").val())||$reg2.test($(".information>.right>.y_c>.t_h>.user").val())||$reg2.test($(".information>.right>.y_c>.t_h>.user").val())
    $b = $reg4.test($(".information>.right>.y_c>.t_h>.pass").val())
    if($a && $b){
        // 请求后端数据
        $.ajax({
            url:"http://localhost:86/Mi/login.php",
            type:"POST",
            data:{
                username:$(".information>.right>.y_c>.t_h>.user").val(),
                userpass:$(".information>.right>.y_c>.t_h>.pass").val()
            },
            success:function(data){
                if(data == "success"){
                    // 存储数据
                    let a = $(".information>.right>.y_c>.t_h>.user").val()
                    localStorage.setItem("login_name",a)
                    // 页面跳转
                    location.href="http://localhost:86/Mi/pages/index.html"
                }
            }
        })
        // 后端数据显示正常，可以正常登录，携带cookie，跳转页面
        console.log("no problem")
        $(".information>.right>.y_c>.t_h>em").css({
            display:"none"
        })
    }else{
        $(".information>.right>.y_c>.t_h>em").html("您输入的用户名和密码有误").css({
            display:"block",
        })
    }
})
$(".information>.right>.y_c>.t_h>.other>p:eq(1)").children("span").each(function(index,item){
    $(this).mouseenter(function(){
        $(this).children().css({
            color:"#f56000"
        })
    })
    $(this).mouseleave(function(){
        $(this).children().css({
            color:"#ccc"
        })
    })
})