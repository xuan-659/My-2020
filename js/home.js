var tree = document.querySelector(".preloader_tree");
var home_entry = document.querySelector(".home_entry");
var home_entrance = document.querySelector(".home_entrance");

function preloader() {
  var tree_time = 0;
  let timer = setInterval(function () {
    tree.style.left = tree_time + "px";
    tree_time -= 100;
    if (tree_time < -1400) window.clearInterval(timer);
  }, 130);
  tree.addEventListener('dragstast',function(){
    return false;
  })
}

if (home_entrance) {
  home_entrance.addEventListener("click", function () {
    window.location.href = "index.html";
  });
}

preloader();
