import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  public cityName;
  public cityBackground;

  public background = [
    { city: "Kolkata", url: "../../assets/images/kolkata.jpg" },
    { city: "Delhi", url: "../../assets/images/delhi.jpg" },
    { city: "Agra", url: "../../assets/images/agra.jpg" },
    { city: "Pune", url: "../../assets/images/pune.jpg" }
  ];

  public dataArray = [
    { date: "24" , day: "Fri" },
    { date: "25" , day: "Sat" },
    { date: "26" , day: "Sun" },
    { date: "27" , day: "Mon" },
    { date: "28" , day: "Tue" }
  ];

  public agendaList = [
    { start: "09:00 AM" , duration: "1 hour" , subject: "Cloud Computing", location: "3/k/1 Meeting Room", statue: "complete" , additional_details: [ { speaker: "Dhrubaneel Das"}]},
    { start: "09:00 AM" , duration: "1 hour" , subject: "Cloud Computing", location: "3/k/1 Meeting Room", statue: "cancel" , additional_details: [ { speaker: "Dhrubaneel Das"}]},
    { start: "09:00 AM" , duration: "1 hour" , subject: "Cloud Computing", location: "3/k/1 Meeting Room", statue: "none" , additional_details: [ { speaker: "Dhrubaneel Das"}]},
    { start: "09:00 AM" , duration: "1 hour" , subject: "Cloud Computing", location: "3/k/1 Meeting Room", statue: "complete" , additional_details: [ { speaker: "Dhrubaneel Das"}]},
    { start: "09:00 AM" , duration: "1 hour" , subject: "Cloud Computing", location: "3/k/1 Meeting Room", statue: "none" , additional_details: [ { speaker: "Dhrubaneel Das"}]},
  ];

  constructor(private route:ActivatedRoute , private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      let id = params['id'];
      this.cityName = id;
    })

    this.background.forEach((value, key)=>{
      if(value.city == this.cityName){
        this.cityBackground = value.url;
      }
    });

  }
  
}
