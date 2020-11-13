//page1.js
var sec = new Array(
  document.querySelector("#sec-1"),
  document.querySelector("#sec-2"),
  document.querySelector("#sec-3"),
  document.querySelector("#sec-4"),
  document.querySelector("#sec-5"),
  document.querySelector("#sec-6")
);

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

//page6.js
