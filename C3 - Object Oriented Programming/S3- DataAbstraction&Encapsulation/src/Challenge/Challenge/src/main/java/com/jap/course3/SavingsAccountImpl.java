package com.jap.course3;

public class SavingsAccountImpl {
    public static void main(String[] args) {

        SavingsAccount sa = new SavingsAccount("Rishi","20-07-2021",true);
        sa.setAvailableBalance(15000);
        sa.Debit(5000);
        sa.displayDetails();
        System.out.println();
        System.out.println();

        SavingsAccount sa1 = new SavingsAccount("K Rishi","30-07-2022",true);
        sa1.setInterestRate(20);
        sa1.setInternetBankingEnabled(true);
        sa1.setMobileBankingEnabled(true);
        sa1.setAvailableBalance(25000);
        sa1.Credit(5000);
        sa1.displayDetails();
    }
}
