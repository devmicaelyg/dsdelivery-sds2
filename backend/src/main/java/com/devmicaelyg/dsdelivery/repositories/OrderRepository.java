package com.devmicaelyg.dsdelivery.repositories;

import com.devmicaelyg.dsdelivery.entities.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
