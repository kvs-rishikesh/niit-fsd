package com.jap.course3;

public class MT extends Transmission{
    private int ForwardGears;
    private double GearRatios[];
    public void setForwardGears(int forwardGears) {
        this.ForwardGears = forwardGears;
    }

    public int getForwardGears() {
        return ForwardGears;
    }

    public void setGearRatios(double[] gearRatios) {
        this.GearRatios = gearRatios;
    }
    public double[] getGearRatios() {
        return GearRatios;
    }
    public MT(String Type, String ModelNumber, int ForwardGears, double[] GearRatios) {
        super(Type,ModelNumber);
        this.ForwardGears = ForwardGears;
        this.GearRatios = GearRatios;
    }

    @Override
    public void showSpecs() {
        super.showSpecs();
        System.out.println("==============================");
        System.out.println("     Key Specifications");
        System.out.println("==============================");
        System.out.println("Forward Gears: "+ForwardGears);
        for (int i=0;i<ForwardGears;i++) {
            System.out.println("Gear "+ (i+1) + "Ratio: "+GearRatios[i]);
        }
    }
}

