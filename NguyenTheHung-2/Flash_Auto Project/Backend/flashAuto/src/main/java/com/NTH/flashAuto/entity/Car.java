package com.NTH.flashAuto.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Formula;

import java.util.Date;

@Entity
@Table(name = "car")
@Data
@NoArgsConstructor
public class Car {
    private static final long serialVersionUID = 1L;

    @Column(name = "id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "car_code", length = 50, nullable = false)
    private String carCode;

    @Column(name = "name", length = 100, nullable = false)
    private String name;

    @Column(name = "price")
    private Long price;

    @Column(name = "sku_code", length = 20, nullable = false)
    private String skuCode;

    @ManyToOne
    @JoinColumn(name = "car_model_id", nullable = false)
    private CarModel carModel;

    @Column(name = "capacity")
    private Integer capacity;

    @Column(name = "acceleration")
    private Float acceleration;

    @Column(name = "distance_traveled")
    private Float distanceTraveled;

    @Column(name = "air_bag_number")
    private Integer airBagNumber;

    @Column(name = "warranty_period")
    private Float warrantyPeriod;

    @Column(name = "seating_number")
    private Integer seatingNumber;

    @Column(name = "date_added")
    @Temporal(TemporalType.DATE)
    private Date dateAdded;

    @Column(name = "quantity")
    private Integer quantity;

//    @ManyToOne
//    @JoinColumn(name = "branches_id", nullable = false)
//    private Branches branch;

    @Column(name = "branches_id")
    private Integer branchID;

//    @ManyToOne
//    @JoinColumn(name = "staff_id", nullable = false)
//    private Users staff;

    @Column(name = "staff_id")
    private Integer staffID;
}
