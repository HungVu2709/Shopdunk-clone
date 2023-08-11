export interface IProductItemDetail {
  Id: number;
  Name: string;
  Price: number;
  ShortDescription?: string;
  Images: {
    Id: number;
    Link: string;
  }[];
  FullDescription?: string;
  Quantity?: number;
  Color?: {
    Id: number;
    Name: string;
  };
  Category?: {
    Id: number;
    Name: string;
  };
  Capacity?: {
    Id: number;
    Name: string;
  };
  Status: boolean;
}

export interface IProductsCart {
  CartId: number;
  Products: {
    Id: number;
    Name: string;
    Price: number;
    Quantity: number;
    Capacity: {
      ID: number;
      Name: string;
    };
    Category: {
      Id: number;
      Name: String;
    };
    Color: {
      ID: number;
      Name: string;
      FullDescription: string;
    };
    Images: {
      Id: number;
      Link: string;
    }[];
    ShortDescription: string;
    Status: boolean;
  };
  Quantity: number;
}

export interface ProductDetail {
  id: string;
  name: string;
  price: string;
  short_description?: string;
  image: string[];
  full_description?: string;
  quantity?: string;
  color?: string;
  product_type: {
    id: string;
    name: string;
  };
  capacity?: string[];
  status: boolean;
}
