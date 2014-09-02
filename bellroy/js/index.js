$(function(){
	//comparison对比栏目的图片轮转
	$(".comparisonSliderPagination_item a").click(function(){
		if(comparisonCounter==1){//如果之前的动作已经结束
			comparisonCounter=0;//当前动作开始，将其置为0
			var clickIndex=$(this).attr("img_index");//获取点击的图片索引号
			var curIndex=$(".comparisonSliderPagination").find(".active").attr("img_index");//获取当前的图片索引号
			$(".comparisonSliderPagination").find(".active").removeClass("active");//移除当前按钮的亮色
			$(this).addClass("active");//为点击的按钮添加亮色
			if(clickIndex<curIndex){//当点击的图片在当前显示图片的左侧
				$(".comparisonSliderControl img[img_index='"+clickIndex+"']").css({"left":"-100%","z-index":"10"});//将要显示的图片放到左侧
				$(".comparisonSliderControl img[img_index='"+clickIndex+"']").show(0);//显示该图片
				$(".comparisonSliderControl img[img_index='"+clickIndex+"']").animate({"left":"0"},1000);//向右移动两张图片
				$(".comparisonSliderControl img[img_index='"+curIndex+"']").animate({"left":"100%"},1000,function(){
					$(".comparisonSliderControl img[img_index='"+curIndex+"']").hide(0);//移动完成后将之前显示的图片隐藏，并改变其left,z-index值
					$(".comparisonSliderControl img[img_index='"+curIndex+"']").css({"left":"0","z-index":"0"});
					comparisonCounter=1;//当前动作结束，将其置为1
				});
			}else if(clickIndex>curIndex){//当点击的图片在当前显示图片的右侧
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
	$(".adventureRowItem").click(function(){
		$(".adventureRow").find(".poster").remove();
		$(".adventureRow").find(".caption").addClass("vertical");
		$(".adventureRow").find(".caption").show();
		$(this).find(".caption").hide();
		$(".adventureRow").find(".adventureSlider").show();
		$(".adventureRowItem").attr("isselected","0");
		$(this).attr("isselected","1");
		$(".adventureRowItem[isselected='0']").animate({"width":"3%"},800);
		$(this).animate({"width":"94%"},800);
	});
	// $("#wesa").click(function(){
	// 	$(".adventureRow").find(".poster").remove();
	// 	$(".adventureRow").find(".caption").addClass("vertical");
	// 	$(".adventureRow").find(".caption").show();
	// 	$(this).find(".caption").hide();
	// 	$(".adventureRow").find(".adventureSlider").show();

	// 	$("#wepa").animate({"width":"3%"},800);
	// 	$("#wesa").animate({"width":"94%"},800);
	// 	$("#weta").animate({"width":"3%"},800);
	// });
	// $("#wepa").click(function(){
	// 	$(".adventureRow").find(".poster").remove();
	// 	$(".adventureRow").find(".caption").addClass("vertical");
	// 	$(".adventureRow").find(".caption").show();
	// 	$(this).find(".caption").hide();
	// 	$(".adventureRow").find(".adventureSlider").show();
		
	// 	$("#weta").animate({"width":"3%"},800);
	// 	$("#wesa").animate({"width":"3%"},800);
	// 	$("#wepa").animate({"width":"94%"},800);
	// });
	// $("#weta").click(function(){
	// 	$(".adventureRow").find(".poster").remove();
	// 	$(".adventureRow").find(".caption").addClass("vertical");
	// 	$(".adventureRow").find(".caption").show();
	// 	$(this).find(".caption").hide();
	// 	$(".adventureRow").find(".adventureSlider").show();

	// 	$("#wepa").animate({"width":"3%"},800);
	// 	$("#wesa").animate({"width":"3%"},800);
	// 	$("#weta").animate({"width":"94%"},800);
	// });





});

var comparisonCounter=1;

