$(document).on("click", "#button-game", function() {
    $('article#list-game').show();
    $('article#list-food').hide();
    $('article#list-others').hide();
    $('article#list-band').hide();

    $(this).css("background-color", "#577342");
    $('#button-food').css("background-color", "#ECE3D4");
    $('#button-others').css("background-color", "#ECE3D4");
    $('#button-band').css("background-color", "#ECE3D4");
});

$(document).on("click", "#button-food", function() {
    $('article#list-game').hide();
    $('article#list-food').show();
    $('article#list-others').hide();
    $('article#list-band').hide();

    $('#button-game').css("background-color", "#ECE3D4");
    $(this).css("background-color", "#577342");
    $('#button-others').css("background-color", "#ECE3D4");
    $('#button-band').css("background-color", "#ECE3D4");
});

$(document).on("click", "#button-others", function() {
    $('article#list-game').hide();
    $('article#list-food').hide();
    $('article#list-others').show();
    $('article#list-band').hide();

    $('#button-game').css("background-color", "#ECE3D4");
    $('#button-food').css("background-color", "#ECE3D4");
    $(this).css("background-color", "#577342");
    $('#button-band').css("background-color", "#ECE3D4");
});

$(document).on("click", "#button-band", function() {
    $('article#list-game').hide();
    $('article#list-food').hide();
    $('article#list-others').hide();
    $('article#list-band').show();

    $('#button-game').css("background-color", "#ECE3D4");
    $('#button-food').css("background-color", "#ECE3D4");
    $('#button-others').css("background-color", "#ECE3D4");
    $(this).css("background-color", "#577342");
});

	/*$(this).on("click", ".button > div",  function() {
		$("article#list").empty().html();
		$("html, body").scrollTop(0);
		
		//ページ遷移 ajax
		var listName = $(this).attr('class').slice(6, 7);
		switch (listName) {
		  case "1":
            $('#list-game').show();
            $('#list-food').hide();
            $('#list-others').hide();
			break;

		  case "2":
			$('#list-game').hide();
            $('#list-food').show();
            $('#list-others').hide();
			break;

		  case "3":
			$('#list-game').hide();
            $('#list-food').hide();
            $('#list-others').show();
			break;
		
		  default:
			$('#list-game').show();
            $('#list-food').hide();
            $('#list-others').hide();
			break;
        }

		/*if (listName != "index") {
			$("main article.main_article").css("display", "none");
			$("main article#main_content").css("display", "block");

			$.ajax({
				type: "GET",
				url: "./" + listName + ".html",
				dataType: "html"
			})
			.done(function(data) {
				$('#main_content').html(data);
			})
			.fail(function(data) {
				alert("読み込みエラーが発生しました。しばらくした後、再度お試しください。");
			});
		}
		else {
			$("main article.main_article").css("display", "block");
			$("main article#main_content").css("display", "none");
		}
		hamburger();
	});
});*/