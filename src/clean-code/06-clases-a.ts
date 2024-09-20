(()=>{

    type Gender = 'M'|'F';

    // class Person{
    //     public name:string;
    //     public gender: Gender;
    //     public birtdate: Date;

    //     constructor (name: string, gender: Gender, birtdate: Date){
    //         this.name = name;
    //         this.gender = gender;
    //         this.birtdate = birtdate;
    //     }
    // }

    class Person{
        constructor(
            public name: string,
            public gender: Gender,
            public birtdate: Date
        ){}
    }

    


    class User extends Person{}

    // const newPerson = new Person('Alejandro', 'M', new Date('1991-02-01'));
    // console.log({newPerson});


})();