package com.example.demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class EmployeeDataLoader implements CommandLineRunner {
    private final EmployeeRepository employeeRepository;

    public EmployeeDataLoader(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public void run(String... args) {
        if (employeeRepository.count() == 0) {
            employeeRepository.save(new Employee(null, "Alice Smith", "S101", "alice.smith@acme.com", "Acme Corp"));
            employeeRepository.save(new Employee(null, "Bob Johnson", "S102", "bob.johnson@acme.com", "Acme Corp"));
            employeeRepository.save(new Employee(null, "Carol Lee", "S103", "carol.lee@acme.com", "Acme Corp"));
            employeeRepository.save(new Employee(null, "David Brown", "S104", "david.brown@acme.com", "Acme Corp"));
            employeeRepository.save(new Employee(null, "Eva Green", "S105", "eva.green@acme.com", "Acme Corp"));
        }
    }
}
