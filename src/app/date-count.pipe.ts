import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let currentDay:Date = new Date();
    let todayWithNoTime:any = new Date(currentDay.getFullYear(),currentDay.getMonth(),currentDay.getDate());
    

    var dateDifference = Math.abs(todayWithNoTime-value);
    const secondsInDay = 86400;
    var dateDifferenceSeconds = dateDifference*0.001;

    var dateCounter = dateDifferenceSeconds/secondsInDay;

    if(dateCounter >= 1 ){
      return dateCounter;
    } else {
      return 0;
    }

    
  }

  }
