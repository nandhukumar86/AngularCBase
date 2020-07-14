import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {

  constructor() { }

  fullName = new FormControl('')

  name = new FormControl('')
  age: any

  ngOnInit() {
    this.age = 33

   

  }

}
