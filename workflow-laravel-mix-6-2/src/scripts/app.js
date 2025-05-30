'use strict'

import { gsap } from "gsap";

var button = document.querySelector('.button')
var button2 = document.querySelector('.button2')
var button3 = document.querySelector('.button3')
var button4 = document.querySelector('.button4')
var elementFond = document.querySelector('.element__graphique__fond')
var title = document.querySelector('.eight')


  document.addEventListener('mousemove', function(e) {
    const follower = document.querySelector('.element__graphique__fond');
    const size = 300; 
  
    const x = e.clientX - size / 2;
    const y = e.clientY - size / 2;
  
    follower.style.left = x + 'px';
    follower.style.top = y + 'px';
  });


  ///////////////////////////////////////////////////////
  const canvas = document.getElementById('noiseCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  function generateNoise() {
  const imageData = ctx.createImageData(canvas.width, canvas.height);
  const buffer = new Uint32Array(imageData.data.buffer);
  for (let i = 0; i < buffer.length; i++) {
    buffer[i] = (255 << 24) | // alpha
                (Math.random() * 255 << 16) | // red
                (Math.random() * 255 << 8) | // green
                (Math.random() * 255); // blue
  }
  ctx.putImageData(imageData, 0, 0);
  requestAnimationFrame(generateNoise);
}

generateNoise();




////////////////////////////////////////////////////////////////////:

  button.addEventListener("mouseover", function() {
    elementFond.classList.add('element__graphique__fond--fullScreen--Janus');

    document.addEventListener('mousemove', function(e) {
        const follower = document.querySelector('.element__graphique__fond');
        const size = 3000; 
      
        const x = e.clientX - size / 2;
        const y = e.clientY - size / 2;
      
        follower.style.left = x + 'px';
        follower.style.top = y + 'px';
      });
});
  
button.addEventListener('mouseleave', function() {
    elementFond.classList.remove('element__graphique__fond--fullScreen--Janus');
    
    document.addEventListener('mousemove', function(e) {
        const follower = document.querySelector('.element__graphique__fond');
        const size = 300; 
      
        const x = e.clientX - size / 2;
        const y = e.clientY - size / 2;
      
        follower.style.left = x + 'px';
        follower.style.top = y + 'px';
      });
});


////////////////////////////::

button2.addEventListener("mouseover", function() {
    elementFond.classList.add('element__graphique__fond--fullScreen--Prux');

    document.addEventListener('mousemove', function(e) {
        const follower = document.querySelector('.element__graphique__fond');
        const size = 3000; 
      
        const x = e.clientX - size / 2;
        const y = e.clientY - size / 2;
      
        follower.style.left = x + 'px';
        follower.style.top = y + 'px';
      });
});
  
button2.addEventListener('mouseleave', function() {
    elementFond.classList.remove('element__graphique__fond--fullScreen--Prux');
    
    document.addEventListener('mousemove', function(e) {
        const follower = document.querySelector('.element__graphique__fond');
        const size = 300; 
      
        const x = e.clientX - size / 2;
        const y = e.clientY - size / 2;
      
        follower.style.left = x + 'px';
        follower.style.top = y + 'px';
      });
});

////////////////////////////::


button3.addEventListener("mouseover", function() {
    elementFond.classList.add('element__graphique__fond--fullScreen--DataPlay');

    document.addEventListener('mousemove', function(e) {
        const follower = document.querySelector('.element__graphique__fond');
        const size = 3000; 
      
        const x = e.clientX - size / 2;
        const y = e.clientY - size / 2;
      
        follower.style.left = x + 'px';
        follower.style.top = y + 'px';
      });
});
  
button3.addEventListener('mouseleave', function() {
    elementFond.classList.remove('element__graphique__fond--fullScreen--DataPlay');
    
    document.addEventListener('mousemove', function(e) {
        const follower = document.querySelector('.element__graphique__fond');
        const size = 300; 
      
        const x = e.clientX - size / 2;
        const y = e.clientY - size / 2;
      
        follower.style.left = x + 'px';
        follower.style.top = y + 'px';
      });
});

////////////////////////////::


button4.addEventListener("mouseover", function() {
    elementFond.classList.add('element__graphique__fond--fullScreen--DesignFiction');

    document.addEventListener('mousemove', function(e) {
        const follower = document.querySelector('.element__graphique__fond');
        const size = 3000; 
      
        const x = e.clientX - size / 2;
        const y = e.clientY - size / 2;
      
        follower.style.left = x + 'px';
        follower.style.top = y + 'px';
      });
});
  
button4.addEventListener('mouseleave', function() {
    elementFond.classList.remove('element__graphique__fond--fullScreen--DesignFiction');
    
    document.addEventListener('mousemove', function(e) {
        const follower = document.querySelector('.element__graphique__fond');
        const size = 300; 
      
        const x = e.clientX - size / 2;
        const y = e.clientY - size / 2;
      
        follower.style.left = x + 'px';
        follower.style.top = y + 'px';
      });
});


///////////////////////////////////////////////////////////////////////////////

