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

// div4.html内联js
let step = 0;
         let length = 10;
         setInterval(scroll, 70);
         function scroll() {
            let number = document.getElementById('Number'); 
            
            // let random = getRandomNumber(0,10);
             if(step > 10) {
                 step = 0;
                number.style.transitionProperty='none';
              
                number.style.marginTop = `-${step * 82}px`;
              
               step++;
             }
             else{
                number.style.transitionProperty='all';
                //  number.style.transition=`all ${0.05}s`;
                number.style.marginTop = `-${step * 82}px`;
            step++;
             }
         }
        // function getRandomNumber (min, max) {
        //     return Math.floor(Math.random() * (max - min + 1) + min)
        // }
