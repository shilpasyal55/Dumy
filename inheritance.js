const Character = {
    talk: function(...msg) {
        console.log(msg.join(' '));
    }
}

const Human = Object.create(Character,{
    speed: { value: 3 },
    name: {value: "shilpa"}
})

Human.walk = function() {
    this.talk(this.name,"walking");
}

Human.eat = function() {
    this.talk(this.name,"eating");
}

const Robot = Object.create(Character,{
    speed: {value: 5},
    id: { value: "T123"}
})

Robot.drive = function() {
    this.talk(this.name ,"driving");
}

Robot.wifi = function() {
    this.talk(this.name, "wifi" , "connecting");
}

const sam = Object.create(Human,{name: {value: "sam"}});
sam.walk();
sam.eat();
sam.talk("hello from sam");