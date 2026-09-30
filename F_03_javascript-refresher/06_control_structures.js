// Grade checker for my APPDEV1 quiz
let score = 88;
if (score >= 90) { console.log("A"); }
else if (score >= 80) { console.log("B"); }
else if (score >= 70) { console.log("C"); }
else { console.log("F"); }

// for loop -- I know the count up front
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// while loop -- keep going until the condition is false
let snooze = 0;
while (snooze < 3) {
  console.log("Hello (snooze #" + (snooze + 1) + ")");
  snooze++;
}
