<?php
/**
 * Save humans, destroy zombies!
 **/

$tabZomX = [];
$tabZomY = [];
$tabHumX = [];
$tabHumY = [];
// game loop
while (TRUE)
{
    fscanf(STDIN, "%d %d", $x, $y);
    fscanf(STDIN, "%d", $humanCount);
    for ($i = 0; $i < $humanCount; $i++)
    {
        fscanf(STDIN, "%d %d %d", $humanId, $humanX, $humanY);
        $tabHumX[$i] = $humanX;
        $tabHumY[$i] = $humanY;
    }
    fscanf(STDIN, "%d", $zombieCount);
    for ($i = 0; $i < $zombieCount; $i++)
    {
        fscanf(STDIN, "%d %d %d %d %d", $zombieId, $zombieX, $zombieY, $zombieXNext, $zombieYNext);
        $tabZomX[$i] = $zombieX;
        $tabZomY[$i] = $zombieY;
    }
    asort($tabHumX);
    $targX = current($tabHumX);
    $targY = $tabHumY[key($tabHumX)];

    echo("$targX $targY\n"); 
}
?>
