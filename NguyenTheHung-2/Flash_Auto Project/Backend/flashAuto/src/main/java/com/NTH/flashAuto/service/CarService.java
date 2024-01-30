package com.NTH.flashAuto.service;

import com.NTH.flashAuto.entity.Car;
import com.NTH.flashAuto.repository.ICarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarService implements ICarService{

    @Autowired
    private ICarRepository repository;

    public Page<Car> getAllCars(Pageable pageable) {
        return repository.findAll(pageable);
    }

    @Override
    public Car getCarByID(int id) {
        return repository.findById(id).get();
    }
}
