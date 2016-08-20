$(document).ready(function () {

	//main slide
    $('.promo').bxSlider({
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 640,
        auto: true,
		mode: 'fade',
		speed: 1000,
		pager: false
    });

	$('.img_list').bxSlider({
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 640,
        auto: true,
		speed: 500,
		pager: false
    });
	
	$('.menu .mn').click(function(){
		$('#aside').show();
	});
		
	$('.gnb li a').click(function(){
		$('.gnb li').removeClass('on');
		$(this).parent().addClass('on');
		return false;
	});

	$('.sub_mn li a').click(function(){
		$('.sub_mn li').removeClass('on');
		$(this).parent().addClass('on');
		return false;
	});
	
	$('.nav_btm li a').click(function(){
		$('.nav_btm li').removeClass('on');
		$(this).parent().addClass('on');
		return false;
	});

	$('.detail_mn li > a').click(function(){
		$('.detail_mn li').removeClass('on');
		$(this).parent().addClass('on');
		$('.tab_ct').removeClass('on');
		$($(this).attr('href')).addClass('on');
		return false;
	});

	$('.minus').click(function(){
		var num = parseInt($(this).next().text());	
		if(num > 1){
			$(this).next().text(num-1);
		}
		return false;
	});

	$('.plus').click(function(){
		var num = parseInt($(this).prev().text());	
		$(this).prev().text(num+1);
		return false;
	});
	
	$('.btn_basket').click(function(){
		$('.detail_mn li').removeClass('on');
		$('.detail_mn li').eq(1).addClass('on');
		$('.tab_ct').removeClass('on');
		$($(this).attr('href')).addClass('on');
	});

	$(window).scroll(function(){
		if($('body').scrollTop() > 0){
			$('.btn_basket').fadeIn(200);
		}else{
			$('.btn_basket').fadeOut(200);
		}
		if ($(window).scrollTop() == $(document).height() - $(window).height()) {
			$('.btn_basket').fadeOut(200);
		}
	});

	$('#aside').click(function(e){
		if($(this).has(e.target).length > 0){
			if($(e.target).attr('href').length > 0){return true;}
			return false;
		}
		else{
			$(this).hide();
			return false;
		}
	});

	$('.btn_close').click(function(){
		$('#aside').hide();
		return false;
	});

	$('.inputchk label').click(function(){
		$(this).toggleClass('on');
		return false;
	});
});