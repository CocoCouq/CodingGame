/* Vous devez écrire un programme qui permet de détecter
le type MIME d'un fichier à partir de son nom. */

var tabEXT = [];
var tabMT = [];

const N = parseInt(readline()); // Number of elements which make up the association table.
const Q = parseInt(readline()); // Number Q of file names to be analyzed.

for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const EXT = inputs[0]; // file extension
    tabEXT[i] = EXT.toLowerCase();
    const MT = inputs[1]; // MIME type.
    tabMT[i] = MT;
}

for (let i = 0; i < Q; i++) {
    const FNAME = readline(); // One file name per line.

    var extFiles = FNAME.split('');
    var finalResult = extFiles.reverse();
    var strRev = finalResult.join('');
    finalResult = strRev.split('.');

    if(finalResult.length < 2)
        var verif = 1;
    else
        var verif = 0;

    var resRev = finalResult[0];
    finalResult = resRev.split('');
    var tabResultExt = finalResult.reverse();
    finalResult = tabResultExt.join('');
    finalResult = finalResult.toLowerCase();

    var j = -1;
    while (((tabEXT[++j] !== finalResult) && j < Q) || extFiles[1] === null);
    if (j !== Q && verif === 0)
        console.log(tabMT[j]);
    else
        console.log('UNKNOWN');
}
