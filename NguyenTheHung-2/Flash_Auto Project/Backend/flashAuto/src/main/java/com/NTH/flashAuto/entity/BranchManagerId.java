package com.NTH.flashAuto.entity;

import java.io.Serializable;
import jakarta.persistence.*;

@Embeddable
public class BranchManagerId implements Serializable {

    @Column(name = "branch_id")
    private Long branchId;

    @Column(name = "manager_id")
    private Long managerId;

    // Getters và setters

    // Constructors
    public BranchManagerId() {
    }

    public BranchManagerId(Long branchId, Long managerId) {
        this.branchId = branchId;
        this.managerId = managerId;
    }
}
