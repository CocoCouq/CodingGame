/**
 * This code automatically collects game data in an infinite loop.
 * It uses the standard input to place data into the game variables such as x and y.
 * YOU DO NOT NEED TO MODIFY THE INITIALIZATION OF THE GAME VARIABLES.
 **/


// game loop
while (true) {
    var inputs = readline().split(' ');
    const x = parseInt(inputs[0]); // x position of your pod
    const y = parseInt(inputs[1]); // y position of your pod
    var nextCheckpointX = parseInt(inputs[2]); // x position of the next check point
    var nextCheckpointY = parseInt(inputs[3]); // y position of the next check point
    var dist = parseInt(inputs[4]); // distance to next check point
    var angle = parseInt(inputs[5]); // angle pods / next check point
    var inputs2 = readline().split(' '); // change line (opponent)
    var xop = parseInt(inputs2[0]); // x position of 'opponent'
    var yop = parseInt(inputs2[1]); // y position of 'opponent'
    var thrust = '100';
    var ecartX = xop - x;
    var ecartY = yop - y;


    console.error(y - nextCheckpointY);
    console.error(x - nextCheckpointX);
    if (dist < 4000 && dist > 1200)
    {
        if (y > nextCheckpointY)
        {
            nextCheckpointY = nextCheckpointY - 400;
            if (x < nextCheckpointX)
                nextCheckpointX = nextCheckpointX + 400;
            else if (x > nextCheckpointX)
                nextCheckpointX = nextCheckpointX - 400;
        }
        else if (y < nextCheckpointY)
        {
            nextCheckpointY = nextCheckpointY + 400;
            if (x < nextCheckpointX)
                nextCheckpointX = nextCheckpointX + 400;
            else if (x > nextCheckpointX)
                nextCheckpointX = nextCheckpointX - 400;
        }
    }




    if (dist < 800)
    {
        if (angle > 5 && angle < -5)
        {
            thrust = '0';
        }
        else
        {
            thrust = '100';
        }
    }
    else if (dist < 1000)
    {
        if (angle > 10 && angle < -10)
        {
            thrust = '10';
        }
        else
        {
            thrust = '30';
        }
    }
    else if (dist < 2000)
    {
        if (angle > 5 && angle < -5)
        {
            thrust = '0';
        }
        else
        {
            thrust = '20';
        }
    }
    else if (dist < 4000)
    {
        if (angle > 5 && angle < -5)
        {
            thrust = '0';
        }
        else
        {
            thrust = '75';
        }
    }
    else if (dist < 7000)
    {
        if (angle > 10 && angle < -10)
        {
            thrust = '5';
        }
        else
        {
            thrust = '100';
        }
    }
    else if (dist < 8000)
    {
        if (angle > 10 && angle < -10)
        {
            thrust = '10';
        }
        else
        {
            thrust = 'BOOST';
        }
    }
    else
    {
       if (angle > 5 && angle < -5)
        {
            thrust = '10';
        }
        else
        {
            thrust = '100';
        }
    }
    console.log(nextCheckpointX + ' ' + nextCheckpointY + ' ' + thrust);
    console.error(dist);
}
