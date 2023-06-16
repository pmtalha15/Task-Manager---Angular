import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/project';
import { ProjectsService } from 'src/app/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] | any;
  newProject: Project = new Project();
  editProject: Project = new Project();
  editIndex: number = 0;
  deleteProject : Project = new Project();
  deleteIndex : any ;
  searchBy:string = "ProjectName";
  searchText:string = "";

  constructor(private projectService:ProjectsService){

  }

  ngOnInit() {
    this.projectService.getAllProjects().subscribe(
      (response:Project[])=>{
        this.projects = response;
      }
    )
  }

  onSaveClick(){
    this.projectService.insertProjects(this.newProject).subscribe(
      (response)=>{
        //Add project to the grid
        var p: Project = new Project();
        p.projectID = response.projectID;
        p.projectName = response.projectName;
        p.dateOfStart = response.dateOfStart;
        p.teamSize = response.teamSize;
        this.projects.push(p);

        //Clear the Project dialog - TextBoxes
        this.newProject.projectID = null;
        this.newProject.projectName = null;
        this.newProject.dateOfStart = null;
        this.newProject.teamSize = null;

      }
    )
  }

  onEditClick(event:any, index:number){
    this.editProject.projectID = this.projects[index].projectID;
    this.editProject.projectName = this.projects[index].projectName;
    this.editProject.dateOfStart = this.projects[index].dateOfStart;
    this.editProject.teamSize = this.projects[index].teamSize;
    this.editIndex = index;
  }

  onUpdateClick(){
    this.projectService.updateProject(this.editProject).subscribe(
      (response:Project)=>{
        var p : Project = new Project();
        p.projectID = response.projectID;
        p.projectName = response.projectName;
        p.dateOfStart = response.dateOfStart;
        p.teamSize = response.teamSize;

        this.projects[this.editIndex] = p;

        this.editProject.projectID = null;
        this.editProject.projectName = null;
        this.editProject.dateOfStart = null;
        this.editProject.teamSize = null;
      }
    )
  }

  onDeleteClick(event:any, index:number){
    this.deleteIndex = index;
    this.deleteProject.projectID = this.projects[index].projectID;
    this.deleteProject.projectName = this.projects[index].projectName;
  }

  onDeleteConfirm(){
    this.projectService.deleteProject(this.deleteProject.projectID).subscribe(
      (response)=>{
        this.projects.splice(this.deleteIndex,1);
        this.deleteProject.projectID = null;
        this.deleteProject.projectName = null;
        this.deleteProject.dateOfStart = null;
        this.deleteProject.teamSize = null;
      }
    )
  }

  onSearchClick(){
    this.projectService.searchProjects(this.searchBy,this.searchText).subscribe(
      (response:Project[])=>{
        this.projects = response;
      }
    )
  }

}
