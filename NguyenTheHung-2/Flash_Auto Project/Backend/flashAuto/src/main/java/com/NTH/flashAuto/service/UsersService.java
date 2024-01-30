package com.NTH.flashAuto.service;

import com.NTH.flashAuto.entity.Users;
import com.NTH.flashAuto.repository.IUsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class UsersService implements IUsersService{
    @Autowired
    private IUsersRepository repository;

    @Override
    public Page<Users> getAllUsers(Pageable pageable) {
        return repository.findAll(pageable);
    }

    @Override
    public Users getUserByID(int id) {
        return repository.findById(id).get();
    }
}
