$(function(){
	
	
	var firstParagraph = $("body").find("p").eq(0);	// metoda eq(0) - dla 1 elementu potomnego w kolekcji wszystkich elementow p 
	console.log("firstParagraph =" + firstParagraph);
	var paragraphCount = $("p").length;
	console.log("paragraphCount =" + paragraphCount);
	var lastParagraph = $("body").find("p").eq(paragraphCount-1);  //bo ide od 0!!!!
	var temporary=paragraphCount-1;
	var temp=0;
	console.log("lastParagraph =" + lastParagraph);
	
	var numberOfParagraph =0;
	
//	$("body").each(function(index){
//		
//		console.log(index);
	
		$("#przycisk").click(function() {
			replace(numberOfParagraph+1);	
		});
	
		$("#przycisk2").click(function() {
			replace2(numberOfParagraph-1);	
		});
	
//	});	
		

	
	function replace(newPlace) {
		console.log(newPlace);
			firstParagraph.prepend(lastParagraph);
			temp=++temp;
			firstParagraph= $("body").find("p").eq(temp);
			numberOfParagraph=newPlace;
			return numberOfParagraph;
		}
			
		
	function replace2(newPlace) {
		console.log(newPlace);
			
			lastParagraph.append(firstParagraph);
			temporary=--temporary;
			lastParagraph= $("body").find("p").eq(temporary);
			numberOfParagraph=newPlace;
			return numberOfParagraph;
			
			
		}
		
	
	
});
	
