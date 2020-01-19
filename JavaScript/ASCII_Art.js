/* L'art ASCII permet de représenter des formes en utilisant des caractères.
Dans notre cas, ces formes sont précisément des mots.

Par exemple, le mot "MANHATTAN" pourra être affiché ainsi en art ASCII :
# #  #  ### # #  #  ### ###  #  ###
### # # # # # # # #  #   #  # # # #
### ### # # ### ###  #   #  ### # #
# # # # # # # # # #  #   #  # # # #
# # # # # # # # # #  #   #  # # # #

​Votre mission :
Ecrire un programme capable d'afficher une ligne de texte
en art ASCII dans un style qui vous est fourni en entrée. */

const L = parseInt(readline());
const H = parseInt(readline());
const T = readline();
var k = -1;
var j = -1;

for (let i = 0; i < H; i++)
{
    const ROW = readline();
    result = '';
    while(++k < T.length)
    {
        let Rep = T.charCodeAt(k);
        if(Rep < 91 && Rep > 64)
            Rep = (((T.charCodeAt(k) - 64) - 1) * L);
        else if(Rep > 96 && Rep < 123)
            Rep = (((T.charCodeAt(k) - 96) - 1) * L);
        else
            Rep = 26 * L;
        while(++j < L)
            result += ROW[Rep + j];
        j = -1;
    }
    k = -1;
    console.log(result);
}
