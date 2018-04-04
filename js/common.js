var func = {
  scrollTo: function(options, callback) {
    $(options.window).scroll(function() {
      var hT = $(options.elem).offset().top,
        hH = $(options.elem).outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
      if (wS > (hT + hH - wH)) {
        callback();
      }
    });
  }
};
