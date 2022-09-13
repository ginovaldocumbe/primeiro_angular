import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  url_paises: string = 'https://restcountries.com/v3.1/all';
  todosPaises = [];

  constructor(private http: HttpClient) {
    this.getPaises();
    // alert(this.todosPaises[0].NomePais);
    // inserirPaises(paises: any) {
    //   for (let v = 0; v < todosPaises.lengt; v++) {}
  }

  getPaises() {
    this.http
      .get(this.url_paises)
      .pipe(
        map((lista) => {
          const lst = [];
          for (const key in lista) {
            if (lista.hasOwnProperty(key)) {
              lst.push({ ...lista[key], id: key });
            }
          }
          return lst;
        })
      )
      .subscribe((lista: any) => {
        lista.forEach((lista) => {
          // console.log(lista.name.common);
          // this.todosPaises.push([
          //   {
          //     'NomePais': lista.name.common,
          //     'Continente': lista.continents,
          //     'Bandeira': lista.coatOfArms.png,
          //   },
          // ]);
          // console.log(this.todosPaises[0].name.common);
          // +' '+lista.continents+' '+lista.coatOfArms.png
        });
      });
  }
}
