import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(doctorArray: any[], filterString: string, depName: string): any {
    const result: any = []
    if (!doctorArray || filterString == '' || depName == '') {
      return doctorArray
    }
    else {
      doctorArray.forEach((item: any) => {
        var dept: string = item[depName].trim().toLowerCase();
        if (!!filterString ){
          if(dept.includes(filterString.trim().toLowerCase())) {
          result.push(item)
        }
      }
        else {
          result.push(item);
        }
      })
      return result
    }
  }

}
