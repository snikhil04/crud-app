package com.student.app.controller;

import com.student.app.entity.Student;
import com.student.app.request.StudentCreateRequest;
import com.student.app.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/student")
@CrossOrigin
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping
    public String createStudent(@RequestBody StudentCreateRequest request) {
        return studentService.saveStudent(request);
    }

    @GetMapping
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }

    @GetMapping("/{id}")
    public Student getStudentById(@PathVariable String id) throws Exception {
        return studentService.getStudentById(id);
    }

    @PutMapping("/{id}")
    public String updateStudent(@PathVariable String id, @RequestBody StudentCreateRequest request) throws Exception {
        return studentService.updateStudent(request, id);
    }

    @DeleteMapping("/{id}")
    public String deleteStudent(@PathVariable String id) throws Exception {
        return studentService.deleteStudent(id);
    }
}