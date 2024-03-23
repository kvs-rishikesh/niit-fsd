package com.jap.course3;
import java.util.Random;

public class SavingsAccount {
    private String accountHolderName;
    private long accountNo;
    private String accountOpeningDate;
    private boolean accountStatus;
    private double availableBalance;
    private boolean internetBankingEnabled;
    private boolean mobileBankingEnabled;
    private double interestRate;
    private String modeOfOperation;
    public static final double maxCreditLimit = 100000;
    public static final double minDebitAmount = 10;

    public SavingsAccount(String accountHolderName, String accountOpeningDate, boolean accountStatus) {
        Random random = new Random();
        this.accountNo = 100_000_000_000L + random.nextInt(900_000_000);
        this.accountHolderName = accountHolderName;
        this.accountOpeningDate = accountOpeningDate;
        this.accountStatus = accountStatus;
    }

    public void setAccountHolderName(String accountHolderName) {
        this.accountHolderName = accountHolderName;
    }

    public String getAccountHolderName() {
        return accountHolderName;
    }

    public void setAccountOpeningDate(String accountOpeningDate) {
        this.accountOpeningDate = accountOpeningDate;
    }

    public String getAccountOpeningDate() {
        return accountOpeningDate;
    }

    public void setAccountStatus(boolean accountStatus) {
        this.accountStatus = accountStatus;
    }

    public boolean isAccountStatus() {
        return accountStatus;
    }

    public void setAvailableBalance(double availableBalance) {
        this.availableBalance = availableBalance;
    }

    public double getAvailableBalance() {
        return availableBalance;
    }

    public void setInternetBankingEnabled(boolean internetBankingEnabled) {
        this.internetBankingEnabled = internetBankingEnabled;
    }

    public boolean isInternetBankingEnabled() {
        return internetBankingEnabled;
    }

    public void setMobileBankingEnabled(boolean mobileBankingEnabled) {
        this.mobileBankingEnabled = mobileBankingEnabled;
    }

    public boolean isMobileBankingEnabled() {
        return mobileBankingEnabled;
    }

    public void setInterestRate(double interestRate) {
        this.interestRate = interestRate;
    }

    public double getInterestRate() {
        return interestRate;
    }

    public void setModeOfOperation(String modeOfOperation) {
        this.modeOfOperation = modeOfOperation;
    }

    public String getModeOfOperation() {
        return modeOfOperation;
    }

    public long getAccountNo() {
        return accountNo;
    }

    public boolean isCreditAllowed(double amount) {
        return amount>0 && amount<=maxCreditLimit;
    }

    public boolean isDebitAllowed(double amount) {
        return amount>0 && availableBalance>=(minDebitAmount+amount);
    }

    public void Debit(double amount) {
        if (isDebitAllowed(amount)) {
            availableBalance = availableBalance - amount;
        }
        else {
            System.out.println("Debit not Possible due to insufficient funds");
        }
    }

    public void Credit(double amount) {
        if (isCreditAllowed(amount)) {
            availableBalance = availableBalance + amount;
        }
        else {
            System.out.println("Credit is Failed as Maximum Amount is Reached");
        }
    }

    public void getBalance() {
        System.out.println("Available Balance: "+availableBalance);
    }

    public void displayDetails() {
        System.out.println("Account Number: "+getAccountNo());
        System.out.println("Account Holder Name: "+getAccountHolderName());
        System.out.println("Account Opening Date: "+getAccountOpeningDate());
        System.out.println("Account Status: "+isAccountStatus());
        System.out.println("Interest Rate: "+getInterestRate());
        System.out.println("Mobile Banking: "+isMobileBankingEnabled());
        System.out.println("Internet Banking: "+isInternetBankingEnabled());
        System.out.println("Available Balance: "+getAvailableBalance());
    }
}
