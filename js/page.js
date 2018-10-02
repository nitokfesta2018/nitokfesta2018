// Navbarのリンクをクリックすると、自動でメニューを閉じる
$(function navClick() {
	$('.navbar-nav>li>a').on('click', function(){
		$('.navbar-collapse').collapse('hide');
	});
});

// トップページを見ているときは、ハンバーガーメニューを消す
function hamburger()
{
	if ($('article.main_article').css('display') == 'none'){
		$('nav.navbar').show();
		console.log("表示");
	}
	else {
		$('nav.navbar').hide();
		console.log("非表示");
	}
}

// ページ遷移
$(document).on("ready", function() {
	$(this).on("click", ".", function() {
		$("article#main_content").empty().html("<p id='ajax_load'>Loading...</p>");
		$("html, body").scrollTop(0);
		//menu style change
		$("li.side_menu a").removeClass("nav_a_active");
		$(this).addClass("nav_a_active");
		//ajaxh
		var idn = $(this).attr("id").substr(4, 4);
		switch (idn) {
		  case "2":
			idn = "event";
			break;

		  case "3":
			idn = "picture";
			break;

		  case "4":
			idn = "member";
			break;

		  case "5":
			idn = "access";
			break;

		  case "6":
			idn = "yuruchar";
			break;

		  case "7":
		  	idn = "link";
			break;

		  default:
			idn = "index";
			break;
		}

		if (idn != "index") {
			$("main article.main_article").css("display", "none");
			$("main article#main_content").css("display", "block");

			$.ajax({
				type: "GET",
				url: "./" + idn + ".html",
				dataType: "html"
			})
			.done(function(data) {
				$("article#main_content").html(data);
				if (idn == "picture") {
					galleryAppend();
				}
			})
			.fail(function(data) {
				alert("隱ｭ縺ｿ霎ｼ縺ｿ繧ｨ繝ｩ繝ｼ縺檎匱逕溘＠縺ｾ縺励◆縲ゅ＠縺ｰ繧峨￥縺励※縺九ｉ蜀榊ｺｦ縺願ｩｦ縺励￥縺�縺輔＞縲�");
			});
		}
		else {
			$("main article.main_article").css("display", "block");
			$("main article#main_content").css("display", "none");
		}
	});

	$(this).on("click", "a#sponsor_open", function() {
		$(".main_sponsor").fadeIn("fast");
		$("#sponsor_overlay").fadeIn("fast");
		$("#sponsor_content").fadeIn("fast");
	});
	$(this).on("click", "#sponsor_overlay, .sponsor_close", function() {
		$(".main_sponsor").fadeOut("fast");
		$("#sponsor_overlay").fadeOut("fast");
		$("#sponsor_content").fadeOut("fast");
	});
	
	//event
	$(this).on("click", "p#event_selector span", function() {
		var menu = $(this).attr("id").substr(9);
		//class change
		$("p#event_selector span").removeClass("event_active");
		$(this).addClass("event_active");
		if (menu == "classes") {
			$("div#event_classes").css("display", "block");
			$("div#event_other").css("display", "none");
		}
		else {
			$("div#event_classes").css("display", "none");
			$("div#event_other").css("display", "block");
		}
	});

	//picture, modal
	$(this).on("click", ".modal-open", function() {
		if ($("#modal-overlay")[0]) {
			$("#modal-overlay").remove();
		}
		modalAppend($(this).children("figure").children("img").attr("src"));
		$("body").append("<div id='modal-overlay'></div>");
		$("#modal-overlay").fadeIn("fast");
		$("#modal-content").fadeIn("fast");
	});
	$(this).on("click", "#modal-overlay, .modal-close, #modal-content", function() {
		$("#modal-content").fadeOut("fast");
		$("#modal-overlay").fadeOut("fast", function() {
			$("#modal-overlay").remove();
		});
	});
	$(this).on("mouseenter", "div.picture_lists", function() {
		$(this).children("figure").children("img").css("transform", "scale(1.5)");
		$(this).children("div.gallery_explain").fadeIn();
	});
	$(this).on("mouseleave", "div.picture_lists", function() {
		$(this).children("figure").children("img").css("transform", "scale(1.0)");
		$(this).children("div.gallery_explain").fadeOut();
	});

	//mobile
	$(function() {
		var w = $(window).width();
		if (w <= 470) {
			$("<img src='./image/poster.jpg' alt='隨ｬ11蝗樊ｲ也ｸ�ｫ伜ｰら･ｭ繝昴せ繧ｿ繝ｼ'/>").appendTo("aside.main_mobile");
		}
	});
	$(window).on("resize", function() {
		var w = $(window).width();
		if (w >= 471) {
			$("aside.main_mobile").empty();
		}
	});
});