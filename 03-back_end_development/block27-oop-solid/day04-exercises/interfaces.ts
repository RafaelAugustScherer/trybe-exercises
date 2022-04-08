export interface ICepAPI {
  getAddressByCEP(cep: string, number: number): string | Promise<string>,
  getCepByAddress(address: string, number:number): string | Promise<string>,
}

export interface IVehicle {
  drive(): void;
}

export interface IFlyingVehicle {
  fly(): void;
}