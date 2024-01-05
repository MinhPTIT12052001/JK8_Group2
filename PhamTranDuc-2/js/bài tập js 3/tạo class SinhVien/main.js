class SinhVien {
  constructor(name, age, gender, dateOfBirth) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.dateOfBirth = dateOfBirth;
  }
  getInfor() {
    console.log(this);
  }
  setName(newName) {
    this.name = newName;
  }
}

PTD = new SinhVien("PhamTranDuc", 23, "male", "06/10/2001");
PTD.getInfor();
