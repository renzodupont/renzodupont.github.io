/////////////////////
/// This is a library created in my week 2 of Fullstack Web Development course in MIT
/// PS: I tried to have some fun with it :)
////////////////////

var velocity = 5;
const edges = {
    Xmin : 0,
    Xmax : window.innerWidth, // Use the screen as edge
    Ymin : 0,
    Ymax : window.innerHeight, // Use the screen as edge
}

// Creates a new ball and starts random movement
const createBall = () => {
    let ball = create(); // This creates a random ball in a random place in the screen
    ball.reverseX = false;
    ball.reverseY = false;
    let randomInterval = Math.floor( 20 * ( Math.random() ) );

    setInterval(() => {
        moveBall(ball);
    }, randomInterval);

    return ball;
}

// Moves ball using the velocity set within edges
const moveBall = (ball) => {

    ball.style.left = ball.reverseX ? ( ball.offsetLeft - velocity ) + 'px' : ( ball.offsetLeft + velocity )  + 'px';
    ball.style.top = ball.reverseY ? ( ball.offsetTop - velocity ) + 'px' : ( ball.offsetTop + velocity )  + 'px';
 
    reachedEdge(ball);

}
// Checks if a ball reached an edge, and switch direction if needed
const reachedEdge = (ball) => {

    let ballSize = +ball.style.width.replace('px', ''); // Gets the size as number
    ball.reverseX = ( ball.offsetLeft > (edges.Xmax - ballSize) ) || ball.offsetLeft <= edges.Xmin ? !ball.reverseX : ball.reverseX;
    ball.reverseY = ( ball.offsetTop > edges.Ymax - ballSize) || ball.offsetTop <= edges.Ymin ? !ball.reverseY : ball.reverseY;

}

////// ------- Let's start with at least 5 balls, and then we can add more :)
for(var i = 0; i < 5; i++) {
    createBall();
}