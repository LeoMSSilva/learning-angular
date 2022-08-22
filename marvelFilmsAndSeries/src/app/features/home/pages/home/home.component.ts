import { Component, OnInit } from '@angular/core';
import { filmsAndSeriesPartial } from 'src/app/shared/types/filmsAndSeries-types';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title: string = 'Linha do tempo de Filmes e Series';
  marvels: filmsAndSeriesPartial[] = [] as filmsAndSeriesPartial[];

  constructor() { }

  ngOnInit(): void {
  }

}
