import { Http } from '@angular/http';
import { AlertService } from './../../Services/alert.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-contract-type',
  templateUrl: './add-contract-type.component.html',
  styleUrls: ['./add-contract-type.component.css']
})
export class AddContractTypeComponent{

  ContractTypes:any[];
  field:any;


  constructor(private http:Http,private alertService:AlertService) {
    this.http.get('/api/v1/getContractType')
    .subscribe(response=>{
      this.ContractTypes = response.json();
    })
  }

  AddContType(contractName){
    var Contract = {
      ContractName : contractName.value
    }
    this.http.post('/api/v1/addContractType',Contract)
    .subscribe(response=>{
      this.alertService.success(response.json());
      this.http.get('/api/v1/getContractType')
    .subscribe(response=>{
      this.ContractTypes = response.json();
    })
    })
  }

  Delete(Contract){
    let id = Contract.Cid;
    this.http.delete('/api/v1/ContractDelete/'+id)
    .subscribe(response=>{
      this.alertService.success(response.json());
      let index = this.ContractTypes.indexOf(Contract);
      this.ContractTypes.splice(index,1);

    })
  }
  Enter(value,ContractName){

    this.field =!this.field;
  var Contract={
    ContractName: ContractName.value
  }
  console.log(Contract);
  if(value.ContractName != ContractName.value){
  this.http.put('/api/v1/ContractEdit/'+value.Cid,Contract)
  .subscribe(response=>{
    this.alertService.success(response.json());
  })
}
}

}
