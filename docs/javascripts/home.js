$.fn.extend({
  animateCss: function(animationName, callback) {
    var animationEnd = (function(el) {
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          return animations[t];
        }
      }
    })(document.createElement('div'));

    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);

      if (typeof callback === 'function') callback();
    });

    return this;
  },
});

var current = 0;
const messages = ['Stephen hawking was born on the 300th aniversary of Galileo Galilei death and died on the 139th aniversary of Albert Einsteins birthday, also known as Pi day?', 'At age 21 when diagnosed with ALS, Stephen Hawking was told he would only live 2 years.  He beat that by 53 years!'];
function changeDYK(){
  $('#dyk-text').animateCss('bounceOutRight', function(){
    $('#dyk-text').text(messages[current]);
    $('#dyk-text').animateCss('bounceInRight');
    if(current < (messages.length - 1)){
      current++;
    }else{
      current = 0;
    }
  });
}
changeDYK();
setInterval(changeDYK, 5000);

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
//$('.timeline-item.animateOnScroll').hide();

function timelineAnimationCheck(){
  $('.timeline-item.left.animateOnScroll').each(function () {
     if (isScrolledIntoView(this) === true) {
         $(this).show();
         $(this).children().addClass('bounceIn');
     }
  });
  $('.timeline-item.right.animateOnScroll').each(function () {
     if (isScrolledIntoView(this) === true) {
         $(this).show();
         $(this).children().addClass('bounceIn');
     }
  });
}
$(window).scroll(timelineAnimationCheck);
$(document).ready(timelineAnimationCheck);

function awardsAnimationCheck(){
  $('.awards-item.animated.animateOnScroll').each(function(){
    if (isScrolledIntoView(this) === true){
      $(this).addClass('fadeInLeft');
    }
  });
}
$(window).scroll(awardsAnimationCheck);
$(document).ready(awardsAnimationCheck);
