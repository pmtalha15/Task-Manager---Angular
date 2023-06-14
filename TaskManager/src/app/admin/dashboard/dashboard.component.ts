import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  Designation: string | any;
  Username: string | any;
  NoOfTeamMembers: number | any;
  TotalCostOfAllProjects: number | any;
  PendingTasks: number | any;
  UpcomingProjects: number | any;
  ProjectCost: number | any;
  CurrentExpenditure: number | any;
  AvailableFunds: number | any;
  Today : Date | any;

  Clients: string[] = [];
  Projects: string[] = [];
  Years: number[] = [];
  TeamMembersSummary: any = [];
  TeamMembers: any = [];

  constructor(private dashboardService : DashboardService){

  }

  ngOnInit() {
    this.Designation = "Team Leader";
    this.Username = "Jon Smith";
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpcomingProjects = 0.2;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = this.ProjectCost - this.CurrentExpenditure;
    this.Today = new Date();

    this.Clients = this.dashboardService.getClients();

    this.Projects = this.dashboardService.getProjects();

    for(var i = 2023; i>2015; i--){
      this.Years.push(i);
    }

    this.TeamMembersSummary = this.dashboardService.getTeamMembersSummary();

    this.TeamMembers = this.dashboardService.getTeamMembers();
  }

  onProjectchange($event : any){
    if($event.target.innerHTML == "Project A") {
      this.ProjectCost = 2113507;
      this.CurrentExpenditure = 22450;
      this.AvailableFunds = this.ProjectCost - this.CurrentExpenditure;
    }
    else if($event.target.innerHTML == "Project B") {
      this.ProjectCost = 3435707;
      this.CurrentExpenditure = 23578;
      this.AvailableFunds = this.ProjectCost - this.CurrentExpenditure;
    }
    else if($event.target.innerHTML == "Project C") {
      this.ProjectCost = 9867546;
      this.CurrentExpenditure = 27877;
      this.AvailableFunds = this.ProjectCost - this.CurrentExpenditure;
    }
    else{
      this.ProjectCost = 9345678;
      this.CurrentExpenditure = 12345;
      this.AvailableFunds = this.ProjectCost - this.CurrentExpenditure;
    }
  }
}
