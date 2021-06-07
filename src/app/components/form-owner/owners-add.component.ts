import { OwnerService } from './../../search/owner.service';
import { Component, OnInit } from '@angular/core';
import { Owner } from 'src/app/models/owner';

@Component({
  selector: 'app-form-owner',
  templateUrl: './form-owner.component.html',
  styleUrls: ['./form-owner.component.css']
})
export class FormOwnerComponent implements OnInit {

  
  public ownerForm:any;
  public owner: any;
  errorMessage: any;

  apellidos: string = '';


  constructor(private OwnerService: OwnerService) {
    this.apellidos = "";
   }

  ngOnInit(): void {
    this.OwnerService.getOwners().subscribe(
      data => { this.owner = data}
    )
  }
  onSubmit(owner: Owner){
    owner.id = null;
    this.OwnerService.addOwner(owner).subscribe(
      new_owner => {
        this.owner = new_owner;
        this.gotoOwnerList(new_owner);
      },
      error => this.errorMessage = <any>error
    );
  }
  gotoOwnerList(owner:Owner) {
    console.log(owner.apellidos);
  }

}
