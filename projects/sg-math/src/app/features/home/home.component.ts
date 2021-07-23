import { Component, OnInit } from '@angular/core';
import { ModalService } from 'projects/sg-math/src/_modal/modal.service';

@Component({
  selector: 'sgmath-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bodyText: string;

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    this.bodyText = 'This text can be updated in modal 1';
  }

 openModal(id: string) {
    this.modalService.open(id);
}

closeModal(id: string) {
    this.modalService.close(id);
} 

}
