
//page1.js      
var sec = new Array(
  document.querySelector("#sec-1"),
  document.querySelector("#sec-2"),
  document.querySelector("#sec-3"),
  document.querySelector("#sec-4"),
  document.querySelector("#sec-5"),
  document.querySelector("#sec-6")
);
// 过场动画
function none (pass){
  // pass1.style.display="none";
  // pass2.style.display="none";
  pass.style.display="none";
}
var tnz=0;
var ztn=document.getElementsByClassName("ztn")[0];
var tn1=document.getElementsByClassName("tn")[0];
var tn2=document.getElementsByClassName("tn")[1];
var tn3=document.getElementsByClassName("tn")[2];
var tn4=document.getElementsByClassName("tn")[3];
// var pp1=document.getElementsByClassName("p1")[0];
// var pp2=document.getElementsByClassName("p2")[0];
var pp1=document.getElementById("pass1");
var pp2=document.getElementById("pass2");
var pp3=document.getElementsByClassName("pass3")[0];
var pp4=document.getElementsByClassName("pass4")[0];
var pp=document.getElementsByClassName("pass")[0];
function openingAnimation(){
 pp1.className="pass1 pp1";
 pp2.className="pass2 pp2";
 pp3.className="pass3 pp3";
  pp4.className="pass4 pp4"
// var pp=getComputedStyle(pp1,null);
//     ppp=parseInt(pp.marginTop)
//   console.log(ppp); 
//  if(ppp<=-10)
//  {
//    pp3.className="pass3 pp3";
//    pp4.className="pass4 pp4"
//  }

setTimeout("none(pp)",1000);

}
// ztn.addEventListener('click',function(){
 setTimeout(openingAnimation,0);
//   })

                                                     //圆形进度条
let angle = 5
      let gap = 0
      var scrolly=0
      var sy=0;
let left = document.getElementsByClassName('leftcircle')[0]
let right = document.getElementsByClassName('rightcircle')[0]
var Button=document.getElementsByClassName('add')[0]
function getElementTop(element) {
  var actualTop = element.offsetTop;
  var current = element.offsetParent;

  while (current !== null) {
    actualTop += current.offsetTop;
    current = current.offsetParent;
  }

  return actualTop;
}
     function circelStart(){
    scrolly=window.scrollY-sy;
    
         if(scrolly>=0)
         {angle+=scrolly*0.08;}
         if(scrolly<0)
         {angle+=scrolly*0.08;}
    
  if(angle > 180){
    // 这里的gap就是每次累加的值
    gap = angle - lastAngle
  }
  if(angle <= 180){
  // 右转左不转
    right.style.cssText = `transform: rotate(${-135 + angle}deg)`
  }else if(angle <= 180 + gap) {
    // 这里只会执行一次，设定的条件是 当前角度小于 180 + gap
    right.style.cssText = `transform: rotate(${-135 + 180}deg)`
  }else if(angle <= 360) {
    // 右转且左转
    right.style.cssText = `transform: rotate(${-135 + 180}deg)`
    left.style.cssText = `transform: rotate(${-135 + angle - 180}deg)`
  } else {
    right.style.cssText = `transform: rotate(${-135 + 180}deg)`
    left.style.cssText = `transform: rotate(${-135 + 180}deg)`
  }
  lastAngle = angle;
  sy=window.scrollY;
}
function autoRoll() {
     window.addEventListener("scroll",function(e){
           
            //使用setTimeout方法产生一个延时效果，是的每次滑动鼠标滑轮，只执行一次事件方法
            setTimeout(circelStart(), 800);

        });
    }
    autoRoll();


var clickFlag = 0;
// 获取元素距离页面顶端的距离
function getElementTop(element) {
  var actualTop = element.offsetTop;
  var current = element.offsetParent;

  while (current !== null) {
    actualTop += current.offsetTop;
    current = current.offsetParent;
  }

  return actualTop;
}
//四个页面分别距离页面顶端的距离
// 0            0
// 714          1
// 1428         2
// 2143         3
// 2857         4
// 3571         5

//左侧导航栏模块
var navBarDot = document.querySelectorAll(".navbar-dot");
var navBarFlag = 0;
for (let i = 0; i < 6; i++) {
  navBarDot[i].addEventListener("click", function () {
    console.log(888);
    clickFlag = 1;
    navBarDot[navBarFlag].classList.remove("navbar-selected");
    navBarDot[i].classList.add("navbar-selected");
    navBarFlag = i;
    sec[i].scrollIntoView();
    setTimeout(function () {
      clickFlag = 0;
    }, 750);
  });
}

// console.log(getElementTop(sec[5]));

window.addEventListener("scroll", function () {
  if (clickFlag === 1) return false;
  // console.log(clickFlag);
  // console.log(window.scrollY);
  for (let i = 0; i < 5; i++) {
    if (
      window.scrollY < getElementTop(sec[i + 1]) &&
      window.scrollY > getElementTop(sec[i])
    ) {
      navBarDot[navBarFlag].classList.remove("navbar-selected");
      navBarDot[i].classList.add("navbar-selected");
      navBarFlag = i;
    }
  }
  if (window.scrollY >= getElementTop(sec[5])-10) {
    navBarDot[navBarFlag].classList.remove("navbar-selected");
    navBarDot[5].classList.add("navbar-selected");
    navBarFlag = 5;
  }
});

//page2.js

