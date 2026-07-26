import { Component } from '@angular/core';
import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  templateUrl: './notification.html',
  styleUrl: './notification.css',

  // Component-level provider:
  // A new NotificationService instance is created for every
  // NotificationComponent and its child components.
  // This keeps the service state isolated from the rest of the application.
  providers: [NotificationService]
})
export class NotificationComponent {

  constructor(public notificationService: NotificationService) {}

}