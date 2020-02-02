<?php
fscanf(STDIN, "%d %d %d %d", $LX, $LY, $TX, $TY);
while (TRUE)
{
    fscanf(STDIN, "%d", $remainingTurns);

    $res = ($LX > $TX) ? (($LY > $TY) ? "SE" : (($LY < $TY) ? "NE" : "E")) :
        (($LX < $TX) ? (($LY > $TY) ? "SW" : (($LY < $TY) ? "NW" : "W")) :
        (($LY > $TY) ? "S" : "N"));


    $TY += ($LX > $TX || $LX < $TX) ? (($LY > $TY) ? 1 : (($LY < $TY) ? -1 : 0)) :
        ($LY > $TY ? 1 : -1);

    $TX += ($LX > $TX) ? 1 : (($LX < $TX) ? -1 : 0);

    echo("$res\n");
}
?>
