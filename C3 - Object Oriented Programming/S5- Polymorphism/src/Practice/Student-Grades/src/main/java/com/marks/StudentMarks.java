package com.marks;

public class StudentMarks {
    private String PathWay;
    public StudentMarks() {

    }
    public StudentMarks(String PathWay) {
        this.PathWay = PathWay;
    }

    public void setPathWay(String pathWay) {
        this.PathWay = pathWay;
    }

    public String getPathWay() {
        return PathWay;
    }
    public int calculateMarks(int maths, int physics, int chemistry, int biology) {
        return maths+physics+chemistry+biology;
    }
    public int calculateMarks(int maths, int physics, int chemistry) {
        return maths+physics+chemistry;
    }
    public int calculateMarks(int businessStudies, int finance) {
        return businessStudies+finance;
    }
}
