var button  = document.getElementById("btn");
var button1 = document.getElementById("btn1");
var colorCode = document.getElementById("color-code");
var bodyColor =  document.querySelector("body");
var colorList = [0,1,2,3,4,6,5,7,8,9,"A","B","C","D","E","F"]

button.addEventListener("click",()=>
{
    var randomColor1 = Math.floor(Math.random() * 255);
    var randomColor2 = Math.floor(Math.random() * 255);
    var randomColor3 = Math.floor(Math.random() * 255);
    var colorFinal = `rgb(${randomColor1},${randomColor2},${randomColor3})`
    console.log(colorFinal)
    bodyColor.style.backgroundColor = colorFinal;
    colorCode.innerHTML = `The color code is ${colorFinal}`
})
button1.addEventListener("click",()=>
{
    var code = "#";
    for(var i=0 ;i<6;i++)
    {
        var randomNum = Math.floor(Math.random() * colorList.length);
        code += colorList[randomNum];
    }
    console.log(code)
    bodyColor.style.backgroundColor = code;
    colorCode.innerHTML = `The color code is ${code}`
})