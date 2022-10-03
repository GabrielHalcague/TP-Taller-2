import { Component, Injectable, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productospromo } from 'src/app/productos';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-carrousel-cards-promos',
  templateUrl: './carrousel-cards-promos.component.html',
  styleUrls: ['./carrousel-cards-promos.component.css']
})
export class CarrouselCardsPromosComponent implements OnInit {
  producto = productospromo;
  
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
  }


}
