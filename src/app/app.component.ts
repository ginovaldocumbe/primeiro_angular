import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Pais } from 'src/app/Pais';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  teste = 'Esse e um teste de partilhar';
  url_paises: string = 'https://restcountries.com/v3.1/all';
  teste2 = {
    nome: 'Dede',
    idade: 20,
  };

  todosPaises: Pais[] = [];

  constructor(private http: HttpClient) {
    this.getPaises();
    console.log(this.todosPaises)
  }

  getPaises() {
    this.http.get(this.url_paises).subscribe((lista: any) => {
      lista.forEach((lista) => {
  
        // const a2: Pais = {
        //   nome: lista.name.common,
        //   continente: lista.continents[0],
        //   icone: lista.coatOfArms.png,
        // };
        let pais = new Pais(lista.name.common,lista.continents[0],lista.coatOfArms.png);
        // console.log(this.pais.nome)
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

        this.todosPaises.push(pais);
      });
    });
  }
}
