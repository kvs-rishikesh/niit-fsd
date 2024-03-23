package com.jap.course3;

public class BankAccountImpl {
    public static void main(String[] args) {
        SavingsAccount savingsAccount = new SavingsAccount("1465000000002222","Rishi",4000, true);
        CurrentAccount currentAccount = new CurrentAccount("1453000000001111" ,"Satya",3000,true);


        savingsAccount.deposit( 1000);
        savingsAccount.withdraw(500);
        savingsAccount.retriveAccountBalance();

        // currentaccount
        System.out.println();
        currentAccount.deposit(2000);
        currentAccount.withdraw(2500);
        currentAccount.withdraw(4500);




    }

}