import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  footerItems = [
    {
      name: 'Legal'
    },
    {
      name: 'Privacy Policy'
    },
    {
      name: 'Cookie Policy'
    },
    {
      name: 'Accesibility'
    },
    {
      name: 'Glossary of terms'
    },
    {
      name: 'Sitemap'
    },
  ]

  simulateAction(title: any): void {
    console.log(`"${title.name}" has been pressed`);
  }


}
