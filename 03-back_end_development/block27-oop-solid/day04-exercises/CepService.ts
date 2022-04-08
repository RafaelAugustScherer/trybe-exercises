import { ICepAPI } from './interfaces';

class CepService {
  constructor(private readonly cepApi: ICepAPI) {}

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAdress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

class MockCepApi implements ICepAPI {
  getAddressByCEP(): Promise<string> {
      return new Promise((res) => res('Rua Colombo, 391'))
  }

  getCepByAddress(address: string, number: number): Promise<string> {
      return new Promise((res) => res('9999911'))
  }
}

export default CepService;