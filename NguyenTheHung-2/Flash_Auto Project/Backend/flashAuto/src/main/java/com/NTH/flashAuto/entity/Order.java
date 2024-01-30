package com.NTH.flashAuto.entity;

import jakarta.persistence.*;
import lombok.RequiredArgsConstructor;
import org.hibernate.annotations.Formula;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Table(name = "car")
@Data
@NoArgsConstructor
//@RequiredArgsConstructor
public class Order {
    private static final long serialVersionUID = 1L;

    @Column(name = "id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "order_date")
    @Temporal(TemporalType.DATE)
    private Date orderDate;

    @Column(name = "`status`")
    private String status;

    @Column(name = "total_money")
    private Float totalMoney;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private Users customer;

    @ManyToOne
    @JoinColumn(name = "car_id", nullable = false)
    private Car car;

    @ManyToOne
    @JoinColumn(name = "branches_id", nullable = false)
    private Branches branch;
}
