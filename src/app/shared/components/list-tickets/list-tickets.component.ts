import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ticket } from '../../models/ticket';

@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.css']
})
export class ListTicketsComponent implements OnInit {

  @Input() ticketsList: Array<Ticket>;

  @Output() ticketEdit = new EventEmitter();
  @Output() ticketDelete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onEdit(ticketId){
    this.ticketEdit.emit(ticketId);
  }

  public onDelete(ticketId){
    this.ticketDelete.emit(ticketId);
  }
}
