export interface Cover {
  _id: string;
  title: string;
  description: string;
  price: number;
  isOnsale: boolean;
  salePercent: number;
  slug: string;
  image: string;
  year: number;
  carMake: {
    name: string;
    logo: {
      asset: {
        _ref: string;
      };
    };
  };
  carModel: {
    model: string;
  };
}

export interface Make {
  _id: string;
  name: string;
  logo: {
    asset: {
      _ref: string;
    };
  };
}
