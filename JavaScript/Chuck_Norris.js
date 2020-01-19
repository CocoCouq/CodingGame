/* Le binaire avec des 0 et des 1 c'est bien. Mais le binaire avec
que des 0, ou presque, c'est encore mieux. A l'origine, c'est un
concept inventé par Chuck Norris pour envoyer des messages dits unaires.

Ecrivez un programme qui, à partir d'un message en entrée, affiche le
message codé façon Chuck Norris en sortie.

Voici le principe d'encodage :

+ Le message en entrée est constitué de caractères ASCII (7 bits)
+ Le message encodé en sortie est constitué de blocs de 0
+ Un bloc est séparé d'un autre bloc par un espace
+ Deux blocs consécutifs servent à produire une série de bits de même valeur (que des 1 ou que des 0) :
  - Premier bloc : il vaut toujours 0 ou 00. S'il vaut 0 la série contient des 1, sinon elle contient des 0
  - Deuxième bloc : le nombre de 0 dans ce bloc correspond au nombre de bits dans la série */

const MESSAGE = readline();

function textToBin(text) {
  var len = text.length,
      resu = [];
      var i = -1;
  while (++i < len) {
    var bin = text[i].charCodeAt().toString(2);
    resu.push(Array(7-bin.length+1).join("0") + bin);
  }
  return resu.join('');
}

var finalStr = '';
result = textToBin(MESSAGE);
resLen = result.length;
var compt = 0;
i = 0;
while (i < resLen)
{
    if (result[i] === '1')
    {
        finalStr += '0 ';
        while (result[i] === '1')
        {
            compt++;
            i++;
        }
    }
    else
    {
        finalStr += '00 ';
        while (result[i] === '0')
        {
            compt++;
            i++;
        }
    }
    while (compt > 0)
    {
        finalStr += '0';
        compt--;
    }
    if (i < resLen)
        finalStr += ' ';
}
console.log(finalStr);
