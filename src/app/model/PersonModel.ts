export interface PersonModel {
  _id: string;
  name: string;
  birthDate: string;
  addresses: AddressModel[];
}

export interface AddressModel {
  bairro: string,
  cep: string,
  id: number,
  localidade: string,
  logradouro: string,
  mainAddress: boolean,
  number: string,
  uf: string
}
