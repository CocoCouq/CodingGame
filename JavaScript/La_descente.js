/* Écrivez le programme permettant de détruire les montagnes pour 
pouvoir attérir. Pour cela, tirez sur la montagne la plus haute. */

while (true) {
    let t = 0;
    let max = 0;
    for (let i = 0; i < 8; i++) {
        const mH = parseInt(readline());
        if (mH > max)
        {
            max = mH;
            t = i;
        }
    }
    console.log(t);
}
