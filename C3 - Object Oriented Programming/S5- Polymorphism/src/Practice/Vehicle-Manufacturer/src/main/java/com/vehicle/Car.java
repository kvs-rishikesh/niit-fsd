package com.vehicle;

public class Car extends VehicleManufacturer implements Vehicle{
    public Car(String VehicleName, String VehicleModelName, String VehicleType) {
        super(VehicleName,VehicleModelName,VehicleType);
    }

    @Override
    public int maxSpeed(String VehicleType) {
        if (VehicleType.equalsIgnoreCase("Sports Car")) {
            return 250;
        }
        else if (VehicleType.equalsIgnoreCase("Sedan")) {
            return 170;
        }
        else {
            return 0;
        }
    }

    @Override
    public String getManufacturerInformation() {
        return "Car (Manufacturer name: '" +super.getVehicleName() + "', Model Name: '" + super.getVehicleModelName() + "', Type: '" + super.getVehicleType() + "')";
    }
}
