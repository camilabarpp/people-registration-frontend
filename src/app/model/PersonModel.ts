export interface PersonModel {
  _id: string;
  name: string;
  birthdate: string;
  addresses: AddressModel[];
}

export interface AddressModel {
  street: string;
  city: string;
  state: string;
  zip: string;
  neighborhood: string;
  number: string;
}
