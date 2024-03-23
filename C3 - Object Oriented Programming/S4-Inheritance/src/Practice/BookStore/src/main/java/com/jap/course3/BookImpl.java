package com.jap.course3;

public class BookImpl {
    public static void main(String[] args) {
        Author Author = new Author("Rishi");
        Book Book = new Book("512-12345678","Spirit of JAVA","Detailed Book of JAVA Fundamentals",677.0,Author);
        Book.DisplayDetails();
    }
}