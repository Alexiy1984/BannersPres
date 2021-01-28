import '../styles/index.scss';
import 'bootstrap';
import $ from "jquery";
import LazyLoad from 'vanilla-lazyload';
import WOW from 'wow.js';

if (process.env.NODE_ENV === 'development') {
  require('../index.pug');
}

$(function() {
  var lazyLoadInstance = new LazyLoad({
    elements_selector: '.lazy',
  });

  var wow = new WOW({
    boxClass:     'wow',      
    animateClass: 'animate__animated',     
    mobile:       true,       
    live:         true,       
    scrollContainer: null,    
    resetAnimation: true, 
  });

  wow.init();

  $('.sizes-box__button').on('click', function() {
    var dataTarget = $('#' + $(this).attr('data-target'));
  
    if (dataTarget.length) {
      $('.banners-show__row').hide();
      console.log(dataTarget[0]);
      dataTarget.show();
      $(dataTarget).find('.banners-show__item').each(function() {
        wow.show(this);
      });
      $(dataTarget).find('.banners-show__item_big').each(function() {
        wow.show(this);
      });
      $(dataTarget).find('.banners-show__item_small').each(function() {
        wow.show(this);
      });
      $('.sizes-box__button').removeClass('active');
      $(this).addClass('active');
    }
  });
});



console.log('webpack starterkit');
