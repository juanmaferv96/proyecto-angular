import { OwnerService } from './../../search/owner.service';
import { Owner } from './../../models/owner';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owner-rest-controller',
  templateUrl: './owner-rest-controller.component.html',
  styleUrls: ['./owner-rest-controller.component.css']
})
export class OwnerRestControllerComponent implements OnInit {
  owner: Owner | undefined;
  errorMessage: any;

  constructor(private OwnerService: OwnerService) { }

  ngOnInit(): void {
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
