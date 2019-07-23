function createBankAccount(AccountName, initialBalance) {
    const name = AccountName;
    const transactions = [
        {amount: initialBalance,
        operation: "DEPOSIT",
        date: new Date(),
    };

    ];

    function getTransactionHistory(n=5){
        return {
            oldTransactions: transactions,
            newTransactions: transactions
            .concat()
            .reverse()
            .slice(0,n),
        };
    }
function deposit(amount) {
    transactions.push({
        amount,
        operation: "DEPOSIT",
        date: new Date(),
    });
}



}

return {
    deposit,
    withdraw,
    getTransactionHistory,

};

const acc =createBankAccount("Alex", 1000);
acc.deposit(100);
acc.withdraw(100);
acc.deposit(300)