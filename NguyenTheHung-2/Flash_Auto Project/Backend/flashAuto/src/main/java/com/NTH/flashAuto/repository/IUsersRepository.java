package com.NTH.flashAuto.repository;

import com.NTH.flashAuto.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
public interface IUsersRepository extends JpaRepository<Users, Integer>, JpaSpecificationExecutor<Users>{
}
