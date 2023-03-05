import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-main-modal',
  templateUrl: './main-modal.component.html',
  styleUrls: ['./main-modal.component.css'],
})
export class MainModalComponent implements OnInit {
  @Input() title = '';

  constructor(public modalService: ModalService) {}

  ngOnInit(): void {}
}
