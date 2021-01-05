package com.devmicaelyg.dsdelivery.services;

import com.devmicaelyg.dsdelivery.dto.OrderDTO;
import com.devmicaelyg.dsdelivery.dto.ProductDTO;
import com.devmicaelyg.dsdelivery.entities.Order;
import com.devmicaelyg.dsdelivery.entities.Product;
import com.devmicaelyg.dsdelivery.repositories.OrderRepository;
import com.devmicaelyg.dsdelivery.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Transactional(readOnly = true)
    public List<OrderDTO> findAll(){
        List<Order> list = orderRepository.findOrderWithProducts();
      return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
    }
}
