package com.jap.course3;

public class PetrolEngine extends Engine {
    private int NumofGears;
    private int FuelCapacity;
    public PetrolEngine(String ModelNo,double Displacement,int MaxPower,int MaxRPM,int NoofCylinders,int NumofGears,int FuelCapacity) {
        super(ModelNo,Displacement,MaxPower,MaxRPM,NoofCylinders);
        this.NumofGears = NumofGears;
        this.FuelCapacity = FuelCapacity;
    }

    public void setNumofGears(int numofGears) {
        this.NumofGears = numofGears;
    }

    public int getNumofGears() {
        return NumofGears;
    }

    public void setFuelCapacity(int fuelCapacity) {
        this.FuelCapacity = fuelCapacity;
    }

    public int getFuelCapacity() {
        return FuelCapacity;
    }
}
