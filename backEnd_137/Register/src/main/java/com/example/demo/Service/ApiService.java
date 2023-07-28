package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.Models.Register;
import com.example.demo.Repository.ApiRepo;

@Service
public class ApiService {
	
	
//	@Autowired
//	PasswordEncoder passwordEncoder;
//	
	@Autowired
	private ApiRepo repo;
	
	public Register saveDetails(Register re) {
		
//		String encoded = passwordEncoder.encode(re.getPassword());
		
//		Register reg = new Register();
//		
//		reg.setUsername(re.getUsername());
//		reg.setPassword(encoded);
//		reg.setEmailId(re.getEmailId());
		
		return repo.save(re);
	}
	
	public String addCustomer(Register re) 
	{
		repo.save(re);
		return "Added";
	}
	public List<Register> getCustomer()
	{
		return (List<Register>) repo.findAll();
	}
	
	public String updateRegister(Register re)
	{
		repo.save(re);
		return "Update";
	}
	
	public void deleteById(int id)
	{
		repo.deleteById(id);
	}
	

}
