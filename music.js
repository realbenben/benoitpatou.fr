console.log('yolo');
console.log(ion);

ion.sound({
  sounds: [
    { name: 'OOT_Notes_Ocarina_A_med' },
    { name: 'OOT_Notes_Ocarina_B_med' },
    { name: 'OOT_Notes_Ocarina_D2_med' },
    { name: 'OOT_Notes_Ocarina_D_med' },
    { name: 'OOT_Notes_Ocarina_F_med' },
  ],
  volume: 0.5,
  path: './sound/',
  preload: true,
});
