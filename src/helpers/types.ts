export enum Gender {
  Male = "male",
  Female = "female",
}

export enum AllSelection {
  All = "all",
}

export type GenderSelection = Gender | AllSelection;
export type Title = "Miss" | "Mrs" | "Mr";

export interface Name {
  title: Title;
  first: string;
  last: string;
}

export interface Street {
  name: string;
  number: number;
}

export interface Location {
  street: Street;
  city: string;
  state: string;
  postcode: string;
  coordinates: Position;
  timezone: Timezone;
  country: keyof typeof Nationality;
}

export interface Position {
  latitude: number;
  longitude: number;
}

export interface Timezone {
  offset: string;
  description: string;
}

export type RandomUserResponse = SuccessResponse | ErrorResponse;

export interface ErrorResponse {
  error: string;
}

export interface SuccessResponse {
  results: User[];
}

export interface DateAndAge {
  date: string; // to be converted into Date object
  age: number;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface ID {
  name: string;
  value: string;
}

export interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

export interface User {
  gender: Gender;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: DateAndAge;
  registered: DateAndAge;
  phone: string;
  cell: string;
  id: ID;
  picture: Picture;
  nat: string;
}

export enum Nationality {
  Australia = "au",
  Brazil = "br",
  Canada = "ca",
  Switzerland = "ch",
  Germany = "de",
  Denmark = "dk",
  Spain = "es",
  Finland = "fi",
  France = "fr",
  "Great Britain" = "gb",
  Ireland = "ie",
  India = "in",
  Iran = "ir",
  Mexico = "mx",
  Netherlands = "nl",
  Norway = "no",
  "New Zeeland" = "nz",
  Serbia = "rs",
  Turkey = "tr",
  Ukraine = "ua",
  "United States" = "us",
}

export function isSuccessResponse(
  response: RandomUserResponse
): response is SuccessResponse {
  return (response as SuccessResponse).results !== undefined;
}
