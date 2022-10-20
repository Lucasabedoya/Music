import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pimage',
  templateUrl: './pimage.component.html',
  styleUrls: ['./pimage.component.scss']
})
export class PImageComponent implements OnInit {

  @Input() url: string | undefined;
  @Input() alt: string | undefined;
  @Input() label: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
