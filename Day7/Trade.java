package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Trade {
	@Id
	@GeneratedValue	(strategy=GenerationType.IDENTITY)
	private int id;
	private String trade_name;
	
	private int trade_price;
	
	private String crypto_Name;
	
	private int crypto_price;

	public Trade() {}

	public Trade(String trade_name,int trade_price,String crypto_Name,int crypto_price,int id) {
		super();
		this.trade_name=trade_name;
		this.trade_price=trade_price;
		this.crypto_Name=crypto_Name;
		this.id=id;
		this.crypto_price=crypto_price;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTrade_name() {
		return trade_name;
	}

	public void setTrade_name(String trade_name) {
		this.trade_name = trade_name;
	}

	public int getTrade_price() {
		return trade_price;
	}

	public void setTrade_price(int trade_price) {
		this.trade_price = trade_price;
	}

	public String getCrypto_Name() {
		return crypto_Name;
	}

	public void setCrypto_Name(String crypto_Name) {
		this.crypto_Name = crypto_Name;
	}

	public int getCrypto_price() {
		return crypto_price;
	}

	public void setCrypto_price(int crypto_price) {
		this.crypto_price = crypto_price;
	}
	
	
		
}
