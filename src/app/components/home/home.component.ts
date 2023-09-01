import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    private readonly _httpClient: HttpClient
  ) {

  }
  ngOnInit(
  ): void {
    this._httpClient.get('https://api.imgflip.com/get_memes').subscribe((data) => {
      console.log('ahihi', data);
    });
  }
}
