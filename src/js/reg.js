// 手机号码注册
// 正则判断
$reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
console.log($("section>.reg_box>.phone"))
$("section>.reg_box>.sub").click(function(){
    if($("section>.reg_box>.phone").val() == ""){
        $("section>.reg_box>i").css({
            display:"block"
        })
    }
    // if($reg.test($("section>.reg_box>.phone").val())){
    //     // 发送请求
    //     $.ajax({
    //         url:"",
    //         data:{

    //         },
    //         dataType:"",
    //         type:"",
    //         success:function(data){
    //             console.log(data)
    //             // 请求成功之后显示注册成功，跳转登录页面
    //         },
    //         error:function(){
    //             console.log("失败了")
    //         }
    //     })
    // }else{
    //     $("section>.reg_box>i").html("请填写正确的手机号")
    // }
})