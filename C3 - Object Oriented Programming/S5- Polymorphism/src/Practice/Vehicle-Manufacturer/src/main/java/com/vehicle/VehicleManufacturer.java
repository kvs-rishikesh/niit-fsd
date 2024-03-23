package com.vehicle;

public abstract class VehicleManufacturer {
    private String VehicleName;
    private String VehicleModelName;
    private String VehicleType;


    public VehicleManufacturer(String VehicleName, String VehicleModelName, String VehicleType) {
        this.VehicleName = VehicleName;
        this.VehicleModelName = VehicleModelName;
        this.VehicleType = VehicleType;
    }

    public void setVehicleName(String vehicleName) {
        this.VehicleName = vehicleName;
    }

    public String getVehicleName() {
        return VehicleName;
    }

    public void setVehicleModelName(String vehicleModelName) {
        this.VehicleModelName = vehicleModelName;
    }

    public String getVehicleModelName() {
        return VehicleModelName;
    }

    public void setVehicleType(String vehicleType) {
        this.VehicleType = vehicleType;
    }

    public String getVehicleType() {
        return VehicleType;
    }
    public abstract String getManufacturerInformation();
}
