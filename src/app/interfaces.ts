export interface IAlbumDetails {
  title: string
  artist: string
  image: string
}

export interface IAlbumsDetails {
  [index: number]: IAlbumDetails
}
