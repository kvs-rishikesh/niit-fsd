import java.util.Scanner;
public class FurnitureItem {
    String color;
    String grades;
    String manufacturer;
    String type;
    String outdoor = "Outdoor";

    void input() {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the color (Red,Blue,Green)");
        color = sc.nextLine();
        System.out.println("Enter the Grades (Grade1,Grade2,Grade3)");
        grades = sc.nextLine();
        System.out.println("Enter the Manufacturer (Indoor or Outdoor)");
        manufacturer = sc.nextLine();
        System.out.println("Enter the type of Furniture (Table, Chair, Cupboard, Stool)");
        type = sc.nextLine();
    }

    void display() {
        System.out.println("Color: "+color);
        System.out.println("Grade: "+grades);
        if (manufacturer.equals(outdoor)) {
            System.out.println("Manufacturer: "+manufacturer);
            System.out.println("5% Discount Applied for Outdoor Furniture");
        }
        else {
            System.out.println("Manufacturer: "+manufacturer);
        }
        System.out.println("Type: "+type);
    }
}
