$(document).ready(function(){
	$(".dashboard section .card img").hover(function(){ //filter: blur(0px) brightness(0.5) grayscale(0%);
	    $(this).css({"filter":"blur(0px) brightness(0.5) grayscale(0%)","transition":"1s"}); 
	    $('.dashboard section .card-title').css({"color":"white","opacity":"1"}); 
	    }, function(){
	    	$(this).css({"filter":"blur(0px) brightness(1) grayscale(0%)","transition":"1s"});
	     $('.dashboard section .card-title').css({"color":"gray","opacity":"0.8"}); 
	});
	$(".dashboard section .card-title").hover(function(){
	//    $('.dashboard section img').css({"filter":" blur(0px) brightness(0.5) grayscale(0%)","transition":"1s"});
	     $('.dashboard section .card-title').css({"color":"white","opacity":"1"});
	    }, function(){
	  //   $('.dashboard section img').css({"filter":" blur(0px) brightness(1) grayscale(0%)","transition":"1s"});
	});

	$('.question').on("click", function() {
		//alert('awesome');
		$(this).siblings().toggle();
	});
	
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();
	if(dd<10) {
	    dd = '0'+dd
	} 
	if(mm<10) {
	    mm = '0'+mm
	} 
	//today = mm + '/' + dd + '/' + yyyy;
	today = yyyy + '-' + mm + '-' + dd;
	$("#pick_date").attr("min", today);
});