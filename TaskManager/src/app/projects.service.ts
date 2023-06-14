import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from './project';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ProjectsService {
  url = "http://localhost:9090/"

  constructor(private httpclient: HttpClient){

  }

  getAllProjects(): Observable<Project[]>{
    return this.httpclient.get<Project[]>(this.url + "api/projects",{responseType:"json"}).pipe(
      (map(
        (data:Project[]) =>{
          for(let i=0;i<data.length;i++){
            data[i].teamSize = data[i].teamSize * 100;
          }
          return data;
        }
      ))
    )
  }

  insertProjects(newProject: Project): Observable<Project>{
    return this.httpclient.post<Project>(this.url + "api/projects",newProject,{responseType:"json"})
  }

  updateProject(existingProject: Project): Observable<Project>{
    return this.httpclient.put<Project>(this.url + "api/projects",existingProject,{responseType:"json"})
  }

  deleteProject(ProjectID: number): Observable<string>{
    return this.httpclient.delete<string>(this.url + "api/projects?ProjectID="+ ProjectID)
  }

  searchProjects(searchBy: any, searchText:any):Observable<Project[]>{
    return this.httpclient.get<Project[]>(this.url + "api/projects/search/"+searchBy+"/"+searchText,{responseType:"json"});
  }
}
