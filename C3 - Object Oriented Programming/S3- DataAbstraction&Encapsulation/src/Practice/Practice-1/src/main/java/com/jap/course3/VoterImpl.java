package com.jap.course3;

public class VoterImpl {
    public static void main(String[] args) {
        String ageCriteria;

        Voter vo = new Voter();
        vo.setName("Rishi");
        vo.setAge(22);
        System.out.println(vo.getName());
        System.out.println(vo.getAge());

        ageCriteria = vo.getAgeCriteria();
        System.out.println(ageCriteria);
    }
}
