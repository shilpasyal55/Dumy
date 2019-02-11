class Human {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

const Mixin = (superClass) => class extends superClass {
    getNamejob() {
        console.log(`${this.name} is a ${this.job}`)
    }
}

class Worker extends Mixin(Human) {
    constructor(name,job)    {
        super(name);
        this.job = job
    }

    getJob() {
        return this.job
    }
}

const work = new Worker("shilpa","developer");
work.getNamejob();