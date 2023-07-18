package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Trade;
import com.example.demo.Service.TradeService;

@CrossOrigin
@RestController
public class TradeController {
	
	@Autowired  
	private TradeService cServ;
	
	@GetMapping("/list")	
	public List<Trade> showTrades() {
		return cServ.getTrade();
	}
	
	@PostMapping("/add")
	public Trade addTrade(@RequestBody Trade c) {
		return cServ.addTrade(c);
	}
	 
//	@DeleteMapping("/delete/{S_No}")
//	public void delete(@PathVariable long S_NO) {
//		cServ.delete(S_NO);
//	}
	
	@PutMapping("/update/{S_NO}")
	public Trade update(@PathVariable long S_No,@RequestBody Trade c) {
		return cServ.update(S_No, c);
	}

}
