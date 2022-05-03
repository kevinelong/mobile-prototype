'use strict';

class Person {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Group {
    public list: Array<Person>;

    constructor(list: Array<Person>) {
        this.list = list;
    }
}

class Portion {
    public who: Person;
    public totalAmount: number;
    public percent: number;
    public paid: number;
    public portion: number; //agrees to pay
    public balance: number = 0; //Owes

    constructor(who: Person, totalAmount = 0, percent = 0, paid = 0) {
        this.who = who;
        this.totalAmount = totalAmount;
        this.percent = percent;
        this.paid = paid;
        this.portion = this.totalAmount * this.percent;
        this.updateBalance();
    }
    updateBalance(){
        this.balance = this.paid - this.portion;
    }
    setPaidAmount(amount:number){
        this.paid = amount;
        this.updateBalance();
    }
}

class Expense {
    public name: string;
    public amount: number;
    public group: Array<Person>;
    public portionList: Array<Portion> = [];

    constructor(name: string, amount: number, group: Array<Person>) {
        this.name = name;
        this.amount = amount;
        this.group = group;
        group.forEach(
            p => this.portionList.push(
                new Portion(
                    p,
                    this.amount,
                    1 / this.group.length,
                    0
                )
            )
        )
    }
    setPaidAmount(who_index:number, amount:number){
        this.portionList[who_index].setPaidAmount(amount);
    }
}

let g:Array<Person> = [
    new Person("KL"),
    new Person("NM"),
    new Person("PD")
];

let e = new Expense("Lunch", 10.00, g);
e.portionList[0].setPaidAmount(10.00);
console.log(e.portionList);
