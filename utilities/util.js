'use strict';
var _ = require('underscore');
var data = require("./../data/data.js")

function Util(){
	this.description = "Utility for parsing json"

}


Util.prototype.clean = function(callback){
	var d = data.new().locs.locations;
	var l =[]
	var nd = {}
	_.each(d,function(v,i){
		var p ={};
		p.lat = v.latitudeE7 / 10000000;
		p.lng = v.longitudeE7 / 10000000;
		p.timestamp = new Date(parseInt(v.timestampMs));
		l.push(p)
	})
	callback(l)
}

module.exports = {
	util: function(){
		return new Util();
	}
}