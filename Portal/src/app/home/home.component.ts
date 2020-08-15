import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  BiochimieDomaine(){
    this.router.navigate(["/Metiers"])
    // Une fois le domaine est selectionné on le stock sur une session 
    localStorage.setItem("selectDomain","Biochimie"); 

  }
  ChirurgieDomaine(){
   
     // Une fois le domaine est selectionné on le stock sur une session 
     localStorage.setItem("selectDomain","Chirurgie"); 
    this.router.navigate(["/Metiers"])
  }

}
