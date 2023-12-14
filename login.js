$(document).ready(function () {
    $(".login").hide();
    $(".registerli").addClass("active");

    $(".loginli").click(function () {
        $(this).addClass("active");
        $(".registerli").removeClass("active");
        $(".login").show();
        $(".register").hide();
    });

    $(".registerli").click(function () {
        $(this).addClass("active");
        $(".loginli").removeClass("active");
        $(".register").show();
        $(".login").hide();
    });

    $("#registerBtn").click(function () {
        let registerUsername = $("input[name='registerUsername']").val();
        let registerEmail = $("input[name='registerEmail']").val();
        let registerPassword = $("input[name='registerPassword']").val();

        if (registerUsername === "" || registerEmail === "" || registerPassword === "") {
            alert("Value cannot be Empty!");
        } else {
            alert("Registration successful, Continue to Login Page!");

            $("input[name='registerUsername']").val("");
            $("input[name='registerEmail']").val("");
            $("input[name='registerPassword']").val("");
        }
    });

    $("#loginBtn").click(function () {
        let loginEmail = $("#loginEmail").val();
        let loginPassword = $("#loginPassword").val();

        if (loginEmail === "" || loginPassword === "") {
            alert("Value cannot be Empty!");
        } else {
            alert("Welcome to Habib's Symphony!");
            window.location.href = "content.html";
        }
    });
});

function Username(x) {
    highlightRed(x);
}

function Password(x) {
    highlightRed(x);
}

function Email(x) {
    highlightRed(x);
}

function RemoveRed(x) {
    if (x.value !== "") {
        x.style.background = "";
    }
}

function highlightRed(x) {
    x.style.background = "red";
}