import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {

  getTeamMembersSummary(): any[]{
    var TeamMembersSummary = [
      {Region:"East", TeamMembersCount: 20, TemporarilyUnavailableMembers: 4},
      {Region:"West", TeamMembersCount: 30, TemporarilyUnavailableMembers: 5},
      {Region:"North", TeamMembersCount: 40, TemporarilyUnavailableMembers: 6},
      {Region:"South", TeamMembersCount: 50, TemporarilyUnavailableMembers: 7}
    ];
    return TeamMembersSummary;
  }

  getTeamMembers(): any[]{
    var TeamMembers = [
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

    return TeamMembers;
  }

  getClients() : string[]{
    var Clients = [
      "ABC Infra", "DEF Solutions", "GHI Industries", "IJK BodyBuilders"
    ]

    return Clients;
  }

  getProjects(): string[]{
    var Projects = [
      "Project A", "Project B", "Project C", "Project D"
    ]

    return Projects;
  }


}
