import { Directive } from '@angular/core';
import { AbstractControl, NG_ASYNC_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { ProjectsService } from './projects.service';
import { Observable, map } from 'rxjs';
import { Project } from './project';

@Directive({
  selector: '[appProjectIDUniqueValidator]',
  providers: [{provide:NG_ASYNC_VALIDATORS, useExisting:ProjectIDUniqueValidatorDirective, multi:true}]
})
export class ProjectIDUniqueValidatorDirective implements Validator{

  constructor(private projectService : ProjectsService) { }
  validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {
     return this.projectService.getProjectByProjectID(control.value).pipe(
      map(
        (existingProject:Project)=>{
          if(existingProject!=null){
            return {uniqueProjectID:{valid:false}}
          }else{
            return null;
          }
        }
      )
     )
  }

}
