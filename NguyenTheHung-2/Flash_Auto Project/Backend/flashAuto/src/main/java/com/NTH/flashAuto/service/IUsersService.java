package com.NTH.flashAuto.service;

import com.NTH.flashAuto.entity.Users;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IUsersService {
    public Page<Users> getAllUsers(Pageable pageable);

    public Users getUserByID(int id);
}
