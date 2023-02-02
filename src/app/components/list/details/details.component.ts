import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import data from '../../../../assets/data/customer-details.json';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  selectedCustomer: any;
  customerDetails = data;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params);
    const customerDetaildId = this.activatedRoute.snapshot.params['id'];
    if (customerDetaildId) {
      this.selectedCustomer = this.customerDetails.find(
        (a: any) => a.id === customerDetaildId
      );
    }
  }
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}
