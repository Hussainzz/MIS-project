
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-importstaff',
  templateUrl: './importstaff.component.html',
  styleUrls: ['./importstaff.component.css']
})
export class ImportstaffComponent{

  Datas : string[];
  headers : string[];

  constructor () {}

  public changeListener(files: FileList){
    console.log(files);
    if(files && files.length > 0) {
       let file : File = files.item(0);
         console.log(file.name);
         console.log(file.size);
         console.log(file.type);
         let reader: FileReader = new FileReader();
         reader.readAsText(file);
         reader.onload = (e) => {
            let csv: string = reader.result;
            this.extractData(csv);
            console.log(csv);
         }
      }
  }

private extractData(data) { // Input csv data to the function

  let csvData = data;
  let allTextLines = csvData.split(/\r\n|\n/);
  let headers = allTextLines[0].split(',');
  let lines = [];

  for ( let i = 0; i < allTextLines.length; i++) {
      // split content based on comma
      let data = allTextLines[i].split(',');
      if (data.length == headers.length) {
          let tarr = [];
          for ( let j = 0; j < headers.length; j++) {
              tarr.push(data[j]);
          }
          lines.push(tarr);
      }
  }
  this.headers = lines[0];
  for(let i=1;i<=this.headers.length;i++){
    for(let j=0;j<=lines[0].length;j++)
    {
      console.log(lines[i][j]);
    }
    console.log("\n");
  }
  console.log("Headers",this.headers);
  console.log("Data",this.Datas);
  console.log(lines); //The data in the form of 2 dimensional array.
}

}

