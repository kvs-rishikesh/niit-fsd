package com.jap.course3;

public class EngineInfo {
    public static void EngineInfo(Engine Engine) {
        System.out.println("Model No: "+Engine.getModelNo());
        System.out.println("Displacement: "+Engine.getDisplacement()+"L");
        System.out.println("Max Power: "+Engine.getMaxPower()+"HP");
        System.out.println("Max RPM: "+Engine.getMaxRPM()+"RPM");
        System.out.println("Number of Cylinders: "+Engine.getNumofCylinders());
        if (Engine instanceof DieselEngine) {
            DieselEngine DieselEngine = (DieselEngine) Engine;
            System.out.println("Number of Gears: "+DieselEngine.getNumofGears());
            System.out.println("Fuel Capacity: "+DieselEngine.getFuelCapacity());
        }
        else if (Engine instanceof PetrolEngine) {
            PetrolEngine PetrolEngine = (PetrolEngine) Engine;
            System.out.println("Number of Gears: "+PetrolEngine.getNumofGears());
            System.out.println("Fuel Capacity: "+PetrolEngine.getFuelCapacity());
        }
        else if (Engine instanceof CNGEngine) {
            CNGEngine CNGEngine = (CNGEngine) Engine;
            System.out.println("Number of Gears: "+CNGEngine.getNumofGears());
            System.out.println("Fuel Capacity: "+CNGEngine.getFuelCapacity());
        }
        else {
            ElectricEngine ElectricEngine = (ElectricEngine) Engine;
            System.out.println("Voltage: "+ElectricEngine.getVoltage());
        }
    }
}
