import { Geo } from "./address/geo";

export class Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
  phone: string;
  website: string;

  constructor() {
    this.street = '';
    this.suite = '';
    this.city = '';
    this.zipcode = '';
    this.geo = new Geo();
    this.phone = '';
    this.website = '';

  }
}
