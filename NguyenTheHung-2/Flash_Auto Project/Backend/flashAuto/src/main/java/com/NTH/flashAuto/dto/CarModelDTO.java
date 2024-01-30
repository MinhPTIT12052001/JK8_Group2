package com.NTH.flashAuto.dto;

import com.NTH.flashAuto.entity.Car;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.hateoas.RepresentationModel;

import java.util.List;

@Data
@NoArgsConstructor
public class CarModelDTO extends RepresentationModel<CarModelDTO>{
    private int id;

    private String name;

    private List<CarDTO> car;

    @Data
    @NoArgsConstructor
    public static class CarDTO extends RepresentationModel<CarModelDTO> {
        @JsonProperty("carID")
        private int id;

        private String carCode;

        @JsonProperty("carName")
        private String name;

        private float price;

        private String skuCode;

    }
}
