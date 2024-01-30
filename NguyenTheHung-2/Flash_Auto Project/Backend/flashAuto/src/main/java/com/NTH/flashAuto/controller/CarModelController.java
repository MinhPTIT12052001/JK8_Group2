package com.NTH.flashAuto.controller;


import com.NTH.flashAuto.dto.CarDTO;
import com.NTH.flashAuto.dto.CarModelDTO;
import com.NTH.flashAuto.entity.CarModel;
import com.NTH.flashAuto.service.ICarModelService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;

@RestController
@RequestMapping(value = "api/v1/car_model")
@CrossOrigin("*")
public class CarModelController {
    @Autowired
    private ICarModelService service;

    @Autowired
    private ModelMapper modelMapper;

    @GetMapping()
    public Page<CarModelDTO> getAllCarModels(Pageable pageable) {
        Page<CarModel> entityPages = service.getAllCarModels(pageable);

        // convert entities --> dtos
        List<CarModelDTO> dtos = modelMapper.map(
                entityPages.getContent(),
                new TypeToken<List<CarModelDTO>>() {}.getType());

        // add HATEOAS
        for (CarModelDTO dto : dtos) {
            for (CarModelDTO.CarDTO carDTO : dto.getCar()) {
                carDTO.add(linkTo(methodOn(CarController.class).getCarByID(carDTO.getId())).withSelfRel());
            }
            dto.add(linkTo(methodOn(CarModelController.class).getCarModelByID(dto.getId())).withSelfRel());
        }

        Page<CarModelDTO> dtoPages = new PageImpl<>(dtos, pageable, entityPages.getTotalElements());

        return dtoPages;
    }

    @GetMapping(value = "/{id}")
    public CarModelDTO getCarModelByID(@PathVariable(name = "id") int id) {
        CarModel entity = service.getCarModelByID(id);

        // convert entity to dto
        CarModelDTO dto = modelMapper.map(entity, CarModelDTO.class);

        dto.add(linkTo(methodOn(CarModelController.class).getCarModelByID(id)).withSelfRel());

        return dto;
    }
}
