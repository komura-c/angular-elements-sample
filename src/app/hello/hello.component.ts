import { Component, Input, Output, HostBinding, HostListener, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent {
  value: string;

  @Input() name: string;
  @Output() clickButton = new EventEmitter();
  @HostBinding('style.background-color') color = 'white';
  @HostListener('mouseover') onclick() {
    this.color = '#eee';
  }
  @HostListener('mouseout') onmouseout() {
    this.color = 'white';
  }

  handleClick() {
    this.clickButton.emit(this.value);
    this.value = '';
  }
}
