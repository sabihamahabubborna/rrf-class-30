jQuery( document ).ready(function($) {
  $(".portfolio-list").masonry({
  	
  }); 


  $(".single-portfolio-item").hover(function(){
  	$(".single-portfolio-item .portfolio-hover h2").removeClass("animated flip");
  	$(this).find(".portfolio-hover h2").addClass("animated flip");
  });


  $(".menu-trigger").on("click", function(){
  	$(".off-canvas-menu").addClass("active");
  	$(".offcanvas-menu-overlay").addClass("active");
  });


  $(".menu-close i.fa, .offcanvas-menu-overlay").on("click", function(){
  	$(".off-canvas-menu").removeClass("active");
  		$(".offcanvas-menu-overlay").removeClass("active");
  });


  $(".header-area").headroom();
});