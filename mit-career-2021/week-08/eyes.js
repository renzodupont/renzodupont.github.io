/* 
Code provided by the faculty
I only changed the regular for to use the "for of" and moved the code into a function
Also added jQuert animate for a more natural movement
*/
const balls = document.getElementsByClassName('ball');

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  for (let ball of balls) {
    moveEyes(ball, x, y);
  }
};

const moveEyes = (ball, x, y) => {
  $(ball).animate({
    left: x,
    top: y,
    transform: 'translate(-' + x + ',-' + y + ')'
  }, 20);
}

const closeEyes = () => {
  $('.eye').animate({
    height: '5px',
    marginTop: '100px'
  }, 1000, () => {
    $('.eye').animate({
      height: '120px',
      marginTop: '40px'
    }, 1000);
  });
}

setInterval(closeEyes, 6000);