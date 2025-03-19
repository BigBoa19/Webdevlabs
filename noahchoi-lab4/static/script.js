function greetingFunc(){
    let d = new Date();
    let h = d.getHours();
    let msg = "";
    if(h < 5){
        msg = "Good Night"
        console.log("Good Night");
    }
    else if(h < 12){
        msg = "Good Morning";
        console.log("Good Morning");
    } else if(h < 18){
        msg = "Good Afternoon";
        console.log("Good Afternoon");
    } else if(h < 20){
        msg = "Good Evening";
        console.log("Good Evening");
    } else{
        msg = "Good Night";
        console.log("Good Night");
    }

    if(window.location.pathname.endsWith("index.html")){
        let E = document.getElementById("Greeting")
        if(E) E.innerHTML = msg + ", my name is Noah.";
    }
}

greetingFunc();

function addYear(){
    let d = new Date();
    let y = d.getFullYear();
    document.getElementById("copyYear").innerHTML = y + " designed and coded by Noah Choi";
}

function showList(){
    document.getElementById("see-more").style.display = "none";
    document.getElementById("FavList").style.display = "block";
}

$(document).ready(function(){
    $("#read-more").click(function(){
        $("#short-intro").hide();
        $("#read-more").hide();
        $("#long-intro").show();
        $("#read-less").show();
    });
    $("#read-less").click(function(){
        $("#long-intro").hide();
        $("#read-less").hide();
        $("#short-intro").show();
        $("#read-more").show();
    });
});

function validate() {
    let name = document.getElementById("fname");
    let email = document.getElementById("femail");
    let message = document.getElementById("fmessage");
    let validity = document.getElementById("validity-msg");
    if(!name.checkValidity() || !email.checkValidity() || !message.checkValidity()){
        validity.innerHTML = "Please fill out all required fields"
    }
}