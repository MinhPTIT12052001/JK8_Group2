package com.NTH.flashAuto.dto;

import com.NTH.flashAuto.entity.Users;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
public class UsersDTO {
    private int id;

    private String fullName;

    private String email;

    private String password;

    private String phoneNumber;

    private String address;

    private Date dateOfBirth;

    private Users.Role role;

}
