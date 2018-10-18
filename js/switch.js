/*arinaボタン押したとき*/
$(document).on("click", "#arina_button",  function() {
	/*表示・非表示の切り替え*/
	$('.arina_timetable').css("display", "block");
	$('.stilt_timetable').css("display", "none");
	$('.others_timetable').css("display", "none");
	/*ボタンの色変更*/
	$(this).css("background-color", "#577342");
	$("#stilt_button").css("background-color", "#ECE3D4");
	$("#others_button").css("background-color", "#ECE3D4");	
});

/*stiltボタン押したとき*/
$(document).on("click", "#stilt_button",  function() {
	$('.stilt_timetable').css("display", "block");
	$('.arina_timetable').css("display", "none");
	$('.others_timetable').css("display", "none");
	$(this).css("background-color", "#577342");
	$("#arina_button").css("background-color", "#ECE3D4");
	$("#others_button").css("background-color", "#ECE3D4");	
});

/*othersボタン押したとき*/
$(document).on("click", "#others_button",  function() {
	$('.others_timetable').css("display", "block");
	$('.arina_timetable').css("display", "none");
	$('.stilt_timetable').css("display", "none");
	$(this).css("background-color", "#577342");
	$("#arina_button").css("background-color", "#ECE3D4");
	$("#stilt_button").css("background-color", "#ECE3D4");	
});