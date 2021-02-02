$(function(){
  
    
    
    
    
    //banslider//
    $('.ban-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    autoplaySpeed: 2000,
    });
    
    
    //colslide//

    $('.slick-part-vertical').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    vertical:true,
    autoplaySpeed: 2000,
    });
    
    
      
    //colslide//

    $('.blog-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    dots:true,
    autoplaySpeed: 2000,
    });
    
        //colslide//

    $('.atch-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows:true,
    prevArrow:'.right',
    nextArrow:'.left',
    autoplaySpeed: 2000,
    });
    
     //backtop//
    $('.back-top').click(function(){
        $('html, body').animate({scrollTop:0}, 1000);
    });
    
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 300){
            $('.back-top').fadeIn(500);     
        }
        else{
            $('.back-top').fadeOut(500);
        }
    });
    
    
    
    //wow js//
    new WOW().init();
    
    //fedsld///
    $('.mcl-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    autoplaySpeed: 2000,
    });
    
    
    //portfolio-slider///
    $('.port-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    asNavFor: '.port-img-slider'
    });
    
    $('.port-img-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.port-slider',
    dots: false,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    focusOnSelect: true
    });
    
    
    //slide2-port//
    
    $('.makk1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:true,
    nextArrow:'.right',
    prevArrow:'.left',
    autoplaySpeed: 2000,
    });
    
    
        //fedsld///
    $('.suln-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    dots:true,
    arrows:false,
    autoplaySpeed: 2000,
    });

    
    $('.ssd1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    dots:true,
    autoplaySpeed: 2000,
    });
    
    
    
     $('.mmb').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:true,
    prevArrow:'.prev',
    nextArrow:'.next',
    autoplaySpeed: 2000,
    });
    
    
    //typed js///
    $(".typed").typed({
		strings: ["First Version.", "Secound Verson.", "Third Verson."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
    
      
    
    
});