<?php
fscanf(STDIN, "%d", $n);
$inputs = explode(" ", fgets(STDIN));
$moins = [];
$save = [];
if(is_numeric($inputs[0]) == false)
     echo("0\n");
else
{
    for ($i = 0; $i < $n; $i++)
    {
        $save[$i] = $inputs[$i] = intval($inputs[$i]);
        if($save[$i] < 0 )
        {
            $moins[$i] = 0;
            $inputs[$i] = -$inputs[$i];
        }
    }
    asort($inputs);
    $key = key($inputs);
    $ms = is_numeric($moins[$key]);
    if ($ms)
        $ms = -1;
    else
        $ms = 1;
    for ($i = 0; $i < $n ; $i++)
    {
        if (($save[$key] == ($save[$i] * -1)) && $ms = -1)
            $ms = 1;
    }
    $tempe = $inputs[$key] * $ms;
    echo("$tempe\n");
}
?>
