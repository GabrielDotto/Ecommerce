import { Component, OnInit  } from '@angular/core';
import { Usuario } from '../../Models/Usuario';
import {NgForm} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( ) { }

  login(f: NgForm){  
    console.log("teste");
  }

  ngOnInit() {
      console.log('atuh');
  }
 
}
