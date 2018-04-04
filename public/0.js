webpackJsonp([0,2],{

/***/ 8:
/***/ (function(module, exports) {

$(document).ready(function(){
    var $el = $("#n-1"),
      value = 1295365;
    $({
      percentage: 0
    }).stop(true).animate({
      percentage: value
    }, {
      duration: 4000,
      easing: "easeOutExpo",
      step: function() {

        var percentageVal = Math.round(this.percentage * 10) / 10;
        //console.log(this.percentage);
        $el.text(percentageVal);
      }
    }).promise().done(function() {
      $el.text(value);
    });

});

/***/ })

});