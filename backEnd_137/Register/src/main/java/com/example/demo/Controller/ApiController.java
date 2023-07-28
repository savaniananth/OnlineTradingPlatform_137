package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Models.Register;
import com.example.demo.Service.ApiService;

@RestController
@CrossOrigin("http://localhost:3000")
public class ApiController {
	
	@Autowired
	private ApiService serv;
	
	@PostMapping("/add")
	public String add(@RequestBody Register re)
	{
		return serv.addCustomer(re);
	}
	
	@GetMapping("/show")
	public List<Register> get()
	{
		return serv.getCustomer();
	}
	
	@PutMapping("/update")
	public String updte(@RequestBody Register re)
	{
		return serv.updateRegister(re);
	}
	
	@DeleteMapping("/delete/{id}")
	public String delete(@PathVariable int id)
	{
		serv.deleteById(id);
		return "Deleted Successfully";
	}

}
