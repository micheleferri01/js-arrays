const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

console.table(teachers);

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = [];
for(let i = teachers.length - 1; i >= 0; i--){
reversedTeachers.push(teachers[i]);
}
console.table(reversedTeachers);

// !punto 1 soluzione 2
const reversedTeachersSolution2 = [];
for( let i = 0; i < teachers.length; i++){
  reversedTeachersSolution2.unshift(teachers[i]);
}
console.table(reversedTeachersSolution2);

// !punto 1 soluzione 3
const reversedTeachersSolution3 = teachers.reverse();
console.table(reversedTeachersSolution3);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
for(let i = 0; i < teachers.length; i++){
  if(teachers[i].length >= 5){
    longNames.push(teachers[i]);
  }
}
console.table(longNames);

// 3. Rimuovi 'Ed' dall'array teachers

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = null;

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = null;