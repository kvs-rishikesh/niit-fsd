package com.jap.course3;

public class Author {
    private String Name;
    public Author(String Name) {
        this.Name = Name;
    }

    public void setName(String name) {
        this.Name = name;
    }

    public String getName() {
        return Name;
    }

    @Override
    public String toString() {
        return "Author Name: "+Name;
    }
}
