import {RenType} from './ren-type';
import {FacilityType} from './facility-type';

export interface Facility {
  id?: number;
  name?: string;
  area?: string;
  cost?: string;
  maxPeople?: number;
  standardRoom?:number;
  rentType?: RenType;
  facilityType?: FacilityType;
  descriptionOfOtherConvenience?: string;
  poolArea?: number;
  numberOfFloors?: number;
  attachFacility?: string;
}
