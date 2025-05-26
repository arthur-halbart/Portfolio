console.info('Hello world');

  document.addEventListener('mousemove', function(e) {
    const follower = document.querySelector('.element__graphique__fond');
    const size = 989; 
  
    const x = e.clientX - size / 2;
    const y = e.clientY - size / 2;
  
    follower.style.left = x + 'px';
    follower.style.top = y + 'px';
  });
