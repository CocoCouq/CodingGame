<?php
$tab = [];
fscanf(STDIN, "%d", $N);
for ($i = 0; $i < $N; $i++)
{
    fscanf(STDIN, "%d", $pi);
    $tab[$i] = $pi;
}

sort($tab);

$i = 1;
$res = $tab[1] - $tab[0];

while (++$i < $N)
{
    if (($tab[$i] - $tab[$i - 1]) < $res)
        $res = $tab[$i] - $tab[$i - 1];
}
echo($res);
?>
