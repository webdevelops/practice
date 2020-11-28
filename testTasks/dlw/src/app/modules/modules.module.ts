import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { GreetingSectionComponent } from './greeting-section/greeting-section.component'
import { ClientSectionComponent } from './client-section/client-section.component';
import { SharedModule } from '../shared/shared.module';
import { TeamSkillSectionComponent } from './team-skill-section/team-skill-section.component';
import { TechnologySectionComponent } from './technology-section/technology-section.component';

@NgModule({
  declarations: [
    ClientSectionComponent,
    GreetingSectionComponent,
    TeamSkillSectionComponent,
    TechnologySectionComponent,
  ],
  imports: [
    SharedModule,
    CommonModule
  ],
  exports: [
    ClientSectionComponent,
    GreetingSectionComponent,
    TeamSkillSectionComponent,
    TechnologySectionComponent,
  ]
})
export class ModulesModule { }