import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  headerItems = [
    {
      logo: true,
      name: 'MyLogo'
    },
    {
      section: true,
      name: 'About us'
    },
    {
      section: true,
      name: 'Our cover'
    },
    {
      section: true,
      name: 'Contact us'
    },
    {
      section: true,
      name: 'Help us'
    },
    {
      button: true,
      name: 'Back to your policies'
    },
  ]

  simulateAction(title: any): void {
    console.log(`"${title.name}" has been pressed`);
  }
  
}
