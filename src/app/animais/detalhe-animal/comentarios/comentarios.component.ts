import { switchMap, tap } from 'rxjs/operators';
import { ComentariosService } from './comentarios.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentarios } from './comentarios';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css'],
})
export class ComentariosComponent implements OnInit {
  @Input() id!: number;
  comentarios$!: Observable<Comentarios>;
  comentarioForm!: FormGroup;

  constructor(
    private comentarioService: ComentariosService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.comentarios$ = this.comentarioService.buscaComentarios(this.id);
    this.comentarioForm = this.formBuilder.group({
      comentario: ['', [Validators.required, Validators.maxLength(300)]],
    })
  }

  gravar() :void {
    const comentario = this.comentarioForm.get('comentario')?.value ?? '';
    this.comentarios$ = this.comentarioService.incluiComentario(this.id, comentario).pipe(
      switchMap(() => this.comentarioService.buscaComentarios(this.id)), tap(()=> {
        this.comentarioForm.reset();
        alert('Comentário Salvo!')
      })
    );
  }
}
