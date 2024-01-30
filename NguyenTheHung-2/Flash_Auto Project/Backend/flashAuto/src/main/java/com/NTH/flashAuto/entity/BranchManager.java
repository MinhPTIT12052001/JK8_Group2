package com.NTH.flashAuto.entity;

import jakarta.persistence.*;
import lombok.RequiredArgsConstructor;
import org.hibernate.annotations.Formula;

import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name = "branch_manager")
@Data
public class BranchManager {
    @EmbeddedId
    private BranchManagerId id;

    @ManyToOne(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "branch_id", insertable = false, updatable = false)
    private Branches branch;

    @ManyToOne(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "manager_id", insertable = false, updatable = false)
    private Users manager;

    public BranchManager() {
    }

    public BranchManager(BranchManagerId id) {
        this.id = id;
    }

}
