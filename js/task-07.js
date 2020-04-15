"use strict";

console.log("<------task-07------>");

const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    let ident = 0;
    while (ident <= this.transactions.length) {
      ident += 1;
    }
    const objTransaction = {
      id: `id - ${ident}`,
      amount: amount,
    };

    if (type === Transaction.DEPOSIT) {
      objTransaction.type = Transaction.DEPOSIT;
    } else if (type === Transaction.WITHDRAW) {
      objTransaction.type = Transaction.WITHDRAW;
    } else {
      objTransaction = "Неверный ввод";
    }

    return objTransaction;
  },

  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
    return this.balance;
  },

  withdraw(amount) {
    this.balance -= amount;
    this.transactions.push(
      this.createTransaction(amount, Transaction.WITHDRAW)
    );
    if (amount > this.balance) {
      console.log("Снятие такой сумма невозможно, недостаточно средств");
    }
    return this.balance;
  },

  getBalance() {
    const balance = "Balance: " + this.balance;
    return balance;
  },

  getTransactionDetails(id) {
    for (let i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].id === id) {
        return this.transactions[i];
      }
    }
    console.log("Нету транзакции с таким id");
  },

  getTransactionTotal(type) {
    let totalTransaction = 0;
    for (let i = 0; i < this.transactions.length; i += 1) {
      if (this.transactions[i].type === type) {
        totalTransaction += this.transactions[i].amount;
      }
    }
    return totalTransaction;
  },
};

account.deposit(20000);
account.deposit(1000);
account.withdraw(6500);
account.deposit(30000);
account.deposit(500);
account.withdraw(500);
account.withdraw(800);
account.withdraw(400);
console.log(account.getBalance());
console.log(account.getTransactionDetails("id - 1"));
console.log(account.getTransactionTotal("withdraw"));
console.log(account.getTransactionTotal("deposit"));
console.table(account.transactions);
