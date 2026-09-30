let favoriteFoods = ["Sisig", "Adobo", "Sinigang"];
favoriteFoods.push("Halo-Halo"); // ["Sisig", "Adobo", "Sinigang", "Halo-Halo"]
favoriteFoods.shift();           // ["Adobo", "Sinigang", "Halo-Halo"]

for (const food of favoriteFoods) {
  console.log(food);
}

const liked = favoriteFoods.map(food => "I like " + food);
console.log(liked);
console.log(favoriteFoods); // original is untouched by .map()
