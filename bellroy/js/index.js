$(function(){
	$(".comparisonSliderPagination_item a").click(function(){
		if(comparisonCounter==1){
			comparisonCounter=0;
			var clickIndex=$(this).attr("img_index");
			var curIndex=$(".comparisonSliderPagination").find(".active").attr("img_index");
			$(".comparisonSliderPagination").find(".active").removeClass("active");
			$(this).addClass("active");
			if(clickIndex<curIndex){
				$(".comparisonSliderControl img[img_index='"+clickIndex+"']").css({"left":"-100%","z-index":"10"});
				$(".comparisonSliderControl img[img_index='"+clickIndex+"']").show(0);
				$(".comparisonSliderControl img[img_index='"+clickIndex+"']").animate({"left":"0"},1000);
				$(".comparisonSliderControl img[img_index='"+curIndex+"']").animate({"left":"100%"},1000,function(){
					$(".comparisonSliderControl img[img_index='"+curIndex+"']").hide(0);
					$(".comparisonSliderControl img[img_index='"+curIndex+"']").css({"left":"0","z-index":"0"});
					comparisonCounter=1;
				});
			}else if(clickIndex>curIndex){
				$(".comparisonSliderControl img[img_index='"+clickIndex+"']").css({"left":"100%","z-index":"10"});
				$(".comparisonSliderControl img[img_index='"+clickIndex+"']").show(0);
				$(".comparisonSliderControl img[img_index='"+clickIndex+"']").animate({"left":"0"},1000);
				$(".comparisonSliderControl img[img_index='"+curIndex+"']").animate({"left":"-100%"},1000,function(){
					$(".comparisonSliderControl img[img_index='"+curIndex+"']").hide(0);
					$(".comparisonSliderControl img[img_index='"+curIndex+"']").css({"left":"0","z-index":"0"});
					comparisonCounter=1;
				});
			}
		}	
	});
});

var comparisonCounter=1;

