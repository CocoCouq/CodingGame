/* CODERS STRIKE BACK */

while (true) {
    var inputs = readline().split(' ');
    const x = parseInt(inputs[0]); // x position of your pod
    const y = parseInt(inputs[1]); // y position of your pod
    const nextCheckpointX = parseInt(inputs[2]); // x position of the next check point
    const nextCheckpointY = parseInt(inputs[3]); // y position of the next check point
    var dist = parseInt(inputs[4]); // distance to next check point
    var angle = parseInt(inputs[5]); // angle pods / next check point
    var inputs2 = readline().split(' '); // change line (opponent)
    const xop = parseInt(inputs[0]); // x position of 'opponent'
    const yop = parseInt(inputs[1]); // y position of 'opponent'
    var thrust = '100';

    if (angle > 70 || angle < -70)
    {
        if (dist < 600)
            thrust = '70';
        else if (dist < 700)
            thrust = '0';
        else if (dist < 1000)
            thrust = '5';
        else
            thrust = '50';
        console.log(nextCheckpointX + ' ' + nextCheckpointY + ' ' + thrust);

    }
    else if (angle < 70 && angle >= -70)
    {
        if (dist > 7000 && dist < 9000)
            thrust = 'BOOST';
        else if (dist > 1000)
            thrust = '100';
        else
            thrust = '15';
        console.log(nextCheckpointX + ' ' + nextCheckpointY + ' ' + thrust);
    }
    else
        console.log(xop + ' ' + yop + ' ' + thrust);
}
