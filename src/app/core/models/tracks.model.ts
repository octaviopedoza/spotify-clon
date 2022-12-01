/* Este archivo exporta el modelo de datos que debe de contener una cancion el cual es un Json,  Al final del json estamos exportando
un dato de tipo ArtistModel por lo cual necesitamos importar el modelo ArtistModel, con esto ya tenemos una estructura de datos
compuesta */
import { ArtistModel } from './artist.model';

export interface TrackModel {
  name: string;
  album: string;
  cover: string;
  url: string;
  _id: string | number;
  artist?: ArtistModel;
}
