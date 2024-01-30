package com.NTH.flashAuto.entity;

import jakarta.persistence.*;
import lombok.RequiredArgsConstructor;
import org.hibernate.annotations.Formula;

import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name = "branches")
@Data
@NoArgsConstructor
//@RequiredArgsConstructor
public class Branches {
    private static final long serialVersionUID = 1L;

    @Column(name = "id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "address", length = 100, nullable = false, unique = true)
    private String address;

    @Column(name = "staff_number")
    private Integer staffNumber;
}
