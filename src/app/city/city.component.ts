import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    
  }

  public agendaPage(cityName):any{
    this.router.navigate([`/agenda`, cityName]);
  }
}
