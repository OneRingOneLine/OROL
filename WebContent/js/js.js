// JavaScript Document
	$(function(){
    $(".top_le_nav a").zxxAnchor({
        anchortag: "href"                       
    });
 
	$(".top_le_nav a").click(
		function(){
			$(".top_le_nav a:not(hover)").removeClass("hover");
			$(this).addClass("hover");
			}
	)  
});

