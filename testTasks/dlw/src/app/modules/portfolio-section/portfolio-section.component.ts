import { Component, OnInit } from '@angular/core';

import { Tab } from 'src/app/core/models/tab';
import * as data from '../../core/mock/portfolio-data';

@Component({
  selector: 'app-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.scss']
})
export class PortfolioSectionComponent implements OnInit {
  public activeTabIndex: number = 0;
  public tabs: Array<Tab>;

  constructor() {
    this.tabs = [
      {
        isActive: true,
        label: 'First',
        title: 'DashboardHUB (open source project)',
        list: data.links,
        description: data.description_labelFirst,
        description2: data.description2_labelFirst,
        icons: data.icons
      },
      {
        isActive: false,
        label: 'Second',
        title: 'The Best Social Network for Sports Fans.',
        list: data.features,
        description: data.description_labelFirst,
        description2: data.description2_labelFirst,
        icons: data.icons
      }
    ]
  }

  ngOnInit(): void {
  }

}