//page3.js

//page4.js

// page4.js
window.onload = function () {
  var z = 0;
  function mouseup() {
    alert("qq");
  }
  var app = document.getElementsByClassName("phto")[0];
  var isdown = 1;
  var p2 = document.getElementsByClassName("phto1")[0];
  app.onmousedown = function (e) {
    var x = e.pageX * 0.05;
    app.style.cursor = "grabbing";
    console.log(x);
    if (x >= 25) {
      z = z + x * 0.5;
    }
    if (x < 25) {
      z = z - x * 2;
    }
    isdown = 1;
    app.onmousemove = function (a) {
      if (isdown) {
        // p2.style.transition=1+"s";
        var left = a.pageX;
        var px = (x - left) * 0.001;
        p2.style.marginLeft = -z + "vw";
        console.log(z);
        if (z >= 520) {
          p2.style.transition = 0 + "s";
          p2.style.marginLeft = 0 + "vw";
          z = 0;
        } else {
          p2.style.transition = 1 + "s";
        }
        if (z <= -50) {
          p2.style.marginLeft = 0 + "vw";
        }
        // console.log(p2.style.marginRight);
      }
      window.onmouseup = function (a) {
        isdown = 0;
        app.style.cursor = "grab";
      };
    };
  };
};



//page5.js
let step                =       0;
let step2               =       0;
const stepMap           =       new Map();
const circleMap         =       new Map();
const numberList        =       document.querySelectorAll('.digitial_list');
const baseHeight        =       96;
const length            =       2;
const maxCircle         =       10;
const baseTime          =       500;
const totalTime         =       500;  // 总时长
var endNumber         =  ''  ;
// var min                 =        0;
// var sec                 =        0;
let endNumberList       =       [];
let circleNum           =       0;      // 总圈数(暂定~)
var d                   = 0;

function init() {
    numberList.forEach((item, index) => {
        stepMap.set(index, 0);
        circleMap.set(index, 0);
    });
    endNumberList = endNumber.toString().split('');
}


//倒计时
function getDistanceSpecifiedTime() {
    // 指定日期和时间
    var EndTime = new Date(2021,0,1);
    // 当前系统时间
    var NowTime = new Date();
    var t = EndTime.getTime() - NowTime.getTime();
     d = Math.floor(t / 1000 / 60 / 60 / 24);
    var h = Math.floor(t / 1000 / 60 / 60 % 24);
    var m = Math.floor(t / 1000 / 60 % 60);
    var s = Math.floor(t / 1000 % 60);
   
     endNumber         =   ""+d   ;
     document.querySelector("#hour").innerHTML=h;     

     document.querySelector("#min").innerHTML=m;
     document.querySelector("#sec").innerHTML=s;     


}
// function getDay(){
//   // 指定日期和时间
//   var EndTime = new Date(2021,0,1);
//   // 当前系统时间
//   var NowTime = new Date();
//   var t = EndTime.getTime() - NowTime.getTime();
//    d = Math.floor(t / 1000 / 60 / 60 / 24);
//    endNumber         =   ""+d ;
// }
// var numberBoxFlag=0;
// getDay();
 setInterval("getDistanceSpecifiedTime()",500);
//  if(numberBoxFlag===0){
 
// function y(){
//  if(getElementTop(sec[4])<=window.scrollY&&getElementTop(sec[5])>=window.scrollY)
//  {
//     // numberBoxFlag=1;
// //  getDay();
// alert("hhhhhhhh");
//  }
// //  else{
// //    endNumber='';
// //  }
// }

// var qw = document.querySelector('.submit-work');
// qs.addEventListener('click',function(){
  // startAnimation();
  // getDay();
  // console.log(1);
// });


// y();
// setInterval("y()",3000);


// getDistanceSpecifiedTime()

// $(window).scroll2(function (){
//   if ($(window).scrollTop()>=) {
//       getDay();
//   }
//   else{
//       document.querySelector(".image-block").style.opacity=0;
//   }
// });




function scroll(index, scrollBox, maxLength, gapTime, circle, stopNum, timer) {
    let currentStep = stepMap.get(index);
    let newStep = currentStep;
    let currentCircle = circleMap.get(index);
    const currentNumber = parseInt(scrollBox.children[currentStep].innerText);
    scrollBox.style.transform = `translate(0, -${currentStep * baseHeight}px)`;
    if(currentCircle === circle - 1 && currentNumber === stopNum) {
        clearInterval(timer);
    }
    if(currentStep === maxLength - 1) {
        stepMap.set(index, 0);
        circleMap.set(index, ++currentCircle);
        setTimeout(function() {
            scrollBox.style.transitionProperty = 'none';
            scrollBox.style.transform = `translate(0, 0)`;
        }, gapTime);
    } else {
        scrollBox.style.transition = `all ${gapTime / 1000}s`;
        newStep++;
        stepMap.set(index, newStep);
    }
}

function startAnimation() {
    numberList.forEach((scrollBox, index) => {
        const childrenLen = scrollBox.children.length;
        const circle = Math.pow(2, index);
        const gapTime = baseTime / circle;
        const stopNum = endNumberList[index];
        const timer = setInterval(() => { scroll(
            index, 
            scrollBox, 
            childrenLen, 
            gapTime,
            circle,
            stopNum,
            timer
        )}, gapTime);
    })
}

init();
startAnimation();



//page6.js
