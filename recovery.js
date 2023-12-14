$(document).ready(function(){
    $("#recoveryBtn").click(function(){
        let recoveryUsername = $("input[name='recoveryUsername']").val();
        let recoveryEmail = $("input[name='recoveryEmail']").val();
    
        if (recoveryUsername === "" || recoveryEmail === "") {
            alert("Value cannot be Empty!");
        } else {
            alert("Recover successfully, Check your email!");

            $("input[name='recoveryUsername']").val("");
            $("input[name='recoveryEmail']").val("");

            window.location.href = "login.html";
        }
    });
});
