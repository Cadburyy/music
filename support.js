$(document).ready(function(){
    $("#supportBtn").click(function(){
        let problem = $("input[name='problem']").val();
        let description = $("input[name='description']").val();
    
        if (problem === "" || description === "") {
            alert("Value cannot be Empty!");
        } else {
            alert("Problem Submitted, Thanks for the Message!");

            $("input[name='problem']").val("");
            $("input[name='description']").val("");

            window.location.href = "content.html";
        }
    });
});