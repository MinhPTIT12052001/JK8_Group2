package com.NTH.flashAuto.entity;

import jakarta.persistence.*;
import lombok.RequiredArgsConstructor;
import org.hibernate.annotations.Formula;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Table(name = "tokens")
@Data
public class Tokens {
    private static final long serialVersionUID = 1L;

    @Column(name = "id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "token", nullable = false, length = 36, unique = true)
    private String token;

    @OneToOne(targetEntity = Users.class, fetch = FetchType.EAGER)
    @JoinColumn(nullable = false, name = "user_id")
    private Users user;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "`expiration_date`", nullable = false)
    private Date expirationDate;

    public Tokens() {
    }

    public Tokens(String token, Users user) {
        this.token = token;
        this.user = user;

        // 1h
        expirationDate = new Date(System.currentTimeMillis() + 360000);
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

    public Date getExpirationDate() {
        return expirationDate;
    }

    public void serExpirationDate(Date expirationDate) {
        this.expirationDate = expirationDate;
    }
}
