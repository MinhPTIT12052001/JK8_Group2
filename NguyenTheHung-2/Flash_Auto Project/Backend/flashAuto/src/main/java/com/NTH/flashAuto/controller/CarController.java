package com.NTH.flashAuto.controller;


import com.NTH.flashAuto.dto.CarDTO;
import com.NTH.flashAuto.entity.Car;
import com.NTH.flashAuto.service.ICarService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@RestController
@RequestMapping(value = "api/v1/car")
@CrossOrigin("*")
public class CarController {
    @Autowired
    private ICarService service;

    @Autowired
    private ModelMapper modelMapper;

    @GetMapping()
    public Page<CarDTO> getAllCars(Pageable pageable) {
        Page<Car> entityPages = service.getAllCars(pageable);

        // convert entities --> dtos
        List<CarDTO> dtos = modelMapper.map(
                entityPages.getContent(),
                new TypeToken<List<CarDTO>>() {}.getType());


        Page<CarDTO> dtoPages = new PageImpl<>(dtos, pageable, entityPages.getTotalElements());

        return dtoPages;
    }

    @GetMapping(value = "/{id}")
    public CarDTO getCarByID(@PathVariable(name = "id") int id) {
        Car entity = service.getCarByID(id);

        // convert entity to dto
        CarDTO dto = modelMapper.map(entity, CarDTO.class);

        dto.add(linkTo(methodOn(CarController.class).getCarByID(id)).withSelfRel());

        return dto;
    }
}
