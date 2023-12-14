$(document).ready(function(){
    $("#votingBtn").click(function(event){
        var selectedOption = document.getElementById("myVote").value;
        
        if (selectedOption === "") {
            alert("Please select a music instrument before voting");
            event.preventDefault();
        } else {
            alert("You voted for " + selectedOption);
            window.location.href = "content.html";
        }
    });
});

function myFunction() {
    var x = document.getElementById("myVote").value;
    document.getElementById("vote").innerHTML = "You selected: " + x;
}