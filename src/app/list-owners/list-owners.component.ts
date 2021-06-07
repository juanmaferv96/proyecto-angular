import { OwnerService } from './../search/owner.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-owners',
  templateUrl: './list-owners.component.html',
  styleUrls: ['./list-owners.component.css']
})
export class ListOwnersComponent implements OnInit {

  public owners: any;

  constructor(private OwnerService: OwnerService) { }

  ngOnInit(): void {
    this.OwnerService.getOwners().subscribe(
      data => { this.owners = data}
    )
  }

}
