package com.NTH.flashAuto.repository;

import java.util.List;

import com.NTH.flashAuto.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface ICarRepository extends JpaRepository<Car, Integer>, JpaSpecificationExecutor<Car>{
}
