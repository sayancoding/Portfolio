import { Component, OnInit } from '@angular/core';
import { IExperience, ISkill } from '../../core/model/IGeneralData';
import { DataService } from '../../service/data-service';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience implements OnInit{

  skills:ISkill[] = []
  experience?:IExperience;

  constructor(private dataService:DataService){}

  ngOnInit(): void {
    this.dataService.fetchGeneralData().subscribe(data => {
      this.skills = data.skills
      this.experience = data.experience
      console.log("Skill is fetched")
    })
  }

}
