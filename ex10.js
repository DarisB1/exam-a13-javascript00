function longueursMots(mots) {
    let tab = [];
    for (let i = 0; i < mots.length; i++) {
        tab.push(mots[i].length)
    }
    return tab
}
console.log(longueursMots(["chat", "éléphant", "lion"])); // Résultat attendu : [4, 8, 4]
console.log(longueursMots(["chat", "éléphant", ""])); // Résultat attendu : [4, 8, 4]
