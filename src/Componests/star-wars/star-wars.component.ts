import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { GetPersonagensService } from "../../app/get-personagens.service";
import { ClassPersonagem } from 'src/app/class-personagem';
@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.css']
})
export class StarWarsComponent implements OnInit{

  public personagens: ClassPersonagem[]=[]

  constructor(private _servico: GetPersonagensService){}

  ngOnInit(): void {
      this._servico.getPersonagens().subscribe(
        (res)=>{
          this.personagens = res;
        }
      )
  }

  public getPersonagensFromServices(){

  }
}
