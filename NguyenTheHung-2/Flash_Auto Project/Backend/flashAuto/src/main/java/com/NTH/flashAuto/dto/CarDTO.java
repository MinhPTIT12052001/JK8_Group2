package com.NTH.flashAuto.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.hateoas.RepresentationModel;

@Data
@NoArgsConstructor
public class CarDTO extends RepresentationModel<CarModelDTO> {
    private int id;

    private String carCode;

    private String name;

    private float price;

    private String skuCode;

    private int carModelID;

    private int capacity;

    private Float acceleration;

    private Float distanceTraveled;

    private Integer airBagNumber;

    private Float warrantyPeriod;

    private Integer seatingNumber;
}
