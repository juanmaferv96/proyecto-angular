import { OwnerService } from './../../search/owner.service';
import { Owner } from './../../models/owner';
import { Component, Inject, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-form-owner',
  templateUrl: './form-owner.component.html',
  styleUrls: ['./form-owner.component.css']
})
export class FormOwnerComponent implements OnInit {

  
  public ownerForm:any;
  public owner: any;
  errorMessage: any;


  constructor(private OwnerService: OwnerService) { }

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
        this.gotoOwnerList();
      },
      error => this.errorMessage = <any>error
    );
  }
  gotoOwnerList() {
    throw new Error('Method not implemented.');
  }

}
