import java.util.Scanner;
public class SavingsAccount {
    String accountNo;
    String accountHolderName;
    double accountBalance = 56789.45;
    String accountStatus;
    double minimumBalance = 1000;
    Scanner sc = new Scanner(System.in);

    SavingsAccount(String accountNo,String accountHolderName) {
        this.accountNo = accountNo;
        this.accountHolderName = accountHolderName;
        this.accountBalance = accountBalance;
        this.accountStatus = accountStatus;
        this.minimumBalance = minimumBalance;
    }

    void amountCredit(double credit) {
        System.out.println("Enter Your Account Number");
        this.accountNo = sc.next();
        System.out.println("Enter Account Holder Name");
        this.accountHolderName = sc.next();
        if (credit+this.accountBalance>=400000) {
            System.out.println("Credit Not Possible As It Is Exceeding Maximum Limit");
        }
        else {
            this.accountBalance = this.accountBalance+credit;
            System.out.println("Credited Successfully");
            System.out.println("Account Balance: "+this.accountBalance);
        }
    }

    void amountDebit(double debit) {
        System.out.println("Enter Your Account Number");
        this.accountNo = sc.next();
        System.out.println("Enter Account Holder Name");
        this.accountHolderName = sc.next();
        if (debit>this.accountBalance) {
            System.out.println("Debit Not Possible, Balance is Low");
        }
        else if ((this.accountBalance-debit)<this.minimumBalance) {
            System.out.println("Debit Not Possible As It Is Affecting Minimum Balance");
        }
        else {
            this.accountBalance = this.accountBalance - debit;
            System.out.println("Debited Successfully");
            System.out.println("Account Balance: "+this.accountBalance);
        }
    }

    void displayBalance() {
        System.out.println("Enter Your Account Number");
        this.accountNo = sc.next();
        System.out.println("Enter Account Holder Name");
        this.accountHolderName = sc.next();
        System.out.println("Account Balance: "+this.accountBalance);
    }

    void getStatus() {
        System.out.println("Enter Your Account Number");
        this.accountNo = sc.next();
        System.out.println("Enter Account Holder Name");
        this.accountHolderName = sc.next();
        if (this.accountBalance<this.minimumBalance) {
            System.out.println("Account Status: Inactive");
        }
        else {
            System.out.println("Account Status: Active");
        }
    }
}
