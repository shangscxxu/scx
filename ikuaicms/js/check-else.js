$(function(){
    if(localStorage.getItem("linkname")){
        $("#welcome").html("欢迎"+localStorage.getItem("linkname")+"回来");
    }else{
        alert("请登录");
        location.href="../enroll.html";
    }
    $(".esc").click(function(){
        localStorage.clear();
        window.location.href="about:blank";
        window.close();
    })
})