//chiedi nome e salva valore
const name =  prompt(`Inserisci Nome?`);
console.log (`name:`, name);

//chiedi cognome e salva valore
const surname =  prompt(`Inserisci Cognome?`);
console.log (`surname:`, surname);

//chiedi colore preferito e salva valore
const favoritecolor =  prompt(`Inserisci Colore Preferito?`);
console.log (`favoritecolor:`, favoritecolor);

//stampa soluzione valori su html
document.writeln(`name` + `surname` + `favoritecolor` + 130);

/*
document.getElementById('psw').innerHTML = name + surname + favoritecolor + 130;
*/