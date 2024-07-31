document.addEventListener('DOMContentLoaded', function() {
        // Buat elemen div untuk kontainer audio
        const audioContainer = document.createElement('div');
        audioContainer.id = 'audio-player-container';
      
        // Buat elemen audio
        const audio = document.createElement('audio');
        audio.id = 'background-audio';
        audio.autoplay = true;
        audio.loop = true;
        audio.controls = true;
      
        // Buat elemen source
        const source = document.createElement('source');
        source.src = 'Backsound.mp3';
        source.type = 'audio/mpeg';
      
        // Tambahkan elemen source ke audio
        audio.appendChild(source);
      
        // Tambahkan elemen audio ke kontainer audio
        audioContainer.appendChild(audio);
      
        // Tambahkan kontainer audio ke body
        document.body.appendChild(audioContainer);
      
        // Tambahkan CSS untuk memposisikan kontrol audio di tengah bawah
        const css = `
          #audio-player-container {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 1000;
          }
      
          audio {
            display: block;
          }
        `;
      
        // Buat elemen style dan tambahkan CSS ke dalamnya
        const style = document.createElement('style');
        style.appendChild(document.createTextNode(css));
      
        // Tambahkan elemen style ke head
        document.head.appendChild(style);
      });
      

onload = () => {
        const c = setTimeout(() => {
          document.body.classList.remove("container");
      
          const titles = ('I LOVE U CACA💙').split('')
          const titleElement = document.getElementById('title');
          let index = 0;
      
          function appendTitle() {
            if (index < titles.length) {
              titleElement.innerHTML += titles[index];
              index++;
              setTimeout(appendTitle, 300); // 1000ms delay
            }
          }
      
          appendTitle();
      
          clearTimeout(c);
        }, 1000);
      };