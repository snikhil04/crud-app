package com.student.app.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
public class Student {

    @Id
    private String id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
}
