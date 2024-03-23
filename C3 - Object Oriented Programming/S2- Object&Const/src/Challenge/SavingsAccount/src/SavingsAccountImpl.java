import java.util.Scanner;

public class SavingsAccountImpl {
    public static void main(String[] args) {
        int input;
        String accNumber = " ";
        String accName = " ";
        Scanner sc = new Scanner(System.in);

        SavingsAccount sa = new SavingsAccount(accNumber, accName);
        System.out.println("Enter 1 for Credit, 2 for Debit, 3 for Display Balance, 4 for Account Status");
        input = sc.nextInt();

        if (input == 1) {
            sa.amountCredit(5000);
        }
        else if (input == 2) {
            sa.amountDebit(2000);
        }
        else if (input == 3) {
            sa.displayBalance();
        }
        else {
            sa.getStatus();
        }
    }
}