/* Votre programme doit détruire les vaisseaux ennemis
en tirant sur l'ennemi le plus proche à chaque tour. */

while (true) {
    var enemy1 = readline();
    var dist1 = parseInt(readline());
    var enemy2 = readline();
    var dist2 = parseInt(readline());

    if (dist1 < dist2)
        console.log(enemy1);
    else
        console.log(enemy2);
}
