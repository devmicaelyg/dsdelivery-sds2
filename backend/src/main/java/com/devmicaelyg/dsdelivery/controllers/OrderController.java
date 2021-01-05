package com.devmicaelyg.dsdelivery.controllers;

import com.devmicaelyg.dsdelivery.dto.OrderDTO;
import com.devmicaelyg.dsdelivery.dto.ProductDTO;
import com.devmicaelyg.dsdelivery.services.OrderService;
import com.devmicaelyg.dsdelivery.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping
    public ResponseEntity<List<OrderDTO>> findAll(){
        List<OrderDTO> list = orderService.findAll();
        return ResponseEntity.ok().body(list);
    }

    @PostMapping
    public ResponseEntity<OrderDTO> insert(@RequestBody OrderDTO orderDTO){
        orderDTO = orderService.insert(orderDTO);
        URI uri  = ServletUriComponentsBuilder.fromCurrentRequestUri().path("{id}")
                .buildAndExpand(orderDTO.getId()).toUri();
        return ResponseEntity.created(uri).body(orderDTO);
    }
}
