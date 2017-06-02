import { Component } from '@angular/core';
import { SebmGoogleMap } from 'angular2-google-maps/core';
/*import {SebmGooglePolyline, SebmGooglePolylinePoint } from
'angular2-google-maps/core';*/
import { Http, Response } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})


export class AppComponent {
   constructor(public http: Http)
  {

  }
 //title = 'app works!';
  title: string = 'My first angular2-google-maps project';
  //lat: number = 51.678418;
  //lng: number = 7.809007;

origin = { longitude: 4.333, lattitude: -1.2222 };  // its a example aleatory position
destination = { longitude: 22.311, lattitude: -0.123 };  // its a example aleatory position
  origen;
  destino;
Lugares=[
    {
    lat:"",
    lng: ""
    },
 {
    lat:"",
    lng:""
  }
];

mapClicked($event: any) {
  console.log($event);
  if(this.Lugares[0].lat === "")
  {
   this.Lugares[0].lat = $event.coords.lat;
   this.Lugares[0].lng = $event.coords.lng;

   this.origin.lattitude=$event.coords.lat;
   this.origin.longitude=$event.coords.lng;
  }
  else
  {
   this.Lugares[1].lat = $event.coords.lat;
   this.Lugares[1].lng = $event.coords.lng;

  this.destination.lattitude=$event.coords.lat;
   this.destination.longitude=$event.coords.lng;
  }
  }

  calcular()
  {
    this.origen = this.Lugares[0].lat+","+this.Lugares[0].lng;
    this.destino = this.Lugares[1].lat+","+this.Lugares[1].lng;
   //ar url="https://maps.googleapis.com/maps/api/directions/json?origin="+origen+"&destination="+destino;
  /* this.http.get(url)
    .then( this.extractData )
    .catch( this.handleError );*/

  }
}
