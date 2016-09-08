$(function(){
	var mySwiper = new Swiper ('#now-play', {
        slidesPerView: 2,
        paginationClickable: true,
        spaceBetween: 10,
        freeMode: true,
	    // 如果需要分页器
	    // pagination: '.swiper-pagination',
	    
	    // 如果需要前进后退按钮
	    // nextButton: '.swiper-button-next',
	    // prevButton: '.swiper-button-prev',
	    
	    // 如果需要滚动条
	    // scrollbar: '.swiper-scrollbar',

	 })
	 var mySwiperAd = new Swiper ('#banner', {
	 	 pagination: '.swiper-pagination',
	 	 slidesPerView: 1,
	 	 loop:false,
	 	 //grabCursor: true,
	 	 //paginationClickable: true,
	 	 autoplay: 3000

	 })        	
})