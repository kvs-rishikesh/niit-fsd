package com.marks;

public class StudentImpl {
    public static void main(String[] args) {
        StudentMarks sm = new StudentMarks();
        sm.setPathWay("Non-Medical");
        int totalMarks = 0;
        if (sm.getPathWay().equalsIgnoreCase("Medical")) {
            totalMarks = sm.calculateMarks(92,85,95,98);
        }
        else if (sm.getPathWay().equalsIgnoreCase("Non-Medical")) {
            totalMarks = sm.calculateMarks(95,93,97);
        }
        else if (sm.getPathWay().equalsIgnoreCase("Business")) {
            totalMarks = sm.calculateMarks(98,95);
        }
        else {
            System.out.println("Invalid PathWay Selection");
        }
        System.out.println("Total Marks for "+sm.getPathWay()+ " PathWay Students is: "+totalMarks);
    }
}