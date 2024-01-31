package com.inn.cafe.rest;

import com.inn.cafe.wrapper.ProductWrapper;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

@RequestMapping(path = "/product")
public interface ProductRest {

    @PostMapping(path = "/add", consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<String> addNewProduct(@RequestParam Map<String,String> requestMap,
                                                @RequestParam("imageFile") MultipartFile[] files);
    @GetMapping(path = "/get")
    public ResponseEntity<List<ProductWrapper>> getAllProduct();
<<<<<<< HEAD
    @PostMapping(path = "/update", consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<String> updateProduct(@RequestParam Map<String,String> requestMap,
                                                @RequestParam("imageFile") MultipartFile[] files);
=======
    @PostMapping(path = "/update")
    public ResponseEntity<String> updateProduct(@RequestBody(required = true) Map<String,String> requestMap,
                                                @RequestPart("files") MultipartFile[] files);
>>>>>>> 711f66f92ea7358148a8fc62c2dcb16dc60b2e5d
    @PostMapping(path = "/delete/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable Integer id);
    @PostMapping(path = "/updateStatus")
    public ResponseEntity<String> updateStatus(@RequestBody Map<String,String> requestMap);
    @GetMapping(path = "/getByCategory/{id}")
    public ResponseEntity<List<ProductWrapper>> getByCategory(@PathVariable Integer id);
    @GetMapping(path = "/getById/{id}")
    public ResponseEntity<ProductWrapper> getProductById(@PathVariable Integer id);
}
