package com.learn.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/pk/")
public class GetInfoController {
    @RequestMapping("getinfo/")
    public String getinfo() {
        return "smile";
    }
}
