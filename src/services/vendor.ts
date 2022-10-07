import { AddProductVendorRequest } from './../interfaces/auth';
import { AxiosResponse } from 'axios';
import { VendorProduct } from '../interfaces/Vendor';
import Instance from './instance';

export function getVendorProduct(page: number): Promise<VendorProduct> {
  return Instance.get(`api/Vendor/Product?page=${page}`);
}
export function addVendorProduct(params: AddProductVendorRequest): Promise<AxiosResponse> {
  return Instance.post(`api/Vendor/Product`, params);
}
export function editVendorProduct(params: number): Promise<AxiosResponse> {
  return Instance.put(`api/Vendor/Product/${params}`);
}
export function deleteVendorProduct(params: number): Promise<AxiosResponse> {
  return Instance.delete(`api/Vendor/Product/${params}`);
}
