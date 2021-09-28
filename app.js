let entrada = parseFloat(prompt(" Usted... ¿cuánto cree que valdrá bitcoin en diciembre 2021? Ingrese el precio (en USD)"));
if ((entrada >= 0) && (entrada <= 10000)) {
    alert("Se va a ceroooo!!!!!");
} else if ((entrada >= 10001) && (entrada <= 40000)) {
    alert("Tranquilo, seguirá lateralizando");
} else if (entrada > 40000) {
    alert("To the mooooon!!!!!");
}
else {
    alert("ERROR. Por favor, escriba números");
} 