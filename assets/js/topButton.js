document.addEventListener("DOMContentLoaded", () => {
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// ============zoom-in=============//
var modal = document.querySelector(".myModal");
var img = document.querySelector(".myImg");
var modalImg = document.querySelector(".img01");
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  }
  modalImg.onclick = function(){
    modal.style.display = "none";
  };


var modal2 = document.querySelector(".myModal2");
var img2 = document.querySelector(".myImg2");
var modalImg2 = document.querySelector(".img02");
  img2.onclick = function(){
    modal2.style.display = "block";
    modalImg2.src = this.src;
    // console.log("ok");
  }
  modalImg2.onclick = function(){
    modal2.style.display = "none";
  };
});

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
