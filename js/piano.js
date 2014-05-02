Gibberish.init(); 
var a = new Gibberish.Synth({ attack:44, decay:44100 }).connect(); 
a.waveform = "Triangle";

var h = new Gibberish.Hat().connect();
var s = new Gibberish.Snare().connect();
var k = new Gibberish.Kick().connect();

function playSnare() {
  s.note();
}

function playHat() {
  h.note();
}

function playBass() {
  k.note();
}

function playNote(x) {
  a.note(x);
} 

function drawPiano() {

var stage = new Kinetic.Stage({
  container: "container",
  width: 1000,
  height: 600
});

var layer = new Kinetic.Layer();

var keyC = new Kinetic.Rect({
  x: 100,
  y: 150,
  width: 75,
  height: 300,
  fill: "white",
  stroke: "black",
  strokeWidth: 2
});

var keyCSharp = new Kinetic.Rect({
  x: 150,
  y: 150,
  width: 50,
  height: 200,
  fill: "black",
  stroke: "black",
  strokeWidth: 2
});

var keyD = new Kinetic.Rect({
  x: 175,
  y: 150,
  width: 75,
  height: 300,
  fill: "white",
  stroke: "black",
  strokeWidth: 2
});

var keyDSharp = new Kinetic.Rect({
  x: 225,
  y: 150,
  width: 50,
  height: 200,
  fill: "black",
  stroke: "black",
  strokeWidth: 2
});

var keyE = new Kinetic.Rect({
  x: 250,
  y: 150,
  width: 75,
  height: 300,
  fill: "white",
  stroke: "black",
  strokeWidth: 2
});

var keyF = new Kinetic.Rect({
  x: 325,
  y: 150,
  width: 75,
  height: 300,
  fill: "white",
  stroke: "black",
  strokeWidth: 2
});

var keyFSharp = new Kinetic.Rect({
  x: 375,
  y: 150,
  width: 50,
  height: 200,
  fill: "black",
  stroke: "black",
  strokeWidth: 2
});

var keyG = new Kinetic.Rect({
  x: 400,
  y: 150,
  width: 75,
  height: 300,
  fill:"white",
  stroke: "black",
  strokeWidth: 2
});

var keyGSharp = new Kinetic.Rect({
  x: 450,
  y: 150,
  width: 50,
  height: 200,
  fill: "black",
  stroke: "black",
  strokeWidth: 2
});

var keyA = new Kinetic.Rect({
  x: 475,
  y: 150,
  width: 75,
  height: 300,
  fill:"white",
  stroke: "black",
  strokeWidth: 2
});

var keyASharp = new Kinetic.Rect({
  x: 525,
  y: 150,
  width: 50,
  height: 200,
  fill: "black",
  stroke: "black",
  strokeWidth: 2
});

var keyB = new Kinetic.Rect({
  x: 550,
  y: 150,
  width: 75,
  height: 300,
  fill: "white",
  stroke: "black",
  strokeWidth: 2
});

var labelC = new Kinetic.Label({
  x: 115,
  y: 120,
  opacity: 0.75
});

labelC.add(new Kinetic.Tag({
  fill: 'white'
}));

labelC.add(new Kinetic.Text({
  text: "C",
  fontFamily: "Calibri",
  fontSize: 18,
  padding: 5,
  fill: 'black'
}));

var labelCSharp = new Kinetic.Label({
  x: 160,
  y: 120,
  opacity: 0.75
});

labelCSharp.add(new Kinetic.Tag({
    fill:'white'
}));

labelCSharp.add(new Kinetic.Text({
  text: "C#",
  fontFamily: "Calibri",
  fontSize: 18,
  padding: 5,
  fill: 'black'
}));

var labelD = new Kinetic.Label({
  x: 200,
  y: 120,
  opacity: 0.75
});

labelD.add(new Kinetic.Tag({
    fill:'white'
}));

labelD.add(new Kinetic.Text({
  text: "D",
  fontFamily: "Calibri",
  fontSize: 18,
  padding: 5,
  fill: 'black'
}));

var labelDSharp = new Kinetic.Label({
  x: 235,
  y: 120,
  opacity: 0.75
});

labelDSharp.add(new Kinetic.Tag({
    fill:'white'
}));

labelDSharp.add(new Kinetic.Text({
  text: "D#",
  fontFamily: "Calibri",
  fontSize: 18,
  padding: 5,
  fill: 'black'
}));

var labelE = new Kinetic.Label({
  x: 290,
  y: 120,
  opacity: 0.75
});

labelE.add(new Kinetic.Tag({
    fill:'white'
}));

labelE.add(new Kinetic.Text({
  text: "E",
  fontFamily: "Calibri",
  fontSize: 18,
  padding: 5,
  fill: 'black'
}));

var labelF = new Kinetic.Label({
  x: 340,
  y: 120,
  opacity: 0.75
});

labelF.add(new Kinetic.Tag({
    fill:'white'
}));

labelF.add(new Kinetic.Text({
  text: "F",
  fontFamily: "Calibri",
  fontSize: 18,
  padding: 5,
  fill: 'black'
}));

var labelFSharp = new Kinetic.Label({
  x: 390,
  y: 120,
  opacity: 0.75
});

labelFSharp.add(new Kinetic.Tag({
    fill:'white'
}));

labelFSharp.add(new Kinetic.Text({
  text: "F#",
  fontFamily: "Calibri",
  fontSize: 18,
  padding: 5,
  fill: 'black'
}));

var labelG = new Kinetic.Label({
  x: 425,
  y: 120,
  opacity: 0.75
});

labelG.add(new Kinetic.Tag({
    fill:'white'
}));

labelG.add(new Kinetic.Text({
  text: "G",
  fontFamily: "Calibri",
  fontSize: 18,
  padding: 5,
  fill: 'black'
}));

var labelGSharp = new Kinetic.Label({
  x: 460,
  y: 120,
  opacity: 0.75
});

labelGSharp.add(new Kinetic.Tag({
    fill:'white'
}));

labelGSharp.add(new Kinetic.Text({
  text: "G#",
  fontFamily: "Calibri",
  fontSize: 18,
  padding: 5,
  fill: 'black'
}));

var labelA = new Kinetic.Label({
  x: 500,
  y: 120,
  opacity: 0.75
});

labelA.add(new Kinetic.Tag({
    fill:'white'
}));

labelA.add(new Kinetic.Text({
  text: "A",
  fontFamily: "Calibri",
  fontSize: 18,
  padding: 5,
  fill: 'black'
}));

var labelASharp = new Kinetic.Label({
  x: 535,
  y: 120,
  opacity: 0.75
});

labelASharp.add(new Kinetic.Tag({
    fill:'white'
}));

labelASharp.add(new Kinetic.Text({
  text: "A#",
  fontFamily: "Calibri",
  fontSize: 18,
  padding: 5,
  fill: 'black'
}));

var labelB = new Kinetic.Label({
  x: 590,
  y: 120,
  opacity: 0.75
});

labelB.add(new Kinetic.Tag({
    fill:'white'
}));

labelB.add(new Kinetic.Text({
  text: "B",
  fontFamily: "Calibri",
  fontSize: 18,
  padding: 5,
  fill: 'black'
}));

keyC.on("mouseover touchstart", function() {
  this.fill("blue");
  layer.draw();
  playNote(261.63);
});

keyC.on("mouseout touchend", function() {
  this.fill("white");
  layer.draw();
});

keyCSharp.on("mouseover touchstart", function() {
  this.fill("red");
  layer.draw();
  playNote(277.18);
});

keyCSharp.on("mouseout touchend", function() {
  this.fill("black");
  layer.draw();
});

keyD.on("mouseover touchstart", function() {
  this.fill("blue");
  layer.draw();
  playNote(293.66);
});

keyD.on("mouseout touchend", function() {
  this.fill("white");
  layer.draw();
});

keyDSharp.on("mouseover touchstart", function() {
  this.fill("red");
  layer.draw();
  playNote(311.13);
});

keyDSharp.on("mouseout touchend", function() {
  this.fill("black");
  layer.draw();
});

keyE.on("mouseover touchstart", function() {
  this.fill("blue");
  layer.draw();
  playNote(329.63);
});

keyE.on("mouseout touchend", function() {
  this.fill("white");
  layer.draw();
});

keyF.on("mouseover touchstart", function() {
  this.fill("blue");
  layer.draw();
  playNote(349.23);
});

keyF.on("mouseout touchend", function() {
  this.fill("white");
  layer.draw();
});

keyFSharp.on("mouseover touchstart", function() {
  this.fill("red");
  layer.draw();
  playNote(369.99);
});

keyFSharp.on("mouseout touchend", function() {
  this.fill("black");
  layer.draw();
});

keyG.on("mouseover touchstart", function() {
  this.fill("blue");
  layer.draw();
  playNote(392);
});

keyG.on("mouseout touchend", function() {
  this.fill("white");
  layer.draw();
});

keyGSharp.on("mouseover touchstart", function() {
  this.fill("red");
  layer.draw();
  playNote(415.30);
});

keyGSharp.on("mouseout touchend", function() {
  this.fill("black");
  layer.draw();
});

keyA.on("mouseover touchstart", function() {
  this.fill("blue");
  layer.draw();
  playNote(440);
});

keyA.on("mouseout touchend", function() {
  this.fill("white");
  layer.draw();
});

keyASharp.on("mouseover touchstart", function() {
  this.fill("red");
  layer.draw();
  playNote(466.16);
});

keyASharp.on("mouseout touchend", function() {
  this.fill("black");
  layer.draw();
});

keyB.on("mouseover touchstart", function() {
  this.fill("blue");
  layer.draw();
  playNote(493.88);
});

keyB.on("mouseout touchend", function() {
  this.fill("white");
  layer.draw();
});

var snare = new Kinetic.Circle({
  x: 150,
  y: 75,
  radius: 40,
  fill: 'gray',
  stroke: 'black',
  strokeWidth: 2
});

var highhat = new Kinetic.Circle({
  x: 350,
  y: 75,
  radius: 40,
  fill: 'gold'
});

var bass = new Kinetic.Circle({
  x: 550,
  y: 75,
  radius: 40,
  fill: 'black'
});

var labelSnare = new Kinetic.Label({
  x: 115,
  y: 0,
  opacity: 0.75
});

labelSnare.add(new Kinetic.Tag({
    fill:'white'
}));

labelSnare.add(new Kinetic.Text({
  text: "SNARE",
  fontFamily: "Calibri",
  fontSize: 18,
  padding: 5,
  fill: 'black'
}));

var labelHighHat = new Kinetic.Label({
  x: 305,
  y: 0,
  opacity: 0.75
});

labelHighHat.add(new Kinetic.Tag({
    fill:'white'
}));

labelHighHat.add(new Kinetic.Text({
  text: "HIGHHAT",
  fontFamily: "Calibri",
  fontSize: 18,
  padding: 5,
  fill: 'black'
}));

var labelBass = new Kinetic.Label({
  x: 525,
  y: 0,
  opacity: 0.75
});

labelBass.add(new Kinetic.Tag({
    fill:'white'
}));

labelBass.add(new Kinetic.Text({
  text: "BASS",
  fontFamily: "Calibri",
  fontSize: 18,
  padding: 5,
  fill: 'black'
}));

snare.on("mouseover touchstart", function() {
  this.fill("white");
  layer.draw();
  playSnare();
});

snare.on("mouseout touchend", function() {
  this.fill("gray");
  layer.draw();
});

highhat.on("mouseover touchstart", function() {
  this.fill("yellow");
  layer.draw();
  playHat();
});

highhat.on("mouseout touchend", function() {
  this.fill("gold");
  layer.draw();
});

bass.on("mouseover touchover", function() {
  this.fill("brown");
  layer.draw();
  playBass();
});

bass.on("mouseout touchend", function() {
  this.fill("black");
  layer.draw();
});

layer.add(bass).add(labelSnare);
layer.add(highhat).add(labelHighHat);
layer.add(snare).add(labelBass);
layer.add(keyC).add(labelC);
layer.add(keyD).add(labelD);
layer.add(keyE).add(labelE);
layer.add(keyF).add(labelF);
layer.add(keyG).add(labelG);
layer.add(keyA).add(labelA);
layer.add(keyB).add(labelB);
layer.add(keyCSharp).add(labelCSharp);
layer.add(keyDSharp).add(labelDSharp);
layer.add(keyFSharp).add(labelFSharp);
layer.add(keyGSharp).add(labelGSharp);
layer.add(keyASharp).add(labelASharp);

stage.add(layer);
}
