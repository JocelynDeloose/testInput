import { Component, Input } from '@angular/core';
import { skill } from '../models/skill.model';

@Component({
  selector: 'app-skill-component',
  templateUrl: './skill-component.component.html',
  styleUrls: ['./skill-component.component.scss']
})
export class SkillComponentComponent {



  @Input()
  skills!: skill;
}
