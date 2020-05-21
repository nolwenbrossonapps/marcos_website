jQuery(function($){
	var canBeLoaded = true, // this param allows to initiate the AJAX call only if necessary
	    bottomOffset = 1200; // the distance (in px) from the page bottom when you want to load more posts
 
	$(window).scroll(function(){
		var data = {
			'action': load_more_action,
			'query': load_more_query,
			'page' : load_more_current_page
		};
		if( load_more_current_page < load_more_max_page && $(document).scrollTop() > ( $(document).height() - bottomOffset ) && canBeLoaded == true ){
			jQuery('.ajax-loader-gif-container').show();
			$.ajax({
				url : load_more_ajax_url,
				data:data,
				type:'POST',
				beforeSend: function( xhr ){
					// you can also add your own preloader here
					// you see, the AJAX call is in process, we shouldn't run it again until complete
					canBeLoaded = false; 
				},
				success:function(data){
					if( data ) {
						$('.ajax-item').last().after( data ); // where to insert posts
						jQuery('.ajax-loader-gif-container').hide();
						canBeLoaded = true; // the ajax is completed, now we can run it again
						load_more_current_page++;
					}
				}
			});
		}
	});
});