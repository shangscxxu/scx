$(function () {
    $(".but").click(function(){
        var name = $("input[name=username]").val();
        var pwd = $("input[name=userpwd]").val();
        var class1 = $("input[name=userclass]").val();
        $.ajax({
            url:"http://www.qhdlink-student.top/student/login.php",
            type:"post",
            data:{
                username:name,
                userpwd:pwd,
                userclass:class1,
                type:2
            },
            success:function(data){
                console.log(data)
                if(data=="ok"){
                    localStorage.setItem("linkname",name);
                    location.href="index.html";
                }else{
                    alert("用户名或密码错误")
                }
            }
        })
    })
})