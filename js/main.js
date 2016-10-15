//展开参数选项
$(document).ready(function(){
  $(".showbtn").click(function(){
    $(".showcase").slideToggle("slow");
    $(".arrowdown").toggleClass("arrowup", 1000);
  });
});

//筛选
$(document).ready(function() {
	$(".filt1").click(function(){
		$(".filt1").toggleClass('current');
	});
	$(".filt2").click(function(){
		$(".filt2").toggleClass('current');
	});
	$(".filt3").click(function(){
		$(".filt3").toggleClass('current');
	});
});

//视频列表上滑
// $(document).ready(function(){
// 	$(".vediobox").hover(function(){
// 		$(".mediainfo").css({
// 			top: '128px',
// 		});(500);
// 	});
// });