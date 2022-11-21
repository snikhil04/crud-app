package com.student.app.service;

import com.student.app.entity.Student;
import com.student.app.repository.StudentRepository;
import com.student.app.request.StudentCreateRequest;
import com.student.app.utils.CommonUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    public String saveStudent(StudentCreateRequest request) {
        Student student = new Student();
        student.setId(CommonUtils.generateUUID());
        BeanUtils.copyProperties(request, student);
        studentRepository.save(student);
        return "Student Created Successfully";
    }

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Student getStudentById(String id) throws Exception {
        return studentRepository.findById(id).orElseThrow(() -> new Exception("Student Not Exists"));
    }

    public String updateStudent(StudentCreateRequest request, String id) throws Exception {
        Student student = studentRepository.findById(id).orElseThrow(() -> new Exception("Student Not Exists"));
        BeanUtils.copyProperties(request, student);
        studentRepository.save(student);
        return "Student Updated Successfully";
    }

    public String deleteStudent(String id) throws Exception {
        Student student = studentRepository.findById(id).orElseThrow(() -> new Exception("Student Not Exists"));
        studentRepository.delete(student);
        return "Student Deleted Successfully";
    }
}
