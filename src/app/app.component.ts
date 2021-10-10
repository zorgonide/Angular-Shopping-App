import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'udemy-app';
  loadedFeature = 'recipe';
  onNavigate(feature){
    this.loadedFeature = feature;
  }
}
