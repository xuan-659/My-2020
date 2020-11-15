//高德地图
var map = new AMap.Map('map', {
  mapStyle: 'amap://styles/darkblue', 
zoom:14,//级别
center: [118.931709,32.11599],//中心点坐标
viewMode:'3D',
resizeEnable: true,
// resizeEnable: true
});
map.setMapStyle('amap://styles/darkblue');
// 以 icon URL 的形式创建一个途经点
var viaMarker = new AMap.Marker({
position: new AMap.LngLat(118.92609,32.1188219),
// 将一张图片的地址设置为 icon
icon: 'images/31.png',
// 设置了 icon 以后，设置 icon 的偏移量，以 icon 的 [center bottom] 为原点
// offset: new AMap.Pixel(-45, -230)
});
map.add(viaMarker);
// map.add(marker);//添加到地图
var Marker = new AMap.Marker({
position:[118.927709,32.112219],//位置
//icon: '4.png'
})
map.add(Marker);//添加到地图


//text-block
var scroll=document.querySelector(".scroll");
var textBlock = document.querySelector('.text-block');
var scrolly=pageYOffset;
  scroll.onclick=down;
  function down(){
      let height = 0;
      // console.log('a')
      // textBlock.style.transform = `translate(0, -100vh)`;
      const timer = setInterval(function() {
          height += 60;
          window.scrollTo(0, height);
          if(height > document.documentElement.scrollHeight) {
              height = document.documentElement.scrollHeight;
              clearInterval(timer);
          }
      }, 20);
           console.log(document.documentElement.scrollHeight)
      // alert("hhhh");
  }


  //image-block
  // console.log(document.documentElement.scrollHeight)
  var c= document.documentElement.scrollHeight;
  // var b= document.querySelector(".text-block-bottom").offsetTop;
  // console.log( document.querySelector(".text-block-bottom").offsetTop);
  // // document.querySelector(".text-block").offsetTop;
  // if(b==1.5*c){
  //     console.log(b);
  // }
  $(window).scroll(function (){
      if ($(window).scrollTop()>=0.25*c) {

          document.querySelector(".image-block").style.zIndex=8;
          document.querySelector(".image-block").style.opacity=1;
      }
      else{
          document.querySelector(".image-block").style.zIndex=1;
          document.querySelector(".image-block").style.opacity=0;
      }
  });


  setTimeout(function(){
      document.querySelector('.transition_start').style.display = 'none';
    },1600)