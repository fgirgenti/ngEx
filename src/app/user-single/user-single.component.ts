import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css'],
})
export class UserSingleComponent implements OnInit {
  @Input() user!: User;
  @Output() deleted = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  delete(user: User) {
    this.deleted.emit(user);
  }
}
