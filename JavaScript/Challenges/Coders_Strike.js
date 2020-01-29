/* CODERS STRIKE BACK */

while (true) {
    var inputs = readline().split(' ');
    const x = parseInt(inputs[0]); // x position of your pod
    const y = parseInt(inputs[1]); // y position of your pod
    const nextCheckpointX = parseInt(inputs[2]); // x position of the next check point
    const nextCheckpointY = parseInt(inputs[3]); // y position of the next check point
    var dist = parseInt(inputs[4]);
    var angle = parseInt(inputs[5]);
    var inputs2 = readline().split(' ');
    const xop = parseInt(inputs[0]);
    const yop = parseInt(inputs[1]);


    if (angle > 80 || angle < -80)
    {
           console.log(nextCheckpointX + ' ' + nextCheckpointY + ' ' + '0');
    }
    else if (angle < 80 && angle >= -80)
    {
        if (dist > 800)
           console.log(nextCheckpointX + ' ' + nextCheckpointY + ' ' + '100');
        else
            console.log(nextCheckpointX + ' ' + nextCheckpointY + ' ' + '30');
    }
    else
        console.log(xop + ' ' + yop + ' ' + '100');
}
