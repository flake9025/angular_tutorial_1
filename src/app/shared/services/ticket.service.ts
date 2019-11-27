import { Injectable } from '@angular/core';
import MOCK_TICKETS from '../mocks/tickets.mock';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor() { }

  public getAllTickets(): Array<Ticket>{
    console.log('TicketService::getAllTickets');
    return MOCK_TICKETS;
  }

  public edit(ticketId) {
    console.log('TicketService::edit ', ticketId);
  }

  public delete(ticketId) {
    console.log('TicketService::delete ', ticketId);
  }
}
