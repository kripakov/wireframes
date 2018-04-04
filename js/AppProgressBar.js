var func = {
  parametr: function(options){
    var hT = $(options.elem).offset().top,
        hH = $(options.elem).outerHeight(),
        wH = $(window).height();
        
    var ScrollToProgressBar = function(){
      $(window).scroll(function() {
        var wS = $(this).scrollTop();
        //console.log(wS,hT,hH,wH);
        if (wS > (hT + hH - wH)) {
          //console.log('require ProgressBar ');
          require.ensure(['./ProgressBar'], function(require){
            require('./ProgressBar');
          });
        }
      });
    };
    var ScrollToStatistics = function(){
      $(window).scroll(function() {
        var wS = $(this).scrollTop();
        if (wS > (hT + hH - wH)) {
          //console.log('require ScrollToStatistics ');
          require.ensure(['./RangeNumber'], function(require){
            require('./RangeNumber');
          });
        }
      });
    };

    return{
      ScrollToProgressBar: ScrollToProgressBar,
      ScrollToStatistics: ScrollToStatistics
    }

  }
};

var objTeam = {
  window: window,
  elem: '.team .gallery',
  script: ['./ProgressBar']
};
var objStatistics = {
  window: window,
  elem: '.photo__load button',
  script: ['./ProgressBar']
}
func.parametr(objTeam).ScrollToProgressBar();
func.parametr(objStatistics).ScrollToStatistics();