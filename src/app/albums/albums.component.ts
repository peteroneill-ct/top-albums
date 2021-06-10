import { newArray } from '@angular/compiler/src/util'
import { Component, OnInit } from '@angular/core'

import { IAlbumDetails, IAlbumsDetails } from '../interfaces'
import { ITunesService } from '../itunes/itunes.service'

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  albumsDetails!: IAlbumDetails[]

  constructor(private iTunesService: ITunesService) {}

  ngOnInit() {
    this.iTunesService.getITunesData().subscribe((data) => (this.albumsDetails = data))
  }
}
