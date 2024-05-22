import { Component } from '@angular/core';

@Component({
  selector: 'app-duvida',
  templateUrl: './duvida.page.html',
  styleUrls: ['./duvida.page.scss'],
})


//************TESTE PARA ARMAZENAR DÚVIDAS, N FINALIZEI************

export class DuvidaPage {
  duvida: string = ''; // Inicialize com uma string vazia
  disciplina: string = ''; // Inicialize com uma string vazia

  constructor() { }

  cadastrarDuvida() {
    // Aqui você pode fazer o que quiser com os valores
    console.log('duvida:', this.duvida);
    console.log('disciplina:', this.disciplina);
    // Por exemplo, enviar para o servidor, armazenar localmente, etc.
  }
}
