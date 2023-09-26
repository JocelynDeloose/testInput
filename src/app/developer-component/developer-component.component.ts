import { Component, OnInit } from '@angular/core';
import { Developer } from '../models/developer.model';
import { skill } from '../models/skill.model';


@Component({
  selector: 'app-developer-component',
  templateUrl: './developer-component.component.html',
  styleUrls: ['./developer-component.component.scss']
})

export class DeveloperComponentComponent implements OnInit {

  developer!: Developer;

  constructor(
    
  ){}
  skills = [new skill("aa","aaa","aaaa"), new skill("bb","bbb","bbbb")];

  ngOnInit(): void {
     this.developer = new Developer("aa", "bb", 4, "cc", "dd", this.skills);
  }

  
 

  

 
}
