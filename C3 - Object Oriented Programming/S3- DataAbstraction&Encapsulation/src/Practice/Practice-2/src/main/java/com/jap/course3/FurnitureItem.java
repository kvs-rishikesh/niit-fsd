package com.jap.course3;

public class FurnitureItem {

    private String furnitureCode;
    private String furnitureType;
    private String gradeoffurniture;
    private String furnitureUsage;
    private double furniturePrice;
    static final int DISCOUNT = 5;


    public void setFurnitureCode(String furnitureCode) {
        this.furnitureCode = furnitureCode;
    }

    public String getFurnitureCode() {
        return furnitureCode;
    }

    public void setFurnitureType(String furnitureType) {
        this.furnitureType = furnitureType;
    }

    public String getFurnitureType() {
        return furnitureType;
    }

    public void setGradeoffurniture(String gradeoffurniture) {
        this.gradeoffurniture = gradeoffurniture;
    }

    public String getGradeoffurniture() {
        return gradeoffurniture;
    }

    public void setFurnitureUsage(String furnitureUsage) {
        this.furnitureUsage = furnitureUsage;
    }

    public String getFurnitureUsage() {
        return furnitureUsage;
    }

    public void setFurniturePrice(double furniturePrice) {
        this.furniturePrice = furniturePrice;
    }

    public double getFurniturePrice() {
        return furniturePrice;
    }

    double calculateDiscount() {
        if (gradeoffurniture.equalsIgnoreCase("Grade-1")&&furnitureUsage.equalsIgnoreCase("Outdoor")) {
            double discountAmount = furniturePrice*DISCOUNT/100.0;
            return (double) (furniturePrice - discountAmount);
        }
        else {
            return furniturePrice;
        }
    }
}

