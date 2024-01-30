package com.NTH.flashAuto.controller;


import com.NTH.flashAuto.entity.Users;
import com.NTH.flashAuto.service.IUsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/v1/users")
@CrossOrigin("*")
public class UsersController {
    @Autowired
    private IUsersService service;

    @GetMapping()
    public Page<Users> getAllUsers(Pageable pageable) {
        Page<Users> entityPages = service.getAllUsers(pageable);
        Page<Users> dtoPages = new PageImpl<>(entityPages.getContent(), pageable, entityPages.getTotalElements());

        return dtoPages;
    }

    @GetMapping(value = "/{id}")
    public Users getUserByID(@PathVariable(name = "id") int id) {
        return service.getUserByID(id);
    }
}
