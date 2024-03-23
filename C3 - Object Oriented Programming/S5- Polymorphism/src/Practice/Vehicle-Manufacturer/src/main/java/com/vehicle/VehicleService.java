package com.vehicle;

public class VehicleService {
    public static void main(String[] args) {
        Bike bi = new Bike("KTM","RC-390","Sports Bike");
        int BikeSpeed;
        BikeSpeed = bi.maxSpeed(bi.getVehicleType());
        System.out.println("Bike Type is "+bi.getVehicleType()+" and its speed is "+BikeSpeed);
        System.out.println(bi.getManufacturerInformation());
        System.out.println();
        Car cr = new Car("Swift","Dzire","Sedan");
        int CarSpeed;
        CarSpeed = cr.maxSpeed(cr.getVehicleType());
        System.out.println("Car Type is "+cr.getVehicleType()+ " and its speed is "+CarSpeed);
        System.out.println(cr.getManufacturerInformation());
    }
}