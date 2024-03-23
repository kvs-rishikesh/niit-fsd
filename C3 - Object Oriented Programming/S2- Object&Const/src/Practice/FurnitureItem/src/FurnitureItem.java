public class FurnitureItem {
    String furnitureCode;
    String furnitureType;
    String gradeOfFurniture;
    String color;
    String furnitureUsage;
    double price;

    FurnitureItem() {
        furnitureCode = "Ta";
        furnitureType = "Table";
        gradeOfFurniture = "Grade-3";
        color = "White";
        furnitureUsage = "Outdoor";
        price = 5000;
    }

    double discountPrice() {
        if(furnitureUsage.equalsIgnoreCase("Outdoor")) {
            double discount = price-(price*5/100);
            return discount;
        }
        else {
            System.out.println("No Valid Discount");
            return price;
        }
    }

    void displayDetails() {
        System.out.println("====================================================");
        System.out.println("Furniture Code: "+furnitureCode);
        System.out.println("Furniture Type: "+furnitureType);
        System.out.println("Grade Of Furniture: "+gradeOfFurniture);
        System.out.println("Color: "+color);
        System.out.println("Furniture Usage: "+furnitureUsage);
        System.out.println("Price: "+discountPrice());
    }
}
