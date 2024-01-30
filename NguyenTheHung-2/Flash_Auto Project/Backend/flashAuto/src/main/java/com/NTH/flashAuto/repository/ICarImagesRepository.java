package com.NTH.flashAuto.repository;

import com.NTH.flashAuto.entity.CarImages;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface ICarImagesRepository extends JpaRepository<CarImages, Integer>, JpaSpecificationExecutor<CarImages> {
}
