$(document).ready(function(){
  const $button = document.querySelector(".menu-button");
  const $menu = document.querySelector(".main-menu");
  let flag=false;
    $button.addEventListener('click', function(e) {
      if (flag) {
        $menu.classList.remove("visible");
        $menu.classList.add("hidden");
        flag=false;
      }
      else {
        $menu.classList.add("visible");
        $menu.classList.remove("hidden");
        flag=true;
      }
    });
});
