import { User } from "./User";
import { Company } from "./Company";

// Instructions to every ohter case
// on how they can be an argument to 'addMaker'
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  makerContent(): string;
}
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: Mappable): void {
    const maker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    maker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.makerContent(),
      });
      infoWindow.open(this.googleMap, maker);
    });
  }
}
