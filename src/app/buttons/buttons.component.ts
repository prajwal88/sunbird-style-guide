import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  pageTitle = 'Buttons';
  sections = [
    {
      expandCode: false,
      title: 'Basic Buttons',
      demoCode: `
      <button class="sb-btn sb-btn-outline-primary sb-btn-normal mr-10">Basic Button</button>
      <button class="sb-btn sb-btn-outline-secondary sb-btn-normal mr-10">Secondary</button>
      <button class="sb-btn sb-btn-outline-tertiary sb-btn-normal mr-10">Tertiary</button>
      <button class="sb-btn sb-btn-outline-info sb-btn-normal mr-10">Info</button>
      <button class="sb-btn sb-btn-outline-success sb-btn-normal mr-10">Success</button>
      <button class="sb-btn sb-btn-outline-warning sb-btn-normal mr-10">Warning</button>
      <button class="sb-btn sb-btn-outline-error sb-btn-normal mr-10">Error</button>
      `,
      copyCode: `
      <button class="sb-btn sb-btn-outline-primary sb-btn-normal">Basic Button</button>
      <button class="sb-btn sb-btn-outline-secondary sb-btn-normal">Secondary</button>
      <button class="sb-btn sb-btn-outline-tertiary sb-btn-normal">Tertiary</button>
      <button class="sb-btn sb-btn-outline-info sb-btn-normal">Info</button>
      <button class="sb-btn sb-btn-outline-success sb-btn-normal">Success</button>
      <button class="sb-btn sb-btn-outline-warning sb-btn-normal">Warning</button>
      <button class="sb-btn sb-btn-outline-error sb-btn-normal">Error</button>
      `
    },
    {
      expandCode: false,
      title: 'Button States',
      demoCode: `
      <button class="sb-btn sb-btn-disabled sb-btn-normal mr-10">Primary Disable</button>
      <button class="sb-btn sb-btn-outline-disabled sb-btn-normal">Basic Button Disable</button>
      `,
      copyCode: `
      <button class="sb-btn sb-btn-disabled sb-btn-normal">Primary Disable</button>
      <button class="sb-btn sb-btn-outline-disabled sb-btn-normal">Basic Button Disable</button>
      `
    },
    {
      expandCode: false,
      title: 'Colored Buttons',
      demoCode: `
      <button class="sb-btn sb-btn-primary sb-btn-normal mr-10">Primary Button</button>
      <button class="sb-btn sb-btn-secondary sb-btn-normal mr-10">Secondary</button>
      <button class="sb-btn sb-btn-tertiary sb-btn-normal mr-10">Tertiary</button>
      <button class="sb-btn sb-btn-warning sb-btn-normal mr-10">warning</button>
      <button class="sb-btn sb-btn-error sb-btn-normal mr-10">Error</button>
      <button class="sb-btn sb-btn-info sb-btn-normal mr-10">Info</button>
      `,
      copyCode: `
      <button class="sb-btn sb-btn-primary sb-btn-normal">Primary Button</button>
      <button class="sb-btn sb-btn-secondary sb-btn-normal">Secondary</button>
      <button class="sb-btn sb-btn-tertiary sb-btn-normal">Tertiary</button>
      <button class="sb-btn sb-btn-warning sb-btn-normal">warning</button>
      <button class="sb-btn sb-btn-error sb-btn-normal">Error</button>
      <button class="sb-btn sb-btn-info sb-btn-normal">Info</button>
      `
    },
    {
      expandCode: false,
      title: 'Button Sizes',
      demoCode: `
      <button class="sb-btn sb-btn-primary sb-btn-xs mr-10">mini</button>
      <button class="sb-btn sb-btn-primary sb-btn-normal mr-10">normal</button>
      <button class="sb-btn sb-btn-primary sb-btn-sm mr-10">small</button>
      <button class="sb-btn sb-btn-primary sb-btn-md mr-10">medium</button>
      <button class="sb-btn sb-btn-primary sb-btn-lg mr-10">large</button>
      `,
      copyCode: `
      <button class="sb-btn sb-btn-primary sb-btn-xs">mini</button>
      <button class="sb-btn sb-btn-primary sb-btn-normal">normal</button>
      <button class="sb-btn sb-btn-primary sb-btn-sm">small</button>
      <button class="sb-btn sb-btn-primary sb-btn-md">medium</button>
      <button class="sb-btn sb-btn-primary sb-btn-lg">large</button>
      `
    }
  ];

  ngOnInit() {
  }


}
