import { Component, OnInit } from '@angular/core';
import {PlayerService} from "../../game/services/player.service";

@Component({
  selector: 'app-iniciar-sessio-alcaraz',
  templateUrl: './iniciar-sessio-alcaraz.component.html',
  styleUrls: ['./iniciar-sessio-alcaraz.component.css']
})
export class IniciarSessioAlcarazComponent implements OnInit {
  usuari = '';
  isLoggedIn = false;

  constructor(private services: PlayerService) { }

  ngOnInit(): void {
  }
  onSubmit (){
    if (this.usuari != ''){
      this.isLoggedIn = true;
    }


  }

  protected readonly PlayerService = PlayerService;


}
