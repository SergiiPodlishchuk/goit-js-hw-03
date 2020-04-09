/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw"
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  balance: 0,
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    let ident = 0;
    while (ident <= this.transactions.length) {
      ident += 1;
    }
    const objTransaction = {
      id: `id - ${ident}`,
      amount: amount
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

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
    return this.balance;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
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

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    const balance = "Balance: " + this.balance;
    return balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (let i = 0; i < this.transactions.length; i += 1) {
      if (this.transactions[i].id === id) {
        return this.transactions[i];
      }
    }
    console.log("Нету транзауции с таким id");
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let totalTransaction = 0;
    for (let i = 0; i < this.transactions.length; i += 1) {
      if (this.transactions[i].type === type) {
        totalTransaction += this.transactions[i].amount;
      }
    }
    return totalTransaction;
  }
};

account.deposit(20000);
account.deposit(1000);
account.deposit(30000);
account.deposit(500);
account.withdraw(500);
account.withdraw(6500);
account.withdraw(800);
account.withdraw(400);
console.log(account.getBalance());
console.log(account.getTransactionDetails("id - 3"));
console.log(account.getTransactionTotal("withdraw"));
console.table(account.transactions);
