package com.BookStorePTD.BookStorePTD.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "order_details")
@Data
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OrderDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name="order_id")
    private Order order;

    @ManyToOne
    @JoinColumn(name="product_id")
    private Product product;

    private Float price;

    @Column(name= "number_of_products",nullable = false)
    private int numberOfProduct;

    @Column(name="total_money", nullable = false)
    private Float totalMoney;

}
