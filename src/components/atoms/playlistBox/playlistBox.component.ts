import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'playlistBox',
  templateUrl: './playlistBox.component.html',
  styleUrls: ['./playlistBox.component.scss']
})
export class PlaylistBoxComponent implements OnInit {

  @Input() imgUrl: string | undefined;
  @Input() imgAlt: string | undefined;
  @Input() name: string | undefined;
  @Input() description: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
