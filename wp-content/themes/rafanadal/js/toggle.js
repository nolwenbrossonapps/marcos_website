jQuery(document).ready(function() {
    jQuery('.lateral_sponsor').delay(3000).fadeIn(500);
});

jQuery(document).ready(function() {
  jQuery('#show_sponsor').click(function() {

      if (jQuery('#show_sponsor').hasClass('show_sponsor')) {
          jQuery('#show_sponsor').removeClass();
          jQuery('body').removeClass('verve_showing_sponsors verve_showing_sidebar');
          jQuery('body').removeClass('verve_showing_menu');
          jQuery('#prk_blocks_wrapper').removeClass('vrv_1_anim verve_second_menu_anims');
          jQuery('#body_hider').removeClass('verve_second_menu_anims verve_second_bar_anims');
          jQuery('#prk_hidden_menu').removeClass('verve_second_menu_anims');
          jQuery('.lateral_sponsor').removeClass('verve_second_menu_anims');
      }
      else {
          jQuery('#show_sponsor').addClass('show_sponsor');
          jQuery('body').addClass('verve_showing_sponsors');
          jQuery('body').removeClass('verve_showing_menu verve_showing_sidebar');
          jQuery('#prk_blocks_wrapper').removeClass('vrv_1_anim verve_second_menu_anims');
          jQuery('#body_hider').removeClass('verve_second_bar_anims');
          jQuery('#body_hider').addClass('verve_second_menu_anims');
          jQuery('.lateral_sponsor').addClass('verve_second_menu_anims');
      }
  });
  jQuery('#vrv_side_menu').click(function() {
    jQuery('#show_sponsor').removeClass();
    jQuery('body').removeClass('verve_showing_sponsors');
    jQuery('#body_hider').removeClass('verve_second_menu_anims');
    jQuery('#prk_hidden_menu').removeClass('verve_second_menu_anims');
    jQuery('.lateral_sponsor').removeClass('verve_second_menu_anims');
  });
  jQuery('#prk_sidebar_trigger').click(function() {
    jQuery('#show_sponsor').removeClass();
    jQuery('body').removeClass('verve_showing_sponsors');
    jQuery('#body_hider').removeClass('verve_second_menu_anims');
    jQuery('#prk_hidden_menu').removeClass('verve_second_menu_anims');
    jQuery('.lateral_sponsor').removeClass('verve_second_menu_anims');
  });
});
jQuery(document).ready(function() {
  var $grid = jQuery('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });

// filter items on button click
  jQuery('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = jQuery(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  jQuery('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = jQuery( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      jQuery( this ).addClass('is-checked');
    });
});

});
jQuery(document).ready(function() {
  jQuery(".lateral_sponsor_bar_inner:contains('1')").val(' ');

});