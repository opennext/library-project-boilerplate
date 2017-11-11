(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.imageUtil = factory());
}(this, (function () { 'use strict';

var CONSTANT = {
  SIZE: 'size',
  POSITION: 'position'
};

var resize = function resize() {
  consle.log('function named resize.');
};

var imageUtil$1 = {
  resize: resize,
  CONSTANT: CONSTANT
};

return imageUtil$1;

})));
