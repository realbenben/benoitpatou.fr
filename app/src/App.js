import React from 'react';
import 'nes.css/css/nes.min.css';
import useSound from 'use-sound';

import noteA from './sound/OOT_Notes_Ocarina_A_med.mp3';
import noteB from './sound/OOT_Notes_Ocarina_B_med.mp3';
import noteD from './sound/OOT_Notes_Ocarina_D_med.mp3';
import noteD2 from './sound/OOT_Notes_Ocarina_D2_med.mp3';
import noteF from './sound/OOT_Notes_Ocarina_F_med.mp3';

function App() {
  const [playRight] = useSound(noteA);
  const [playLeft] = useSound(noteB);
  const [playSpace] = useSound(noteD);
  const [playUp] = useSound(noteD2);
  const [playDown] = useSound(noteF);

  return (
    <div class="nes-container with-title is-centered">
      <h1 class="title">Ocarina</h1>
      <h1>Berceuse de Zelda</h1>
      <button className="nes-btn" onClick={playLeft}>
        ⬅️
      </button>
      <button className="nes-btn" onClick={playUp}>
        ⬆️
      </button>
      <button className="nes-btn" onClick={playRight}>
        ➡️
      </button>
      <button className="nes-btn" onClick={playLeft}>
        ⬅️
      </button>
      <button className="nes-btn" onClick={playUp}>
        ⬆️
      </button>
      <button className="nes-btn" onClick={playRight}>
        ➡️
      </button>

      <h1>Bolero de feu</h1>
      <button className="nes-btn" onClick={playDown}>
        ⬇️
      </button>
      <button className="nes-btn" onClick={playSpace}>
        🌀
      </button>
      <button className="nes-btn" onClick={playDown}>
        ⬇️
      </button>
      <button className="nes-btn" onClick={playSpace}>
        🌀
      </button>
      <button className="nes-btn" onClick={playRight}>
        ➡️
      </button>
      <button className="nes-btn" onClick={playDown}>
        ⬇️
      </button>
      <button className="nes-btn" onClick={playRight}>
        ➡️
      </button>
      <button className="nes-btn" onClick={playDown}>
        ⬇️
      </button>

      <h1>All</h1>
      <button className="nes-btn" onClick={playUp}>
        ⬆️
      </button>
      <button className="nes-btn" onClick={playLeft}>
        ⬅️
      </button>
      <button className="nes-btn" onClick={playDown}>
        ⬇️
      </button>
      <button className="nes-btn" onClick={playRight}>
        ➡️
      </button>
      <button className="nes-btn" onClick={playSpace}>
        🌀
      </button>
    </div>
  );
}

export default App;
