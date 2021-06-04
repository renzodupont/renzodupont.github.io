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

/* My code */
let currentCloudIndex = 0; // For the clouds, I will use the grid-column-template approach with CSS
let previousCloud = null;
window.onload = () => {
  const container = document.getElementsByClassName('cloud-container')[0];

  for (let i = 0; i < 6; i++) {
    const cloud = document.createElement('div');
    cloud.classList.add('cloud' + i);
    cloud.classList.add('cloud');
    container.appendChild(cloud);
  }

  setInterval(closeEyes, 6000);
  setInterval(changeCloud, 4000);

  changeCloud();
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

const changeCloud = () => {
  const currentCloud = document.getElementsByClassName('cloud' + currentCloudIndex)[0];
  $(currentCloud).animate({ opacity: 1 }, 800);

  if(previousCloud !== null)
    $(previousCloud).animate({ opacity: 0 }, 800);

  previousCloud = currentCloud;
  currentCloudIndex = currentCloudIndex === 5 ? 0 : currentCloudIndex + 1;
}