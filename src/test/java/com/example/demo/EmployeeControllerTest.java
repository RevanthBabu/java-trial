package com.example.demo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
public class EmployeeControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void testSaveAndGetAllEmployees() throws Exception {
        // Save an employee
        String employeeJson = "{" +
                "\"name\": \"John Doe\"," +
                "\"sid\": \"S123\"," +
                "\"email\": \"john.doe@example.com\"," +
                "\"companyName\": \"Acme Corp\"}";

        mockMvc.perform(post("/employees")
                .contentType(MediaType.APPLICATION_JSON)
                .content(employeeJson))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").exists())
                .andExpect(jsonPath("$.name").value("John Doe"));

        // Retrieve all employees and print to console
        String response = mockMvc.perform(get("/employees"))
                .andExpect(status().isOk())
                .andReturn().getResponse().getContentAsString();

        System.out.println("All Employees: " + response);
    }
}
