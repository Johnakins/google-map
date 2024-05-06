import { Component, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrl: './googlemap.component.css'
})

export class GooglemapComponent {
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;
  display?: google.maps.LatLngLiteral;
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      this.center = event.latLng.toJSON() as google.maps.LatLngLiteral;
    }
  }

  move(event: google.maps.MapMouseEvent) {
    this.display = event.latLng?.toJSON();
  }
  
  

  addMarker(event: google.maps.MapMouseEvent) {
    if(event.latLng != null)
    this.markerPositions.push(event.latLng.toJSON());
  }

  openInfoWindow(marker: MapMarker) {
    if(this.infoWindow != undefined)
    this.infoWindow.open(marker);
  }
}
