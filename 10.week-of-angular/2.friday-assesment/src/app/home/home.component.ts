// import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { TalkativeDirective } from '../directives/talkative.directive';
import { MessageService } from '../services/messages/messages.service'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

