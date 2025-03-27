function multiplierParDeux(tab) {
	for (let i = 0; i < tab.length; i++) {
       tab[i] = tab[i] * 2
    }
    return tab
}
console.log(multiplierParDeux([1, 2, 3])); // Résultat attendu : [2, 4, 6]