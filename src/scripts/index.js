import '../styles/index.scss';
import 'bootstrap';
import $ from "jquery";
import LazyLoad from 'vanilla-lazyload';
import WOW from 'wow.js';


if (process.env.NODE_ENV === 'development') {
  require('../index.pug');
}

$('.sizes-box__button').on('click', function() {
  var dataTarget = $('#' + $(this).attr('data-target'));

  if (dataTarget.length) {
    $('.banners-show__row').hide();
    console.log(dataTarget[0]);
    dataTarget.show();
    $('.sizes-box__button').removeClass('active');
    $(this).addClass('active');
  }
});

console.log('webpack starterkit');
