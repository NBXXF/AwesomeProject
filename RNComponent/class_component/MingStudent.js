import Student from "./Student";

export default class MingStudent extends Student {
    constructor() {
        super("小明", 24);
    }

    getDesc() {
        return "重写 getDesc:" + super.getDesc();
    }

}