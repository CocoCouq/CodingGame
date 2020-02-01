<?php
fscanf(STDIN, "%d %d %d %d", $LX, $LY, $TX, $TY);
while (TRUE)
{
    fscanf(STDIN, "%d", $remainingTurns);
    if ($LX > $TX)
    {
        $res = ($LY > $TY) ? "SE\n" : (($LY < $TY) ? "NE\n" : "E\n");
        $TY += ($LY > $TY) ? 1 : (($LY < $TY) ? -1 : 0);
        $TX++;
    }
    else if ($LX < $TX)
    {
        $res = ($LY > $TY) ? "SW\n" : (($LY < $TY) ? "NW\n" : "W\n");
        $TY += ($LY > $TY) ? 1 : (($LY < $TY) ? -1 : 0);
        $TX--;
    }
    else if ($LY > $TY)
    {
        $res = "S\n";
        $TY++;
    }
    else if ($LY < $TY)
    {
        $res = "N\n";
        $TY--;
    }
    echo($res);
}
?>
