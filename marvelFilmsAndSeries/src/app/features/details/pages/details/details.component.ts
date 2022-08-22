import { Component, OnInit } from '@angular/core';
import { filmsAndSeriesComplete } from 'src/app/shared/types/filmsAndSeries-types';

@Component({
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  marvel: filmsAndSeriesComplete = {} as filmsAndSeriesComplete;

  constructor() { }

  ngOnInit(): void {
  }

}
