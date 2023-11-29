import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  loginForm = new FormGroup({
    name:new FormControl('',[Validators.required]),
    author:new FormControl('',[Validators.required]),
    publication:new FormControl('',[Validators.required]),
    price:new FormControl('',[Validators.required]),
    genre:new FormControl('',[Validators.required]),
    date:new FormControl('',[Validators.required]),
    country:new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required, Validators.maxLength(15)]),
  })
  bookdetails(){
    console.log(this.loginForm.value)
    this.loginForm.reset()
  }

  get name(){
    return this.loginForm.get('name');
  }
  get author(){
    return this.loginForm.get('author');
  }
  get publication(){
    return this.loginForm.get('publication');
  }
  get price(){
    return this.loginForm.get('price');
  }
  get genre(){
    return this.loginForm.get('genre');
  }
  get date(){
    return this.loginForm.get('date');
  }
  get country(){
    return this.loginForm.get('country');
  }
  get description(){
    return this.loginForm.get('description');
  }
}
