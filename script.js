document.getElementById('playButton').addEventListener('click', () => {
  // Animate the curtains
  const leftCurtain = document.querySelector('.curtain.left');
  const rightCurtain = document.querySelector('.curtain.right');

  leftCurtain.style.transform = 'translateX(-100%)';
  rightCurtain.style.transform = 'translateX(100%)';

  let layer1 = document.querySelector('.layer-1');
  layer1.style.display = 'none';

  //let layer2 = document.querySelector('.layer-2');
  //layer2.style.display = 'none';

  // Reveal the video after the curtain animation
  setTimeout(() => {
    document.querySelector('.layer-3').style.display = 'block';
  }, 100); // Delay matching curtain animation duration
});