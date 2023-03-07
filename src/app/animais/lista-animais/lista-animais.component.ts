import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Animais } from './../animais';
import { Component, OnInit } from '@angular/core';
import { AnimaisService } from '../animais.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css'],
})
export class ListaAnimaisComponent implements OnInit {
  animais!: Animais;
  // animais$!: Observable<Animais>;

  constructor(
    // private usuarioService: UsuarioService,
    // private animaisService: AnimaisService
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    /*     this.usuarioService.retornaUsuario().subscribe((usuario) => {
      const userName = usuario.name ?? '';
      this.animaisService.listaDoUsuario(userName).subscribe((animais) => {
        this.animais = animais;
      })
    }) */
    /*this.animais$ = this.usuarioService.retornaUsuario().pipe(
      switchMap((usuario) => {
        const userName = usuario.name ?? '';
        return this.animaisService.listaDoUsuario(userName);
      })
    );*/
    this.activatedRoute.params.subscribe(param => {
      this.animais  =this.activatedRoute.snapshot.data['animais'];
    });
  }
}
