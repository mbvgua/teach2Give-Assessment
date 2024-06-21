import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
import { MessageService } from '../services/messages/messages.service';

@Directive({
  selector: '[appTalkative]',
  standalone: true
})
export class TalkativeDirective {

  constructor(private el: ElementRef, private messageService: MessageService) {}

  @Output() showMessage:EventEmitter<{}> = new Emitter()

  showMessage(eventData) {
    const message = this.messageService.getRandomMessage();
    this.el.nativeElement.innerText = message;
  }
}
