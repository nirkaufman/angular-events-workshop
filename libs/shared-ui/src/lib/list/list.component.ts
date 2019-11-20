import { Component, Input, OnInit } from '@angular/core';
import { IListItem } from './list-item.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'angular-events-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() list:Observable<IListItem[]>;
  @Input() listName:string;
}
