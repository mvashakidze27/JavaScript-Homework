class User {
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
    }
    getFullName() {
      return this.name + " " + this.surname;
    }
  }
  
  class Student extends User {
    constructor(name, surname, year) {
      super(name, surname);
      this.year = year;
      if (year < 2018) {
        throw new Error("The admission year should be more than 2018");
      }
    }
    getCourse() {
      let currentyear = 2022;
      return currentyear - this.year;
    }
  }
  
  let student = new Student("John", "Smith", 2018);
  
  console.log(student.name);
  console.log(student.surname);
  console.log(student.getFullName());
  console.log(student.year);
  console.log(student.getCourse());
  