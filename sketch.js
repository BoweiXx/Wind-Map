var mapdata;
var coastline;
var lake_poly = [];
var coastline_line = [];
var lake;
var lake_arc = [];
var coastline_arc = [];
var coastline_index;
var lake_index;
// let lake_bool = true;
// let coastline_bool = true;
// use the 50m coastline and 50m lake
function preload(){
  loadJSON("data/earth-topo.json", getData);
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  getLake();
  getCoastline();
  getArc(coastline_line,lake_poly);
}
function draw() {
  background(220);
  // console.log(coastline_line);
}
//lake data(in array)
function getLake() {
  //length of lake is 77
  if (mapdata) {
    lake = mapdata.objects.lakes_50m.geometries;
    for (var j = 0; j < lake.length; j++) {
      if (lake[j].type == "Polygon") {
        lake_poly = concat(lake_poly, lake[j].arcs);
      }
    }
  }
}
//coastline data (in array)
function getCoastline() {
  //length of coastline is 1428
  if (mapdata) {
    coastline = mapdata.objects.coastline_50m.geometries;
    for (var i = 0; i < coastline.length; i++) {
      if (coastline[i].type == "LineString") {
        coastline_line = concat(coastline_line, coastline[i].arcs);
      }
    }
  }
}
function getArc(coastArray, lakeArray) {
  for(var i = 0; i < coastArray.length; i ++){
    var index1 = coastArray[i];
    console.log(index1)
    for (var j = 0; j < index1.length; j++){
    }
  }
  for(var j = 0; j < lakeArray; j++){

  }
}
//from the callback to pull data and store it into a global variable
function getData(data) {
  mapdata = data;
  // console.log(mapdata);
}
