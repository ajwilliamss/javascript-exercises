class Student {
  constructor(student_id, student_name, student_course) {
    this.student_id = student_id;
    this.student_name = student_name;
    this.student_course = student_course;
  }

  studentDetails() {
    console.log(
      `Student ${this.student_name} (student ID ${this.student_id}) is enrolled for ${this.student_course}`
    );
  }
}

let student1 = new Student(1234, "Joe Soap", "Certificate in Networking");
student1.studentDetails();

let student2 = new Student(999, "Jane Doe", "Engineering N3");
student2.studentDetails();
