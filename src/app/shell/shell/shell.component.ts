import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngt-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  showFiller = false;
  constructor() { }

  ngOnInit(): void {
  }

}
