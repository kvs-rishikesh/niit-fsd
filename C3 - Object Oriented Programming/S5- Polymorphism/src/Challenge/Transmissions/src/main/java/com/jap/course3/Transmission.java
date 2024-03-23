package com.jap.course3;

public class Transmission {
    private String Type;
    private String ModelNumber;
    public Transmission(String Type, String ModelNumber) {
        this.Type = Type;
        this.ModelNumber = ModelNumber;
    }

    public void setType(String type) {
        this.Type = type;
    }

    public String getType() {
        return Type;
    }

    public void setModelNumber(String modelNumber) {
        this.ModelNumber = modelNumber;
    }

    public String getModelNumber() {
        return ModelNumber;
    }
    public void showSpecs() {
        System.out.println("Transmission Type: "+Type);
        System.out.println("Model Number: "+ModelNumber);
    }
}
