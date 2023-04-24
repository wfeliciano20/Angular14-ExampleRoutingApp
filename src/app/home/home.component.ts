import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // To navigate progamatically you need to inject
  // the Router
  constructor(private router: Router) {}

  ngOnInit() {}

  onLoadServers() {
    // use the navigateByURl to programatically change the url
    this.router.navigateByUrl('/servers');
  }
}
