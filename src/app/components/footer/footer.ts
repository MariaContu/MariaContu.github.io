import { Component } from '@angular/core';
import contact from '../../data/contact.json';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  contact = contact;
  currentYear = new Date().getFullYear();
}
