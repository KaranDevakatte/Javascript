function createAccount() {
    let balance = 0;
    return {
        deposit : function(amount) {
            balance += amount;
        },
        withdraw : function(amount) {
            balance -= amount;
        },
        checkBalance : function() {
            return balance;
        }
    }
}

let account1 = createAccount();
let account2 = createAccount();

account1.deposit(1000);
account1.deposit(500);
console.log(account1.checkBalance());
account1.withdraw(300);
console.log(account1.checkBalance());

account2.deposit(500);
account2.deposit(500);
console.log(account2.checkBalance());
account2.withdraw(500);
console.log(account2.checkBalance());