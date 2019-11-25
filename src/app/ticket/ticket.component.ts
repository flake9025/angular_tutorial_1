import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  @Input() id: number;
  @Input() imageUrl: string;
  @Input() title: string;
  @Input() description: string;
  @Input() count: number;

  @Output() ticketEdit = new EventEmitter();
  @Output() ticketDelete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onEdit(){
    this.ticketEdit.emit(this.id);
  }

  public onDelete(){
    this.ticketDelete.emit(this.id);
  }

}
