package com.jap.course3;

public abstract class BankAccount {
    protected String accountNumber;
    protected String accountHolderName;
    protected double accountBalance;
    protected boolean accountStatus;

    public BankAccount(String accountNumber, String accountHolderName, double accountBalance, boolean accountStatus) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.accountBalance = accountBalance;
        this.accountStatus = accountStatus;

    }
    public  void deposit(double amount){
        this.accountBalance = this.accountBalance+amount;
        System.out.println("Account Balance: "+this.accountBalance);
        System.out.println();

    }
    public    void  withdraw(double amount){
        if(this.accountBalance < amount){
            System.out.println("Insufficient Balance!!!");
            System.out.println("Account Balance: "+this.accountBalance);
        } else{
            this.accountBalance = this.accountBalance-amount;
            System.out.println("Amount Withdrawn :" + amount );

        }

    }
    public  void retriveAccountBalance(){
        System.out.println( "Account Balance: " +accountBalance);

    }


}