import { Component, OnInit } from '@angular/core';
import { FlaskService } from 'src/services/flask.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[FlaskService]
})
export class AppComponent implements OnInit{
  title = 'frontia';
  public texto:string;
  constructor(
    private _flaskService:FlaskService
  ){
    this.texto='';
  }
  ngOnInit(): void {
    this._flaskService.getFlask().subscribe(
      response=>{
        console.log(response);
        this.texto=response.ciudad+" "+response.edad+" "+response.nombre;
      }
      ,error=>{
        console.log(<any>error);
      }
    );
  }
}
