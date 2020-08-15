import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as $ from "jquery";
@Component({
  selector: 'app-metiers',
  templateUrl: './metiers.component.html',
  styleUrls: ['./metiers.component.css']
})
export class MetiersComponent implements OnInit {

  constructor(private router:Router) { 
  }

  ngOnInit(): void {
    //on a deux cas :1- soit le client accéede  à cet page par le lien /metier et dans ce cas on va le deriger vers la page d'accueil
    // dans l'autre cas (le client a choisi le domaine) on va stocker le domaine dans local storage et on va lui diriger vers cette page 
    // la fonction ngOninit() sera la premiere fonction qui s excuter et donc il va afficher ou desparaitre le block selon localStorage
    if(localStorage.getItem('selectDomain')!=null){
      if(localStorage.getItem('selectDomain')=="Biochimie"){
        console.log( $('blocChirurgie'))
        console.log( $('blocBiochimie'))
        $('#blocChirurgie').hide()
       $('#blocBiochimie').show()
      }
      else if(localStorage.getItem('selectDomain')=="Chirurgie"){
        console.log( $('#blocChirurgie'))
        console.log( $('#blocBiochimie'))
        $('#blocChirurgie').show()
        $('#blocBiochimie').hide()
      }
    }
    else{
      this.router.navigate(["/Home"])
    }
  }

}
