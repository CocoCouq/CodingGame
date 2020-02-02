<?php
$tabEleFloor = [];
fscanf(STDIN, "%d %d %d %d %d %d %d %d", $nbFloors, $width, $nbRounds, $exitFloor, $exitPos, $nbTotalClones, $nbAdditionalElevators, $nbElevators);
for ($i = 0; $i < $nbElevators; $i++)
{
    fscanf(STDIN, "%d %d", $elevatorFloor, $elevatorPos);
    $tabElePos[$elevatorFloor] = $elevatorPos;
}

// game loop
while (TRUE)
{
    ksort($tabElePos);

    fscanf(STDIN, "%d %d %s", $cloneFloor, $clonePos, $direction);

    if ($cloneFloor != $exitFloor)
    {
        if ($clonePos <= $tabElePos[$cloneFloor] && $direction == 'RIGHT')
            echo("WAIT\n");
        else if ($clonePos >= $tabElePos[$cloneFloor] && $direction == 'LEFT')
             echo("WAIT\n");
        else
          echo("BLOCK\n");
    }
    else
    {
        if ($clonePos <= $exitPos && $direction == 'RIGHT')
            echo("WAIT\n");
        else if ($clonePos >= $exitPos && $direction == 'LEFT')
             echo("WAIT\n");
        else
          echo("BLOCK\n");
    }
}
?>


<!-- TERNAIRE -->

<?php
$tabEleFloor = [];
fscanf(STDIN, "%d %d %d %d %d %d %d %d", $nbFloors, $width, $nbRounds, $exitFloor, $exitPos, $nbTotalClones, $nbAdditionalElevators, $nbElevators);
for ($i = 0; $i < $nbElevators; $i++)
{
    fscanf(STDIN, "%d %d", $elevatorFloor, $elevatorPos);
    $tabElePos[$elevatorFloor] = $elevatorPos;
}

// game loop
while (TRUE)
{
    ksort($tabElePos);

    fscanf(STDIN, "%d %d %s", $cloneFloor, $clonePos, $direction);

    $result = ($cloneFloor != $exitFloor)
    ? ((($clonePos <= $tabElePos[$cloneFloor] && $direction == 'RIGHT') || ($clonePos >= $tabElePos[$cloneFloor] && $direction == 'LEFT')) ? "WAIT" : "BLOCK")
    : ((($clonePos <= $exitPos && $direction == 'RIGHT') || ($clonePos >= $exitPos && $direction == 'LEFT')) ? "WAIT" : "BLOCK");
    echo("$result\n");
}
?>
