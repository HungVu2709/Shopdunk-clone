import { ReactNode } from 'react';
export interface VendorProduct {
  StatusCode: number;
  Message: string;
  Data: {
    PageIndex: number;
    TotalCount: number;
    TotalPage: number;
    Products: {
      Id: number;
      Name: string;
      ShortDescription: string;
      FullDescription: string;
      Price: number;
      Quantity: number;
      Status: boolean;
      CreatedAt: string;

      Color: {
        ID: number;
        Name: string;
      };
      Capacity: {
        ID: number;
        Name: string;
      };
      ProductType: {
        Id: number;
        Name: string;
        Status: boolean;
      };
      Category: {
        Id: number;
        Name: string;
        CreatedAt: string;
        Status: true;
      };
      Images: {
        Id: number;
        Link: string;
      }[];
    }[];
  };
}

export interface IProDuctVendorDetail {
  Id: number;
  Name: string;
  ShortDescription: string;
  FullDescription: string;
  Price: number;
  Quantity: number;
  Status: boolean;
  CreatedAt: string;

  Color: {
    ID: number;
    Name: string;
  };
  Capacity: {
    ID: number;
    Name: string;
  };
  ProductType: {
    Id: number;
    Name: string;
    Status: boolean;
  };
  Category: {
    Id: number;
    Name: string;
    CreatedAt: string;
    Status: true;
  };
  Images: {
    Id: number;
    Link: string;
  }[];
  children?: React.ReactNode;
}
