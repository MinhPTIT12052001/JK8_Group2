package com.NTH.flashAuto.repository;

import com.NTH.flashAuto.entity.Branches;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface IBranchesRepository extends JpaRepository<Branches, Integer>, JpaSpecificationExecutor<Branches>{
}
