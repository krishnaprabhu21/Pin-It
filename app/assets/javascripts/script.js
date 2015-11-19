
$(function(){

	var $container = $('#pins');

  	$container.imagesLoaded(function(){
    	$container.masonry({
      		itemSelector: '.box',
      		isFitWidth: true
    	});
 	});

});		    