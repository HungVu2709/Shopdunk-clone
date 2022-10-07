import React, { useEffect, useState } from 'react';
import { formatCurrency } from '../../utils/formatCurrency';
import './vendor.css';
import { Link } from 'react-router-dom';
import { VendorProduct } from '../../interfaces/Vendor';
import { deleteVendorProduct, getVendorProduct } from '../../services/vendor';
import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

export interface ItemProductVendor {
  name?: string;
  id: number;
  price: number;
  quantity: number;
  color?: string;
  category?: string;
  shortDescription: string;
}
const ItemProductVendor = (props: ItemProductVendor) => {
  const { name, id, price, quantity, color, category, shortDescription } = props;
  const deleteProduct = async () => {
    try {
      await deleteVendorProduct(id);
      toast.success(`${name} have been removed`);
    } catch (error) {}
  };

  const editProduct = () => {};
  return (
    <tr>
      <th scope="row">{id}</th>
      <Link to={`/vendor/${id}`}>
        <td>{name}</td>
      </Link>
      <td>{quantity}</td>
      <td>{formatCurrency(price)}</td>
      <td>{color}</td>
      <td>{category}</td>
      <td>{shortDescription}</td>
      <td>
        <button type="button" className="btn btn-danger " onClick={() => deleteProduct()}>
          <i className="bi bi-trash" />
        </button>
        <button type="button" className="btn btn-warning ml-4" onClick={() => editProduct()}>
          <i className="bi bi-pencil-square" />
        </button>
      </td>
    </tr>
  );
};

export default ItemProductVendor;
