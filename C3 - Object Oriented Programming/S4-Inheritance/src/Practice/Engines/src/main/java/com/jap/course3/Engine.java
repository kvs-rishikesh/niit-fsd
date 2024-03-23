package com.jap.course3;

public class Engine {
    private String ModelNo;
    private double Displacement;
    private int MaxPower;
    private int MaxRPM;
    private int NumofCylinders;
    public Engine(String ModelNo,double Displacement,int MaxPower,int MaxRPM,int NumofCylinders) {
        this.ModelNo = ModelNo;
        this.Displacement = Displacement;
        this.MaxPower = MaxPower;
        this.MaxRPM = MaxRPM;
        this.NumofCylinders = NumofCylinders;
    }

    public void setModelNo(String modelNo) {
        this.ModelNo = modelNo;
    }

    public String getModelNo() {
        return ModelNo;
    }

    public void setDisplacement(double displacement) {
        this.Displacement = displacement;
    }

    public double getDisplacement() {
        return Displacement;
    }

    public void setMaxPower(int maxPower) {
        this.MaxPower = maxPower;
    }

    public int getMaxPower() {
        return MaxPower;
    }

    public void setMaxRPM(int maxRPM) {
        this.MaxRPM = maxRPM;
    }

    public int getMaxRPM() {
        return MaxRPM;
    }

    public void setNumofCylinders(int numofCylinders) {
        this.NumofCylinders = numofCylinders;
    }

    public int getNumofCylinders() {
        return NumofCylinders;
    }
}
