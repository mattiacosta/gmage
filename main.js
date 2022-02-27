//NAVBAR
var nav= document.getElementById('nav');
window.onscroll = function (){
	if(window.pageYOffset > 200){
		nav.style.background = "#090B0C";
	}
	else{
		nav.style.background = "transparent";			
	}
}

//BACK TO TOP
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } 
  else {
    toTop.classList.remove("active");
  }
})


//PORTFOLI GALLERY
$(document).ready(function(){

  $(".filter-button").click(function(){
    var value = $(this).attr('data-filter');
    
    if(value == "all"){
      $('.filter').show('1000');
    }
    else{  
      $(".filter ").not('.'+value).hide('5000');
      $('.filter ').filter('.'+value).show('5000');  
    }
  });
  
  if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
  }
  $(this).addClass("active");
  
});