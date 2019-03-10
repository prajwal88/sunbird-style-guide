import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html'
})
export class ModalsComponent implements OnInit {

  constructor() { }

  pageTitle = 'Modals';
  sections = [
    {
      expandCode: false,
      title: 'Large Modal',
      demoCode: ``,
      copyCode: `
      `
    },
    {
      expandCode: false,
      title: 'Middle Modal',
      demoCode: `
      `,
      copyCode: `
      `
    },
    {
      expandCode: false,
      title: 'Colored Buttons',
      demoCode: `
      `,
      copyCode: `
      `
    },
    {
      expandCode: false,
      title: 'Button Sizes',
      demoCode: `
      `,
      copyCode: `
      `
    }
  ];

  ngOnInit() {
  }

}
