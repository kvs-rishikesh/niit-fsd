import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        int choice;
        String key;
        Scanner sc = new Scanner(System.in);
        SavingAccount s1 = new SavingAccount();
        do {
            System.out.println("=========================");
            System.out.println("=====Enter the Choice====");
            System.out.println("=========================");
            System.out.println("  1. Check Eligibility for Opening Account");
            System.out.println("  2. Account Status");
            System.out.println("  3. Account Details");
            choice = sc.nextInt();
            if (choice==1) {
                s1.ageCheck();
            }
            else if (choice==2) {
                s1.accountStatusCheck(s1.accountBalance);
            }
            else {
                s1.accountDetails();
            }
            System.out.println("Enter Key to Continue");
            key = sc.next();
        }while(key.equalsIgnoreCase("continue"));
    }
}