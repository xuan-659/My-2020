var tree = document.querySelector(".preloader_tree");
var home_enter = document.querySelector(".home_enter");
var home_entrance = document.querySelector(".home_entrance");

function preloader() {
  var tree_time = 0;
  let timer = setInterval(function () {
    tree.style.left = tree_time + "px";
    tree_time -= 100;
    if (tree_time < -1400) window.clearInterval(timer);
  }, 130);
  tree.addEventListener("mousedown", function (e) {
    e.preventDefault();
  });
}

if (home_entrance && home_enter) {
  home_entrance.addEventListener("click", function () {
    window.location.href = "content.html";
  });
  home_enter.addEventListener("click", function () {
    window.location.href = "content.html";
  });
}

preloader();
