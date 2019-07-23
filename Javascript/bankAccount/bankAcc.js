var bank = (function() {
  var accounts = [];

  var createAccount = function(username, amount) {
    var accountName = {
      username: username,
      balance: amount
    };
    accounts.push(accountName);
  };

  var findAccount = function(name) {
    for (var i = 0; i < accounts.length; i++) {
      if (accounts[i].username == name) return accounts[i];
    }
  };

  var deposit = function(name, amount) {
    var acc = findAccount(name);
    acc.balance = acc.balance + amount;
  };

  var withdrawal = function(amount) {
    var acc = findAccount(name);
    acc.balance -= amount;
  };

  var showBalance = function(name) {
    return findAccount(name).balance;
  };

  var transfer = function(nameFrom, nameTo, ammount) {
    this.withdrawal(nameFrom, ammount);
    this.deposit(nameTo, ammount);
  };

  return {
    createAcc: createAccount,
    deposit: deposit,
    withdrawal: withdrawal,
    showBalance: showBalance,
    transfer: transfer
  };
})();

bank.createAcc("a", 2000);
bank.createAcc("b", 3500);
bank.createAcc("c", 1500);

console.log("balance of John");
console.log(bank.showBalance("a"));
console.log("balance of Eva");
console.log(bank.showBalance("b"));
console.log("balance of Chris");
console.log(bank.showBalance("c"));

bank.deposit("a", 100);
console.log("balance of John after deposit");
console.log(bank.showBalance("a"));

//history 
//{amount:
//operation(widrawal,deposit)}

/* 
