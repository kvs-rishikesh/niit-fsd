package com.jap.course3;

public class Voter {
    private String name;
    private int age;

    static final int VOTER_ELIGIBLE_AGE = 18;



    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getAge() {
        return age;
    }

    public String getAgeCriteria() {
        if(age>=VOTER_ELIGIBLE_AGE) {
            return name +" is Eligible";
        }
        else if (age<VOTER_ELIGIBLE_AGE && age>0) {
            return name +" is not Eligible to Vote";
        }
        else {
            return " Age cannot be negative or zero";
        }
    }
}
