import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css']
})
export class CubeComponent implements OnInit {
  numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  constructor() { }

  ngOnInit(): void {
  }

  sort() {
    this.numArray.sort();
  }

  shuffle() {
    this.numArray = this.numArray.sort(() => Math.random() - 0.5);
  }

}
