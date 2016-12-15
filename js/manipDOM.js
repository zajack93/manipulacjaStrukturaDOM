$(function(){

	
	var numberOfParagraph =0;

		$("#przycisk").click(function() {
			replace(numberOfParagraph+1);	
		});
	
		$("#przycisk2").click(function() {
			replace2(numberOfParagraph-1);	
		});
	
		function replace(newPlace) {
		
			$('p:first').before($('p:last'));
			numberOfParagraph=newPlace;

		}
			
		
		function replace2(newPlace) {
			
			$('p:last').after($('p:first'));
			numberOfParagraph=newPlace;
			
		}
	
	
});