import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  textoP1: string = 'primeiro paragrafo'
  mostarP1: boolean = true
  itens: number[] = [2, 4, 6, 8, 10]

  constructor() { }

  ngOnInit(): void {
  }

}
