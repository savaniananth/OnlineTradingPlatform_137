package com.example.demo.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Trade;
import com.example.demo.Repository.TradeRepo;

@Service
public class TradeService {
	
	@Autowired
	TradeRepo repo;
	
	public Trade addTrade(Trade c) {
		return repo.save(c);
	}
	
	public List<Trade> getTrade() {
		List<Trade> arr = new ArrayList<>();
		
		arr = (List<Trade>)repo.findAll();
		
		return arr;
	}
	
//	public void delete(String trade_name) {
//		repo.deleteById(trade_name);
//	}
	
	public Trade update(long S_No,Trade c) {
		return repo.saveAndFlush(c);
	}
}
