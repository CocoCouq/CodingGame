/* Dans cet exercice, vous devez analyser un relevé de températures 
pour trouver quelle température se rapproche le plus de zéro. */

var test = 10000000;
const n = parseInt(readline());
var inputs = readline().split(' ');
if(inputs[0] === '' && inputs.length === 1)
    console.log(0);
for (let i = 0; i < n; i++) {
    if(inputs[i] < 0)
    {
        moins = -1;
        inputs[i] = -parseInt(inputs[i]);
    }
    else
    {
        var moins = 1;
        inputs[i] = parseInt(inputs[i]);
    }
    if(inputs[i] < test || (test >= inputs[i] && moins == 1))
    {
        var test = inputs[i];
        t = test * moins;
    }
}
console.log(t);
