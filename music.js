const sound = new Howl({
  src: ['./sound/OOT_Notes_Ocarina_A_med.wav'],
html5: true,
buffer: true,
 autoplay: true,
  loop: true,
  volume: 0.5,
  onend: function() {
    console.log('Finished!');
  }
});
console.log(sound);
sound.play();
console.log("yolo");
