package com.student.app.request;

import lombok.Data;

@Data
public class StudentCreateRequest {

    private String firstName;
    private String lastName;
    private String email;
    private String password;
}
