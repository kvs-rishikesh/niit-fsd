package com.jap.course3;

public class FurnitureItemImpl {
    public static void main(String[] args) {
        double discountPrice;

        FurnitureItem fi = new FurnitureItem();

      fi.setFurnitureCode("Ta");
      fi.setFurnitureType("Chair");
      fi.setGradeoffurniture("Grade-1");
      fi.setFurnitureUsage("Outdoor");
      fi.setFurniturePrice(350);

      System.out.println("Furniture Code: "+fi.getFurnitureCode());
      System.out.println("Furniture Type: "+fi.getFurnitureType());
      System.out.println("Grade of Furniture: "+fi.getGradeoffurniture());
      System.out.println("Furniture Usage: "+fi.getFurnitureUsage());
      discountPrice = fi.calculateDiscount();
      System.out.println("Furniture Price: "+discountPrice);
    }
}
