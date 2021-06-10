import { Component, OnInit } from '@angular/core';

import { IAlbumDetails } from '../interfaces'
import { ITunesService } from '../itunes/itunes.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albumDetails!: IAlbumDetails;
  constructor(private iTunesService : ITunesService) {
    //Dummy data
    this.albumDetails = {
      artist: 'Artist name',
      title: 'Album name',
      image: 'assets/img/testImg.jpg'
    } as IAlbumDetails

  }

  ngOnInit() {
    this.iTunesService.getITunesData().subscribe((data) => this.albumDetails = data)
  }

}
