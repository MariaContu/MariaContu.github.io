import { Component } from '@angular/core';
import { SectionTitle } from '../section-title/section-title';
import contact from '../../data/contact.json';

@Component({
  selector: 'app-contact',
  imports: [SectionTitle],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contact = contact;
}
