let bankAccount: { money: number, deposit: (value: number) => void } = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};
let myself: { name: string, bankAccount: { money: number, deposit: (value: number) => void }, hobbies: [string, string] } = {
    name: "Assad",
    bankAccount: bankAccount,
    hobbies: ["Violin", "Cookong"]
};

myself.bankAccount.deposit(3000);
console.log(myself);