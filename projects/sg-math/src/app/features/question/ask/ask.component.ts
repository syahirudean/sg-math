import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sgmath-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.scss'],
})
export class AskComponent implements OnInit {
  tags: string[] = ['math', 'question'];
  title: string = 'Ask a Math Question';
  body: string = `
    <p>
      Ask a math question and get a response from the Math Stack Exchange community.
    </p>
  `;
  

  constructor() {}

  ngOnInit(): void {}
}
