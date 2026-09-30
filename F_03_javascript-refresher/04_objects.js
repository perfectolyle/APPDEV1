const aboutMe = {
  name: "Perfecto S. Gardoce III",
  age: 19,
  course: "BSIS 3",
  introduce: function () {
    console.log(`Hi, I'm ${this.name}, a ${this.course} student from ${this.hometown}.`);
  }
};

// Properties can be added after the object already exists
aboutMe.hobby = "Sleeping";
aboutMe.hometown = "Tarlac";

aboutMe.introduce();
console.log("Favorite hobby:", aboutMe.hobby);
