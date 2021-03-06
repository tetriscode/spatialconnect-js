'use strict';
/*global WebViewJavascriptBridge*/
var Rx = require('rx');
var Commands = require('./commands');
var filter = require('./filter');
var SCSpatialFeature = require('./sc.spatialfeature.js');
var SCGeometry = require('./sc.geometry');
var pre = require('./pre');
var SC = require('./sc');

var SpatialConnect = (function() {
  var sc = {};
  sc.action = SC.action;
  sc.stream = SC.stream;
  sc.Filter = filter;
  sc.gfeature = SCGeometry;
  sc.feature = SCSpatialFeature;
  sc.Commands = Commands;
  return sc;
})();

module.exports = SpatialConnect;
