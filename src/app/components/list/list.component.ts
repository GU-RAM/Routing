import { Component } from '@angular/core';
import data from '../../../assets/data/customer-list.json';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  users = data;
}
