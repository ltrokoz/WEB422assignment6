/*********************************************************************************
 * WEB422 – Assignment 6 
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy. 
 * No part of this assignment has been copied manually or electronically from any other source 
 * (including web sites) or distributed to other students. 
 * 
 * Name: Liubov Trokoz       Student ID: 139578199      Date: 2021-04-09 
 * 
 * 
*********************************************************************************/


import { Component, OnInit } from '@angular/core';
import { MusicDataService } from './../music-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css'],
})
export class FavouritesComponent implements OnInit {

  favourites!: Array<any>;

  constructor(private musicDataService: MusicDataService, public snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.musicDataService.getFavourites().subscribe((data) => {
      this.favourites = data.tracks;
      console.log(data);
    });
  }

  removeFromFavourites(id: any): void {
    this.musicDataService.removeFromFavourites(id).subscribe((data) => {
      this.favourites = data.tracks;
    });
  }
}