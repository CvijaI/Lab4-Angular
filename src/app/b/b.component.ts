import { Component } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent {
  food:string = 'Marble cake';
  portion:number = 4;
}
