$(document).ready(function () {

	// header 
	// header -> scroll down event
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('.nav-bar').outerHeight();
	$(window).scroll(function (event) {
		didScroll = true;
	});
	setInterval(function () {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 300);

	function hasScrolled() {
		var st = $(this).scrollTop();
		/* // 2021-07-09 모바일 헤더 스크롤 고정 변경 */
		var onlyMobile = /Android|webOS|iPhone|BlackBerry/i.test(navigator.userAgent) ? true : false;
		jQuery(document).ready(function ($) {
			if (!onlyMobile) {
				//PC , ipad
				$('.nav-bar').removeClass('nav-up').addClass('nav-down');

				if (Math.abs(lastScrollTop - st) <= delta) return;
				if (st > lastScrollTop && st > navbarHeight) {
					// Scroll Down
					$('.nav-bar').removeClass('nav-down').addClass('nav-up');

				} else {
					// Scroll Up 
					if (st + $(window).height() < $(document).height()) {
						$('.nav-bar').removeClass('nav-up').addClass('nav-down');
					}
				}
				lastScrollTop = st;

			} else {
				//onlyMobile
				$('.nav-bar').removeClass('nav-up nav-down');
			}
			/* // 2021-07-09 모바일 헤더 스크롤 고정 변경 end*/
		});
	}

	// top button controll	

	// $('.top-btn').css("display", "none");

	$(window).scroll(function () {
		// console.log($(this).scrollTop())

		if ($(this).scrollTop() > 500) {
			$('.top-btn').fadeIn();
			// } else if ($(this).scrollTop()  < 500 && $(this).scrollTop() > 100 ) {
		} else if ($(this).scrollTop() < 500) {
			$('.top-btn').fadeOut();
		}

		//top button
		$(".top-btn").click(function () {
			$('html, body').animate({
				scrollTop: 0
			}, '500');
		});
	});


	$('.checkbox_checked').click(function (e) {
		$(this).children('label').toggleClass('on');
		e.preventDefault();
	});
	$('.checkbox-line').click(function (e) {
		e.preventDefault();
		$(this).children('label').toggleClass('on');
	});

	$('.title-have').click(function () {
		$(this).addClass('on');
		$(this).next().removeClass('on');
		$('.resist-have').removeClass('close');
		$('.resist-havent').addClass('close');
	});

	$('.title-havent').click(function () {
		$(this).addClass('on');
		$(this).prev().removeClass('on');
		$('.resist-have').addClass('close');
		$('.resist-havent').removeClass('close');
	});

	$('.delete_selected').on('click', function () {
		$(this).parent("li").hide();
	});

	// $('.hover_event').hover(function () {
	// 	$(this).children('img').toggleClass('close');
	// });

	$('.hover_event').mouseenter(function () {
		$(this).prev().removeClass('close');
		stopPropagation();
	});

	$('.hover_event').mouseleave(function () {
		$(this).prev().addClass('close');
		stopPropagation();
	});

	$('.delete_search').on('click', function () {
		$(this).prev().val('');
	});

	$('.delete').on('click', function () {
		$(this).prev().val('');
	});

	// 	selectbox
	$(document).on('click',".select-ui > a", function (e) {
		e.stopPropagation();
		$(this).next("ul").slideToggle(200);
		return false;
	});

	$(document).on('click',".select-ui > ul > li", function (e) {
		e.stopPropagation();
		$(this).parent().hide().parent(".select-ui").children("a").text($(this).text());
		return false;
	});
	$(document).on('mouseleave',".select-ui ", function (e) {
		e.stopPropagation();
		$(this).find("#select-list").delay(300).slideUp(700);
		return false;
	});

	// $(document).on("click", function(event){
	// 	var $trigger = $(".select-ui > a");
	// 	if($trigger !== event.target && !$trigger.has(event.target).length){
	// 		$("#select-list").slideUp("500");
	// 	}
	// });
	//	 selectbox - end

	// mobile header
	// header sub menu toggle
	$(".sub-menu-box > ul").hide();
	$(".sub-menu-box").click(
		function () {
			// stopPropagation();
			$(".sub-menu-box .submenu").stop().slideUp();
			$(this).find(".submenu").stop().slideToggle();
			(200);
			$(function () {
				var sBtn = $(".nav-sub-wrap > li");
				sBtn.find("a").mouseenter(function () {
					sBtn.removeClass("active");
					$(this).parent("li").addClass("active");
				})
			});
		})

	// ghost button toggle event - .nav-sub	
	$(".hamburger").click(function () {
		$(this).toggleClass("is-active");
		if ($('.hamburger').hasClass("is-active")) {
			$(".nav-mask").css("display", "block");
			// $(".nav-bar").css("background-color", "#fff");
			$('body').addClass("hidden");

			if ($(window).width() < 768) {
				$(".nav-sub").stop().animate({
						"width": "75%"
					},
					100);

			} else if ($(window).width() >= 768) {
				$(".nav-sub").stop().animate({
						"width": "50%"
					},
					150);

			} else {
				$(".nav-sub").stop().animate({
						"width": "0%"
					},
					200);
			}
		} else {
			$(".nav-mask").css("display", "none");
			$(".nav-sub").stop().animate({
					"width": "0%"
				},
				100);
			$('body').removeClass("hidden");
		}
	});

	// mob nav-mask 클릭 submenu 닫기
	$(".nav-mask").on('click', function () {
		$(".nav-sub").stop().animate({
			"width": "0"
		}, 100);
		$(".nav-mask").stop().hide();
		$('body').removeClass("hidden");
		$('.hamburger').removeClass("is-active");
	});

	$(".nav-lt .nav-lt-subs").mouseenter(function () {
		$(this).children(".nav-lt-sub").removeClass('close');
		// stopPropagation();
	});
	$(".nav-lt .nav-lt-subs").mouseleave(function () {
		$(this).children(".nav-lt-sub").addClass('close');
		// stopPropagation();
	});

	$(".nav-rt-sub").mouseenter(function () {
		$(this).children(".nav-tooltip").removeClass('close');
		// stopPropagation();
	});
	$(".nav-rt-sub").mouseleave(function () {
		$(this).children(".nav-tooltip").addClass('close');
		// stopPropagation();
	});
	// mobile header end


		
	$('.btn-delete').on('click', function () {
		$(this).parents('td').children('.sampleNo').val('');
		$(this).parents('td').children('.sampleNo').focus();
	});


});

$(function(){

	var header = {
	  init: function() {
		this.setElements();
		this.initLayout();
		this.bindEvents();
	  },
	  setElements: function() {
		this.header = $('.header');
		this.gnbItem = this.header.find('.gnb-item');
	  },
	  initLayout: function() {
		
	  },
	  bindEvents: function() {
		this.gnbItem.on('mouseover', $.proxy(this.mouseoverMenu, this));
		this.gnbItem.on('mouseout', $.proxy(this.mouseoutMenu, this));
	  },
	  mouseoverMenu: function(e){
		var target = $(e.currentTarget);
		if(!this.header.hasClass('is-active-header')){
		  this.header.addClass('is-active-header');
		}
		if(!target.hasClass('is-active')){
		  target.addClass('is-active');
		}
	  },
	  mouseoutMenu: function(e){
		var target = $(e.currentTarget);
		if(this.header.hasClass('is-active-header')){
		  this.header.removeClass('is-active-header');
		}
		if(target.hasClass('is-active')){
		  target.removeClass('is-active');
		}
	  }
	};

	$(document).ready(function(){
	  header.init();
	//   AOS.init();
	});
  });


// function addColumn() {
// 	var table = $('#fruits');
	
// 	for(var i = 0; i < table.rows.length; i++)  {
// 	  var newCell =table.rows[i].insertCell(-1);
// 	  newCell.innerText = 'New';
// 	}
//   }
// //문의하기 버튼
// $(document).on('click', '.fa-commenting-o', function() {
// 	$('.btn-quest .content').show();
// 	$('.btn-quest p').show();
// 	$('.btn-quest .fa-commenting-o').hide();
// 	$('.btn-quest .fa-times').show();
// });

// //문의하기 끄기 버튼
// $(document).on('click', '.fa-times', function() {
// 	$('.btn-quest .content').hide();
// 	$('.btn-quest p').hide();
// 	$('.btn-quest .fa-commenting-o').show();
// 	$('.btn-quest .fa-times').hide();
// });

// //실시간 상담
// $(document).on('click', '.custom-button-1', function() {
// 	$('.btn-quest .content').hide();
// 	$('.btn-quest p').hide();
// 	$('.btn-quest .fa-commenting-o').show();
// 	$('.btn-quest .fa-times').hide();
// });






















