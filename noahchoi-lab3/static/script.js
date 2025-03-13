let x = 5;
let y = 7;
let z = x + y;
console.log(z);
let A = "Hello ";
let B = "World!"
let C = A + B;
console.log(C);

function SumNPrint(x1,x2) {
    let x3 = x1+x2
    console.log(x3);
    return x3;
}


z = SumNPrint(x,y);

C = SumNPrint(A,B);


if(C.length < z){
    console.log(z);
} else if(C.length > z){
    console.log(C);
} else {
    console.log("good job!")
}

let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(L1, L2){
    L1.forEach(fruit => {
        if(fruit === "Banana") alert("We found a banana in the first array");
    });
    L2.forEach(fruit => {
        if(fruit === "Banana") alert("We found a banana in the second array");
    });
}

findTheBanana(L1, L2);

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