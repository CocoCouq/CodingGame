/* Votre programme doit permettre à Thor de rejoindre l'éclair de puissance. */

const inputs = readline().split(' ');
let lightX = parseInt(inputs[0]); // the X position of the light of power
let lightY = parseInt(inputs[1]); // the Y position of the light of power
let initialTx = parseInt(inputs[2]); // Thor's starting X position
let initialTy = parseInt(inputs[3]); // Thor's starting Y position

while (true) {
    const remainingTurns = parseInt(readline());

    if(lightX > initialTx)
    {
        if(lightY > initialTy)
        {
            initialTy++;
            console.log('SE');
        }
        else if (lightY < initialTy)
        {
            initialTy--;
            console.log('NE');
        }
        else
            console.log('E');
        initialTx++;
    }
    else if (lightX < initialTx)
    {
        if(lightY > initialTy)
        {
            initialTy++;
            console.log('SW');
        }
        else if (lightY < initialTy)
        {
            initialTy--;
            console.log('NW');
        }
        else
            console.log('W');
        initialTx--;
    }
    if (lightY > initialTy)
    {
        if(lightX > initialTx)
        {
            initialTx++;
            console.log('SE');
        }
        else if (lightX < initialTx)
        {
            initialTx--;
            console.log('SW');
        }
        else
            console.log('S');
        initialTy++;
    }
    else if (lightY < initialTy)
    {
        if(lightX > initialTx)
        {
            initialTx++;
            console.log('NE');
        }
        else if (lightX < initialTx)
        {
            initialTx--;
            console.log('NW');
        }
        else
            console.log('N');
        initialTy--;
    }
}
