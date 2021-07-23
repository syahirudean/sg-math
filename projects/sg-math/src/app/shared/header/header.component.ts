import { Component, OnInit } from '@angular/core';
import { ModalService } from 'projects/sg-math/src/_modal';

@Component({
  selector: 'sgmath-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public modalService: ModalService) {}

  ngOnInit(): void {}
  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
