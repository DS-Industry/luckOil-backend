export class CarWash {
  id: string;
  name: string;
  address: string;
  isActive: boolean;
  type: string;
  stepCost: number;
  limitMinCost: number;
  limitMaxCost: number;
  boxes: Box[];
  price: Price[];
  tags: Tag[];
}

export class Location {
  lat: number;
  lon: number;
  carwashes: CarWash[]
}

export class Box {
  id: string;
  number: string;
  status: string;
}

export class Price {
  id: number;
  name: string;
  description: string;
  cost: number;
  costType: number;
}

export class Tag {
  name: string;
  color: string;
}
