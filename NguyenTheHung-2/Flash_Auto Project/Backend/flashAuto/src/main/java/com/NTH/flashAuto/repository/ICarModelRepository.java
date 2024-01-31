package com.NTH.flashAuto.repository;

import com.NTH.flashAuto.entity.CarModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface ICarModelRepository extends JpaRepository<CarModel, Integer>, JpaSpecificationExecutor<CarModel> {
}
