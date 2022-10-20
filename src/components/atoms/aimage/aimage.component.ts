import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aimage',
  templateUrl: './aimage.component.html',
  styleUrls: ['./aimage.component.scss']
})
export class AImageComponent implements OnInit {
  
  @Input() url: string | undefined;
  @Input() alt: string | undefined;
  @Input() label: string | undefined;
  @Input() href: string | undefined;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
