package com.jap.course3;

public class Main {
    public static void main(String[] args) {
        DieselEngine DieselEngine = new DieselEngine("D237L",2.5,200,5,8,5,120);
        PetrolEngine PetrolEngine = new PetrolEngine("P65M",2.3,200,4,4,5,100);
        CNGEngine CNGEngine = new CNGEngine("G43O",0.0,180,3,1,5,500);
        ElectricEngine ElectricEngine = new ElectricEngine("EV230",0.0,200,7,1,500);
        EngineInfo EngineInfo = new EngineInfo();
        System.out.println("Diesel Engine");
        EngineInfo.EngineInfo(DieselEngine);
        System.out.println("\nPetrol Engine");
        EngineInfo.EngineInfo(PetrolEngine);
        System.out.println("\nCNG Engine");
        EngineInfo.EngineInfo(CNGEngine);
        System.out.println("\nElectric Engine");
        EngineInfo.EngineInfo(ElectricEngine);
    }
}