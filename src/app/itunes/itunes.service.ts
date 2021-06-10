import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { IAlbumDetails } from '../interfaces'

interface IiTunesData {
  feed: {
    entry: {
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
    }
  }
}

@Injectable({
  providedIn: 'root',
})
export class ITunesService {
  url = `https://itunes.apple.com/us/rss/topalbums/limit=1/json`

  constructor(private httpClient: HttpClient) {}

  private transformToIAlbumDetails(data: IiTunesData): IAlbumDetails {
    var dfe = data.feed.entry
    var imgCount = dfe['im:image'].length
    return {
      title: dfe['im:name'].label,
      artist: dfe['im:artist'].label,
      image: dfe['im:image'][imgCount-1].label,
    }
  }
  getITunesData(): Observable<IAlbumDetails> {
    var iTunesData = this.httpClient
      .get<IiTunesData>(this.url)
      .pipe(map((data) => this.transformToIAlbumDetails(data)))
    iTunesData.toPromise().then((data) => {
      console.log(data)
    })
    return iTunesData
  }
}
