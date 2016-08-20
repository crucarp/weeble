$(document).ready(function () {
	$('.regSearch').click(function() {
		$('.searchList').toggle();
		return false;
	});
	$('.txtSel').click(function() {
		$(this).next().toggle();
		return false;
	});
	//main slide
    $('.promo').bxSlider({
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 1100,
        slideMargin: 5,
        auto: true,
		mode: 'fade',
		speed: 1500
    });

	$('.detail_slide').bxSlider({
        minSlides: 4,
        maxSlides: 4,
        slideWidth: 120,
        slideMargin: 1,
		pager:false
    });

	$('.bt_Sel').click(function(){
		$(this).toggleClass('on');
		$(this).next('.menu').toggle();
		$('.blur').toggle();
		return false;
	});

	$('.menu > li > a').click(function(){
		$(this).next('ul').toggle();
	});

	$('.menu > li > ul > li > a').hover(function(){
		$('.menu > li > ul > li').removeClass('act');
		$('.menu > li > ul > li > ul').hide();
		$(this).parent().addClass('act');
		$(this).next('ul').show();
	},function(){
		
	});

	$('.cMsg').click(function(){
		$(this).next().toggle();
	});
	var item_height = 178;
	var ul_top = parseInt($("#photo_sd").css("top"));

	$(".sd_btn").click(function(event){
		event.preventDefault();

		var item_cnt = $("#photo_sd > li").length;
		var type = $(this).data('type');
		if( type == 'up'){
			if( ul_top <= ((item_cnt-1)*item_height*(-1)) ){ //마지막계산
				return false;
			}
			ul_top = parseInt((ul_top - item_height));
		}else{
			console.log(ul_top , ((item_cnt-1)*item_height));
			if( ul_top >= 0 ){ //마지막계산
				return false;
			}
			ul_top = parseInt((ul_top + item_height));
		}
		$("#photo_sd").css("top",ul_top );
	});
		
	$('.tab_menu > li > a').click(function(){
		$('.tab_menu > li').removeClass('on');
		$(this).parent().addClass('on');
		$('.tab_ct').removeClass('on');
		$($(this).attr('href')).addClass('on');
		$('.sub_tab_ct').removeClass('on');
		$(this).parent().parent().parent().find($(this).attr('href')).find('#sub_tab1').addClass('on');
		$('.tab_menu_sub li').removeClass('on');
		$(this).parent().parent().parent().find($(this).attr('href')).find('.tab_menu_sub > li:first-child').addClass('on');
		return false;
	});

	$('.tab_menu_sub > li > a').click(function(){
		$('.tab_menu_sub > li').removeClass('on');
		$(this).parent().addClass('on');
		$(this).parent().parent().parent().parent().find('.sub_tab_ct').removeClass('on');
		$(this).parent().parent().parent().parent().find($(this).attr('href')).addClass('on');
		return false;
	});

	$('.cnt_per').click(function(){
		$(this).next().toggle();
		return false;
	});

	$('.btn_pic').click(function(){
		$(this).toggleClass('on');
		return false;
	});

	$('.btn_reserve').click(function(){
		$('.pop_res').show();
	});

	$('.btn_reserve_now').click(function(){
		$('.pop_res').show();
	});

	$('.btn_close').click(function(){
		$('#pop_wrap').hide();
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

	$('.btn_sel').click(function(){
		$(this).toggleClass('off');
		$(this).next().toggle();
		return false;
	});
});