import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { IAlbumDetails } from '../interfaces'

interface IiTunesAlbumsData {
  feed: { entry: [IiTunesAlbumData] }
}

interface IiTunesAlbumData {
  'im:name': {
    label: string
  }
  'im:image': [
    {
      label: string
    }
  ]
  'im:artist': {
    label: string
  }
  category: {
    attributes: {
      label: string
    }
  }
  'im:price': {
    label: string
  }
}

@Injectable({
  providedIn: 'root',
})
export class ITunesService {
  url = `https://itunes.apple.com/us/rss/topalbums/limit=100/json`

  constructor(private httpClient: HttpClient) {}

  private transformToIAlbumsDetails(data: IiTunesAlbumsData): IAlbumDetails[] {
    var dfe = data.feed.entry
    var albumsDetails = Array<IAlbumDetails>()

    dfe.forEach((e) => {
      var imgCount = e['im:image'].length

      var title = e['im:name'].label
      var artist = e['im:artist'].label
      var image = e['im:image'][imgCount - 1].label
      var category = e.category.attributes.label
      var price = e['im:price'].label

      var albumDetails = { title, artist, image, category, price }
      albumsDetails.push(albumDetails)
    })

    return albumsDetails
  }
  getITunesData(): Observable<IAlbumDetails[]> {
    var iTunesData = this.httpClient.get<IiTunesAlbumsData>(this.url)
    iTunesData.toPromise().then((data) => {
      console.log(data)
    })
    var mappedData = iTunesData.pipe(map((data) => this.transformToIAlbumsDetails(data)))

    return mappedData
  }
}
