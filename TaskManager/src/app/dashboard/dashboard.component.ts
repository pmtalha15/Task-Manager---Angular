import { Component, OnInit } from '@angular/core';

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

    this.Clients = [
      "ABC Infra", "DEF Solutions", "GHI Industries", "IJK BodyBuilders"
    ];

    this.Projects = [
      "Project A", "Project B", "Project C", "Project D"
    ];

    for(var i = 2023; i>2015; i--){
      this.Years.push(i);
    }

    this.TeamMembersSummary = [
      {Region:"East", TeamMembersCount: 20, TemporarilyUnavailableMembers: 4},
      {Region:"West", TeamMembersCount: 30, TemporarilyUnavailableMembers: 5},
      {Region:"North", TeamMembersCount: 40, TemporarilyUnavailableMembers: 6},
      {Region:"South", TeamMembersCount: 50, TemporarilyUnavailableMembers: 7}
    ];

    this.TeamMembers = [
      {Region: "East", Members:[
        {ID:1, Name:"Ford", Status:"Available"},
        {ID:2, Name:"Michael", Status:"Available"},
        {ID:3, Name:"Kevin", Status:"Busy"},
        {ID:4, Name:"John", Status:"Busy"}
      ]},

      {Region: "West", Members:[
        {ID:5, Name:"Chandler", Status:"Available"},
        {ID:6, Name:"Joey", Status:"Available"},
        {ID:7, Name:"Ross", Status:"Busy"},
        {ID:8, Name:"Rachel", Status:"Busy"}
      ]},

      {Region: "North", Members:[
        {ID:9, Name:"Monica", Status:"Available"},
        {ID:10, Name:"Janice", Status:"Available"},
        {ID:11, Name:"Paulo", Status:"Busy"},
        {ID:12, Name:"Walter", Status:"Busy"}
      ]},

      {Region: "South", Members:[
        {ID:13, Name:"Jesse", Status:"Available"},
        {ID:14, Name:"Professor", Status:"Available"},
        {ID:15, Name:"Tokyo", Status:"Busy"},
        {ID:16, Name:"Denver", Status:"Busy"}
      ]},
    ]
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
