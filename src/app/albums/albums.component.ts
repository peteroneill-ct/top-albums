import { Component, OnInit } from '@angular/core';

import { IAlbumDetails } from '../interfaces'

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albumDetails: IAlbumDetails
  constructor() {
    //Dummy data
    this.albumDetails = {
      artist: 'Artist name',
      name: 'Album name',
      image: 'assets/img/testImg.jpg'
    } as IAlbumDetails

  }

  ngOnInit(): void {
  }

}
