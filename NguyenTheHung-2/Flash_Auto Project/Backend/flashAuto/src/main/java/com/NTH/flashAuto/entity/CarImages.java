package com.NTH.flashAuto.entity;

import jakarta.persistence.*;
import lombok.RequiredArgsConstructor;
import org.hibernate.annotations.Formula;

import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name = "car_model")
@Data
@NoArgsConstructor
//@RequiredArgsConstructor
public class CarImages {
    private static final long serialVersionUID = 1L;

    @Column(name = "id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "image_url")
    private String imageURL;

    @ManyToOne
    @JoinColumn(name = "car_id", nullable = false)
    private Car Car;
}
