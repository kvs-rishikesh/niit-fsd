package com.jap.course3;

public class TransmissionImpl {
    public static void main(String[] args) {
        Transmission transmission = new MT("Manual", "Mp4",4, new double[]{2.540, 1.920, 1.510, 1.000});
        transmission.showSpecs();
        System.out.println("-------------------------------");
        System.out.println();
        Transmission transmission1 = new AT("AMTD5", 4, new double[]{1.510, 1.000, 1.920, 2.540});
        transmission1.showSpecs();
        System.out.println("-------------------------------");
        System.out.println();
        Transmission transmission2 = new AMT("AMT", 5, new double[]{2.950, 1.940, 1.000, 1.340, 0.630});
        transmission2.showSpecs();
        System.out.println("-------------------------------");
    }
}