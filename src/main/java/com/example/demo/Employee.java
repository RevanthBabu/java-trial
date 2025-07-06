package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String sid;
    private String email;
    private String companyName;

    // Default constructor
    public Employee() {}

    // Parameterized constructor
    public Employee(String name, String sid, String email, String companyName) {
        this.name = name;
        this.sid = sid;
        this.email = email;
        this.companyName = companyName;
    }

    // Parameterized constructor with id
    public Employee(Long id, String name, String sid, String email, String companyName) {
        this.id = id;
        this.name = name;
        this.sid = sid;
        this.email = email;
        this.companyName = companyName;
    }

    // Getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getSid() { return sid; }
    public void setSid(String sid) { this.sid = sid; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getCompanyName() { return companyName; }
    public void setCompanyName(String companyName) { this.companyName = companyName; }
}
