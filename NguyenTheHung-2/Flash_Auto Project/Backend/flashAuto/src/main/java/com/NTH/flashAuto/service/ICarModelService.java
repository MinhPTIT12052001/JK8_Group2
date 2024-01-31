package com.NTH.flashAuto.service;

import com.NTH.flashAuto.entity.CarModel;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ICarModelService {
    public Page<CarModel> getAllCarModels(Pageable pageable);

    public CarModel getCarModelByID(int id);
}
