 $(document).ready(function() {
  
 $(".button-projects").click(function(event){
 		event.preventDefault();
   	   var goTop = $(".projects").offset().top;
       //console.log($(".projects").offset().top;
   		$("html, body").animate({scrollTop:goTop}, 1000, "easeInOutQuart" );
   	});
 $(".button-home").click(function(event){
 		event.preventDefault();
   	   var goTop = $(".splash").offset().top;
       //console.log($(".projects").offset().top;
   		$("html, body").animate({scrollTop:goTop}, 1500, "easeInOutQuart" );
   	});
 $(".button-about").click(function(event){
 		event.preventDefault();
   	   var goTop = $(".about").offset().top;
       //console.log($(".projects").offset().top;
   		$("html, body").animate({scrollTop:goTop}, 2000, "easeInOutQuart" );
	});
 $(".button-contact").click(function(event){
 		event.preventDefault();
   	   var goTop = $(".contact").offset().top;
       //console.log($(".projects").offset().top;
   		$("html, body").animate({scrollTop:goTop}, 2500, "easeInOutQuart" );

	});
    window.sr = ScrollReveal();
    sr.reveal('.splash .header',{duration:1000});
    sr.reveal('.splash .description',{delay:500});
    sr.reveal('.projects .header');
    sr.reveal('.projects', { duration: 2000 }, 50);


 });