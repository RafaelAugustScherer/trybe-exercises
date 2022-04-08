import { IFlyingVehicle } from './interfaces';

export default class FuturisticCar implements IFlyingVehicle {
  fly(): void { console.log('Flying an airplane'); }
}