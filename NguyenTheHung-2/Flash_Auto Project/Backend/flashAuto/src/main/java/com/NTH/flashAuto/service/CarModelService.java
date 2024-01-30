package com.NTH.flashAuto.service;

import com.NTH.flashAuto.entity.Car;
import com.NTH.flashAuto.entity.CarModel;
import com.NTH.flashAuto.repository.ICarModelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class CarModelService implements ICarModelService{

    @Autowired
    private ICarModelRepository repository;

    @Override
    public Page<CarModel> getAllCarModels(Pageable pageable) {
        return repository.findAll(pageable);
    }

    @Override
    public CarModel getCarModelByID(int id) {
        return repository.findById(id).get();
    }
}
