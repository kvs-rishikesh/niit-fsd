import java.util.Scanner;
public class SavingAccount {
    long accountNumber = 1234567891234567L;
    String accountHolderName = "Rishi";
    double accountBalance = 1123456.7;
    String accountStatus = "Active";
    int age;

    Scanner sc = new Scanner(System.in);

    void ageCheck() {
        System.out.println("Enter the Age: ");
        age = sc.nextInt();
        if (age>=18) {
            System.out.println("=============== Account Details ===============");
            System.out.println("Account Number: "+accountNumber);
            System.out.println("Account Holder Name: "+accountHolderName);
            System.out.println("Account Holder Age: "+age);
            System.out.println("Account Balance: 1000");
            System.out.println("Account Status: "+accountStatus);
            System.out.println("================= Thank You ===================");
        }
        else {
            System.out.println("You're Not Eligible for Opening Savings Account");
        }
    }

    void accountStatusCheck(double currentAccountBalance) {
        if (currentAccountBalance>=500) {
            System.out.println("Account Status: "+accountStatus);
        }
        else {
            System.out.println("Account Status: Not Active as Balance is Below 500");
        }
    }

    void accountDetails() {
        System.out.println("=============== Account Details ===============");
        System.out.println("Account Number: "+accountNumber);
        System.out.println("Account Holder Name: "+accountHolderName);
        System.out.println("Account Balance: "+accountBalance); 
        System.out.println("Account Status: "+accountStatus);
        System.out.println("================= Thank You ===================");
    }
}
