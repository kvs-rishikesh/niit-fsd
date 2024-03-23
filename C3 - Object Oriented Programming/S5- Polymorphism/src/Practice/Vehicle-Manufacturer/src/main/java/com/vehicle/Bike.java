package com.vehicle;

public class Bike extends VehicleManufacturer implements Vehicle{
    public Bike(String VehicleName, String VehicleModelName, String VehicleType) {
        super(VehicleName,VehicleModelName,VehicleType);
    }

    @Override
    public int maxSpeed(String VehicleType) {
        if (VehicleType.equalsIgnoreCase("Sports Bike")) {
            return 300;
        }
        else if (VehicleType.equalsIgnoreCase("Cruiser")) {
            return 170;
        }
        else {
            return 0;
        }
    }

    @Override
    public String getManufacturerInformation() {
        return "Bike (Manufacturer name: '" + super.getVehicleName() + "', Model Name: '" + super.getVehicleModelName()+ "', Type: '" + super.getVehicleType() + "')";
    }
}
