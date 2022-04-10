console.log("Dice Game");
let a = Math.floor(Math.random() * 6 +1);
let b = Math.floor(Math.random() * 6 +1);
let dice1 = document.getElementById("diceicon1");
let dice2 = document.getElementById("diceicon2");
switch(a){
    case 1:
        class1 = "fa-dice-one";
        break;
    case 2:
        class1 = "fa-dice-two";
        break;
    case 3:
        class1 = "fa-dice-three";
        break;
    case 4:
        class1 = "fa-dice-four";
        break;
    case 5:
        class1 = "fa-dice-five";
        break;
    case 6:
        class1 = "fa-dice-six";
        break;
}
switch(b){
    case 1:
        class2 = "fa-dice-one";
        break;
    case 2:
        class2 = "fa-dice-two";
        break;
    case 3:
        class2 = "fa-dice-three";
        break;
    case 4:
        class2 = "fa-dice-four";
        break;
    case 5:
        class2 = "fa-dice-five";
        break;
    case 6:
        class2 = "fa-dice-six";
        break;
}
let temp1 = dice1.classList[1];
let temp2 = dice2.classList[1];
dice1.classList.replace(temp1,class1);
dice2.classList.replace(temp2,class2);
let rollBtn = document.getElementById("rollBtn");
let result = document.getElementById("result");
rollBtn.addEventListener('click',function(){
    dice1.classList.remove("image-rotate");
    void dice1.offsetWidth;
    dice1.classList.add("image-rotate");
    dice2.classList.remove("image-rotate");
    void dice2.offsetWidth;
    dice2.classList.add("image-rotate");
    let a = Math.floor(Math.random() * 6 +1);
    let b = Math.floor(Math.random() * 6 +1);
    let class1 = "";
    let class2 = "";
    switch(a){
        case 1:
            class1 = "fa-dice-one";
            break;
        case 2:
            class1 = "fa-dice-two";
            break;
        case 3:
            class1 = "fa-dice-three";
            break;
        case 4:
            class1 = "fa-dice-four";
            break;
        case 5:
            class1 = "fa-dice-five";
            break;
        case 6:
            class1 = "fa-dice-six";
            break;
    }
    switch(b){
        case 1:
            class2 = "fa-dice-one";
            break;
        case 2:
            class2 = "fa-dice-two";
            break;
        case 3:
            class2 = "fa-dice-three";
            break;
        case 4:
            class2 = "fa-dice-four";
            break;
        case 5:
            class2 = "fa-dice-five";
            break;
        case 6:
            class2 = "fa-dice-six";
            break;
    }
    let temp1 = dice1.classList[1];
    let temp2 = dice2.classList[1];
    dice1.classList.replace(temp1,class1);
    dice2.classList.replace(temp2,class2);
    if(a>b){
        result.innerText = "Result: Player 1 won!";
    }
    else if(b>a){
        result.innerText = "Result: Player 2 won!";
    }
    else{
        result.innerText = "Result: It's a draw!"
    }
})
