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

  todosPaises: Pais[] = [];

  constructor(private http: HttpClient) {
    this.getPaises();
    console.log(this.todosPaises)
  }

  getPaises() {
    this.http.get(this.url_paises).subscribe((lista: any) => {
      lista.forEach((lista) => {

        let pais = new Pais(lista.name.common,lista.continents[0],lista.coatOfArms.png);
        this.todosPaises.push(pais);
      });
    });
  }
}
