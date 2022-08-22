import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-go-back',
  templateUrl: './button-go-back.component.html',
  styleUrls: ['./button-go-back.component.scss']
})
export class ButtonGoBackComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goBack(){
    this.router.navigateByUrl('/');
  }
}
