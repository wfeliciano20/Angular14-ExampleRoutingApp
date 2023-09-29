import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // at component creation
    const id = Number(this.route.snapshot.params['id']);

    this.server = this.serversService.getServer(id);

    // dynamically get the id param
    this.route.params.subscribe(
      (params: Params) =>
        (this.server = this.serversService.getServer(Number(params['id'])))
    );
  }
}
