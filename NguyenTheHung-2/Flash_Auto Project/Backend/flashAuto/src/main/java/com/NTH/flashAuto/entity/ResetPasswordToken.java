package com.NTH.flashAuto.entity;

import java.io.Serializable;
import java.util.Date;

import jakarta.persistence.*;
import lombok.RequiredArgsConstructor;
import org.hibernate.annotations.Formula;

import lombok.Data;

@Entity
@Table(name = "Reset_Password_Token")
public class ResetPasswordToken {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    private int id;

    @Column(name = "token", nullable = false, length = 36, unique = true)
    private String token;

    @OneToOne(targetEntity = Users.class, fetch = FetchType.EAGER)
    @JoinColumn(nullable = false, name = "user_id")
    private Users user;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "expiryDate", nullable = false)
    private Date expiryDate;

    public ResetPasswordToken() {
    }

    public ResetPasswordToken(String token, Users user) {
        this.token = token;
        this.user = user;

        // 1h
        expiryDate = new Date(System.currentTimeMillis() + 360000);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }

    public Date getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(Date expiryDate) {
        this.expiryDate = expiryDate;
    }
}