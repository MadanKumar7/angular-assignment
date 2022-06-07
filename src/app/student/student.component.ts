import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  studentData:any = [];
  studentDataOriginal:any = []
  studentKeys:any = [];
  headingObjects:any = [];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("assets/student.json").subscribe((data:any) => {
      this.studentData = data['Students'];
      this.studentDataOriginal = [...this.studentData];
      if(this.studentData.length > 0){
        this.studentKeys = Object.keys(this.studentData[0]);
        this.setupHeadingsData();
      }
      console.log(this.studentData);
    });
  }

  setupHeadingsData(){
    for(let heading of this.studentKeys){
      const headerObj = {key: heading, order:'default'}
      this.headingObjects.push(headerObj);
    }
  }

  sortColumn(key:string){
    let order = (this.headingObjects.find((headerObj:any) => {
      return headerObj.key === key;
    }).order);

    if(order === 'default'){
      order = 'asc';
    }else if(order === 'asc'){
      order = 'desc';
    }else{
      order = 'default';
    }
    this.headingObjects.forEach((element:any) => {
      if(element.key === key){
        element.order = order;
      }
    });
    if(order === 'default'){
      this.studentData = [...this.studentDataOriginal];
    }else{
      this.studentData.sort(this.sortData(key, order));
    }
  }

  sortData(key:string, order:string){
    return(a:any, b:any) => {
      let data1 = a[key];
      let data2 = b[key];
      if(data1 === data2){
        return 0;
      }else if(data1 === null || data1 === undefined){
        return 1;
      }else if(data2 === null || data2 === undefined){
        return -1;
      }else if(order === 'desc'){
        return (data1 > data2)?-1:1;
      }else{
        return (data1 > data2)?1:-1;
      }
    }
  }

}
