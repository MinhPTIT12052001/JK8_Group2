package com.BookStorePTD.BookStorePTD.dtos;

import com.BookStorePTD.BookStorePTD.models.OrderStatus;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
public class OrderDto {

    @JsonProperty("user_id")
    @Min(value = 1,message = "User's id must be >0")
    private Long userId;
    private String email;

    @JsonProperty("phone_number")
    @Size(min = 5,message = "Phone number must be at least 5 character !")
    @NotBlank(message = "Phone number is required !")
    private String phoneNumber;
    private String address;
    private String note;

    @JsonProperty("total_money")
    @Min(value = 0, message = "Total money must be > 0")
    private Float totalMoney;

    @JsonProperty("shipping_method")
    private String shippingMethod;

    @JsonProperty("shipping_address")
    private String shippingAddress;

    @JsonProperty("payment_method")
    private String paymentMethod;

    @JsonProperty("status")
    private OrderStatus status;

    private boolean active;
}
