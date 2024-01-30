package com.NTH.flashAuto.service;

import com.NTH.flashAuto.dto.CarDTO;
import com.NTH.flashAuto.entity.Car;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ICarService {
    public Page<Car> getAllCars(Pageable pageable);

    public Car getCarByID(int id);

}
