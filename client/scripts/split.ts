'use strict';
function r(amount:number):number{
    return Math.round(amount*100)/100;
}
class Person {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
    toString(){
        return this.name;
    }
}
class VitaGroup {
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
    public explicit: boolean = false; //Dirty flag if this person's share has been customized for this transaction. true==dirty

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
        this.explicit = true;
        this.updateBalance();
    }
    setPortion(portion:number){
        this.portion = portion;
        this.explicit = true;
        this.updateBalance();
    }
    toString():string{
        return `\n\t\t${this.who} ${r(this.totalAmount)} ${r(this.percent)}  ${r(this.paid)} ${r(this.portion)} ${r(this.balance)}`;
    }
}
class Expense {
    public name: string;
    public amount: number;
    public group: Array<Person>;
    public portionList: Array<Portion> = [];
    public turn: number;

    constructor(name: string, amount: number, group: Array<Person>, turn= 0) {
        this.name = name;
        this.amount = amount;
        this.group = group;
        this.turn = turn;
        group.forEach(
            p => this.portionList.push(
                new Portion(
                    p,
                    this.amount,
                    1 / this.group.length,
                    0
                )
            )
        );
        this.makeBalance();
    }
    makeBalance(){
        let total = 0;
        this.portionList.map(p => total += p.portion);
        const old = this.portionList[this.turn].portion;
        const pennies = this.amount - total;
        this.portionList[this.turn].setPortion(pennies + old);
    }

    setPaidAmount(who_index:number, amount:number){
        this.portionList[who_index].setPaidAmount(amount);
        this.makeBalance();
    }

    toString():string{
        return `NAME:${this.name}\n\tAMOUNT:${this.amount}\n\tPORTION_LIST:${this.portionList.map(e=>e.toString()).join('\n\t')}`;
    }

}
/* BEGIN TESTS */
let g:Array<Person> = [
    new Person("KL"),
    new Person("NM"),
    new Person("PD"),
];

let e = new Expense(
    "Lunch",
    10.00,
    g,
    0);

console.log(e+'');

console.assert(
    r(e.portionList[0].balance) === -3.34,
    "",
    `INITIAL BALANCE: ${
        r(e.portionList[0].balance)
    } should be ${
        -3.34
    }`);

e.portionList[0].setPaidAmount(10.00);

console.assert(
    r(e.portionList[0].balance) === 6.66,
    "",
    `ADJUSTED BALANCE: ${
        r(e.portionList[0].balance)
    } should be ${
        6.66
    }`
);

console.log(e+'');
