class SinhVien{
    constructor(name, age, gender, dateOfBirth){{
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.dateOfBirth = dateOfBirth;
    }}

    getInfor(){{
        console.log(this.name);
        console.log(this.age);
        console.log(this.gender);
        console.log(this.dateOfBirth);
    }}

    setName(name){{
        this.name = name;
    }}
}

let sv = new SinhVien("Nguyễn Văn A", 22, "Nam","01-01-2000");
sv.getInfor();
sv.setName("Trần Văn A");
sv.getInfor();