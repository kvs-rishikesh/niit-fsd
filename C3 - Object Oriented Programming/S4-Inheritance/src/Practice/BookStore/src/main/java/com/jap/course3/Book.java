package com.jap.course3;

public class Book {
    private String ISBN;
    private String BookTitle;
    private String BookDescription;
    private double price;
    private Author Author;
    public Book() {
        ISBN = null;
        BookTitle = null;
        BookDescription = null;
        price = 0.0;
        Author = null;

    }
    public Book(String ISBN,String BookTitle,String BookDescription,double price,Author Author) {
        this.ISBN = ISBN;
        this.BookTitle = BookTitle;
        this.BookDescription = BookDescription;
        this.price = price;
        this.Author = Author;
    }

    public void setISBN(String ISBN) {
        this.ISBN = ISBN;
    }

    public String getISBN() {
        return ISBN;
    }

    public void setBookTitle(String bookTitle) {
        this.BookTitle = BookTitle;
    }

    public String getBookTitle() {
        return BookTitle;
    }

    public void setBookDescription(String bookDescription) {
        this.BookDescription = bookDescription;
    }

    public String getBookDescription() {
        return BookDescription;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public double getPrice() {
        return price;
    }

    public void setAuthor(com.jap.course3.Author author) {
        this.Author = author;
    }

    public com.jap.course3.Author getAuthor() {
        return Author;
    }
    public void DisplayDetails() {
        System.out.println(Author.toString());
        System.out.println("ISBN: "+ISBN);
        System.out.println("Book Title: "+BookTitle);
        System.out.println("Description: "+BookDescription);
        System.out.println("Price: $"+price);

    }
}
