import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { DataService } from '../../service/data-service';
import { IExperience, IProject, ISkill } from '../../core/model/IGeneralData';
import { JsonPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  skills:ISkill[] = []
  experience?:IExperience;
  projects:IProject[] = []
  about?:String[][] = [];

  constructor(private dataService:DataService){}

  ngOnInit(): void {
    this.dataService.fetchGeneralData().subscribe(data => {
      this.skills = data.skills
      this.experience = data.experience
      this.projects = data.projects
      this.about = data.about
      console.log(this.about)
      console.log("Info is fetched")
    })
    
  }
   

}
