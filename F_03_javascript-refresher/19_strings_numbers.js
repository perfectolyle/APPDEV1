// String methods
const raw = "   Perfecto Gardoce   ";
const clean = raw.trim();
const [first, last] = clean.split(" ");
console.log(first.toUpperCase());       // "PERFECTO"
console.log(clean.includes("Gardoce")); // true
console.log(clean.slice(0, 8));         // "Perfecto"
console.log(clean.length);              // 16
console.log(`Full name: ${first} ${last}`);

// Number methods
console.log(parseInt("25px"));      // 25
console.log(parseFloat("1.75m"));   // 1.75
console.log((149.4999).toFixed(2)); // "149.50"

const bad = "tulog" / 2;
console.log(bad);               // NaN
console.log(Number.isNaN(bad)); // true
