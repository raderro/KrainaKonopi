<?php
$naglowek="Kraina Konopi - zamownienie \n";

$adres=$_POST['email'];
$tytul="Kraina Konopi - zamownienie";
$tekst="
Zamowienie zlozone";

mail($adres, $tytul,$tekst, $naglowek);
echo "Złożono zamówienie!";
?>