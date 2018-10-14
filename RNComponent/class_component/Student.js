export default class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getDesc() {
        return "我是:" + this.name + " 今年:" + this.age;
    }

}