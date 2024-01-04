class SinhVien {
    constructor(name, age, gender, age_date) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.age_date = age_date;
    }

    getInfo() {
        return `Tên: ${this.name}, Tuổi: ${this.age}, Giới tính: ${this.gender}, Ngày sinh: ${this.age_date}`;
    }

    setName(newName) {
        this.name = newName
    }
}
