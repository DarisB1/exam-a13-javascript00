function nombreLettres(mot) {
    let counter = 0;
	for (let i = 0; i < mot.length; i++) {
        counter++
    }
    return counter
}

console.log(nombreLettres("chat")); // Résultat attendu : 4
console.log(nombreLettres("")); // Résultat attendu : 4
