class Student {
  private name: string;
  private age: number;
  private subjects: string[];

  constructor(name: string, age: number, subjects: string[]) {
    this.name = name;
    this.age = age;
    this.subjects = subjects;
  }

  calcBirthYear(): number {
    const currentYear = new Date().getFullYear();
    return currentYear - this.age;
  }

  logData() {
    console.log(`Student Profile: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Birth Year: ${this.calcBirthYear()}`);
    console.log(`Subjects: ${this.subjects.join(", ")}`);
  }
}

const student1 = new Student("John Doe", 20, [
  "Mathematics",
  "Computer Science"
]);
student1.logData()
