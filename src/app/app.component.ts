import { TicketService } from './shared/services/ticket.service';
import { Component, OnInit } from '@angular/core';
import { Ticket } from './shared/models/ticket';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'tpbillet';
  myTickets: Array<Ticket>;

  constructor(private ticketService: TicketService) {
  }

  ngOnInit() {
    this.myTickets = this.ticketService.getAllTickets();
  }

  public onEdit(ticketId) {
    this.ticketService.edit(ticketId);
  }

  public onDelete(ticketId) {
    this.ticketService.delete(ticketId);
  }
}
