import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project';

@Pipe({
  name: 'paging'
})
export class PagingPipe implements PipeTransform {

  transform(value: Project[], currentPageIndex: number, pageSize: number): any {
    if(value == null){
      return null
    }

    let resArray = [];
    for(let i=currentPageIndex*pageSize; i< (currentPageIndex+1) * pageSize; i++){
      if(value[i]){
        resArray.push(value[i])
      }
    }
    return resArray;
  }

}
