
let myHexaValue="0123456789abcdef";
let copyCode=document.getElementsByClassName("copyCode");
let rgb1="#eb4034";
let rgb2="#b3878d";

const hexVlaue=()=>{
    let colors="#";
    for(let i=0;i<6;i++)
    {
        let ran=Math.floor(Math.random()*16);
        colors+=myHexaValue[ran];
    }
    return colors;
}

const handleButton1=()=>{
    rgb1=hexVlaue();
    let btn1=document.getElementById("myButton1");
    btn1.innerText=rgb1;
    btn1.style.backgroundColor=rgb1;
    document.body.style.backgroundImage=`linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyCode[0].innerHTML=`background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`
    console.log(rgb1);
};

const handleButton2=()=>{
    rgb2=hexVlaue();
    let btn2=document.getElementById("myButton2");
    btn2.innerText=rgb2;
    btn2.style.backgroundColor=rgb2;
    document.body.style.backgroundImage=`linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyCode[0].innerHTML=`background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`
    console.log(rgb2);
};