package com.jap.course3;

public class ElectricEngine extends Engine {
    private int Voltage;
    public ElectricEngine(String ModelNo,double Displacement,int MaxPower,int MaxRPM,int NumofCylinders,int Voltage) {
        super(ModelNo,Displacement,MaxPower,MaxRPM,NumofCylinders);
        this.Voltage = Voltage;
    }

    public void setVoltage(int voltage) {
        this.Voltage = voltage;
    }

    public int getVoltage() {
        return Voltage;
    }
}
