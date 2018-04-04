webpackJsonp([9,3],{

/***/ 1:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 1;

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var container = $('#container');
var bar0 = new ProgressBar.Circle('#progressbar0', {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#498af3', width: 1 },
  to: { color: '#498af3', width: 5 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 80);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + '%');
    }

  }
});
bar0.text.style.fontFamily = 'TitilliumWeb-Light';
bar0.text.style.fontSize = '2rem';

bar0.animate(1.0);  // Number from 0.0 to 1.0

var bar1 = new ProgressBar.Circle('#progressbar1', {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#333', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + '%');
    }

  }
});
bar1.text.style.fontFamily = 'TitilliumWeb-Light';
bar1.text.style.fontSize = '2rem';

bar1.animate(1.0);  // Number from 0.0 to 1.0


var bar2 = new ProgressBar.Circle('#progressbar2', {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#333', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + '%');
    }

  }
});
bar2.text.style.fontFamily = 'TitilliumWeb-Light';
bar2.text.style.fontSize = '2rem';

bar2.animate(1.0);  // Number from 0.0 to 1.0

var bar3 = new ProgressBar.Circle('#progressbar3', {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#333', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + '%');
    }

  }
});
bar3.text.style.fontFamily = 'TitilliumWeb-Light';
bar3.text.style.fontSize = '2rem';

bar3.animate(1.0);  // Number from 0.0 to 1.0

// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/


var barline = new ProgressBar.Line('#line0', {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#498af3',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#999',
      position: 'absolute',
      right: '0',
      top: '0',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});
barline.text.style.fontFamily = 'TitilliumWeb-Light';
barline.text.style.fontSize = '24px';
barline.animate(1.0);  // Number from 0.0 to 1.0


var barline1 = new ProgressBar.Line('#line1', {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#498af3',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#999',
      position: 'absolute',
      right: '0',
      top: '0',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});
barline1.text.style.fontFamily = 'TitilliumWeb-Light';
barline1.text.style.fontSize = '24px';
barline1.animate(1.0);  // Number from 0.0 to 1.0


var barline2 = new ProgressBar.Line('#line2', {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#498af3',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#999',
      position: 'absolute',
      right: '0',
      top: '0',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});
barline2.text.style.fontFamily = 'TitilliumWeb-Light';
barline2.text.style.fontSize = '24px';
barline2.animate(1.0); 

var barline3 = new ProgressBar.Line('#line3', {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#498af3',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#999',
      position: 'absolute',
      right: '0',
      top: '0',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});
barline3.text.style.fontFamily = 'TitilliumWeb-Light';
barline3.text.style.fontSize = '24px';
barline3.animate(1.0); 

/***/ })

});