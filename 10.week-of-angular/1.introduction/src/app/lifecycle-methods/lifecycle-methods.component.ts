import { CommonModule, UpperCasePipe } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { ShortenDescriptionPipe } from '../pipes/shorten-description.pipe';
import { FormsModule } from '@angular/forms';
import { SearchItemPipe } from '../pipes/search-item.pipe';
import { Product } from '../models'

@Component({
  selector: 'app-lifecycle-methods',
  standalone: true,
  imports: [UpperCasePipe,ShortenDescriptionPipe,FormsModule,CommonModule,SearchItemPipe],
  templateUrl: './lifecycle-methods.component.html',
  styleUrl: './lifecycle-methods.component.css'
})
export class LifecycleMethodsComponent implements OnInit, OnChanges, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnDestroy{

  @Input() products!:Array<Product>


  constructor(){
    console.log('constructor is called!!')
  }

  // onInit
  ngOnInit(): void {
    // called when directive properties have been initialized
    console.log('OnInit constructor is called!!')
  }

  // onChanges
  ngOnChanges(changes: SimpleChanges): void {
    // called when bound properties OR bound inputs(coming from parent componenets)change
    // runs before onInit due to bound inputs
    console.log('Onchanges consttructor is called!!')
    console.log(changes)  //returns an object
  }

  ngDoCheck(): void {
    console.log('docheck consttructor is called!!')
  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChecked consttructor is called!!')
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit consttructor is called!!')
  }

  ngAfterViewChecked(): void {
    console.log('AfterViewChecked consttructor is called!!')
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit consttructor is called!!')    
  }

  ngOnDestroy(): void {
    // do the data cleanup
    // to be learnt best with routing and observables
    console.log('onDestroy consttructor is called!!')
  }
  
}
