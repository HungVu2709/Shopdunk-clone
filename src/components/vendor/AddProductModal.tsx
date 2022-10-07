import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { addVendorProduct, getVendorProduct } from '../../services/vendor';
import { CAPACITY } from '../../constants/enum';
import { COLOR } from '../../constants/enum';
import Vendor from '../vendor/VendorComponent';
export interface IProductVendorItem {
  productName: string;
  quantity: number;
  price: number;
  colorID: number;
  capacityID: number;
  categoryID: number;
  shortDescription: string;
  fullDescription: string;
}

const AddProductModal: React.FunctionComponent = () => {
  const [productName, setProductName] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [colorID, setColorID] = useState<number>(0);
  const [capacityID, setCapacityID] = useState<number>(1);
  const [categoryID, setCategoryID] = useState<number>(1);
  const [shortDescription, setShortDescription] = useState<string>('');
  const [fullDescription, setFullDescription] = useState<string>('');

  const [loading, setLoading] = useState<boolean>(false);

  const postData = async () => {
    try {
      let product = {
        Name: productName,
        ShortDescription: shortDescription,
        FullDescription: fullDescription,
        Quantity: quantity,
        Price: price,
        CategoryId: categoryID,
        ProductTypeId: 1,
        ColorID: colorID,
        CapacityID: capacityID,
      };

      setLoading(true);
      const res: AxiosResponse = await addVendorProduct(product);

      toast.success(`Add product success`);
    } catch (error) {
      throw error;
    }
  };

  const handleChooseColor = (e: { target: { value: string } }) => {
    if (e.target.value === COLOR.WHITE) {
      setColorID(2);
    } else if (e.target.value === COLOR.BLACK) {
      setColorID(3);
    } else if (e.target.value === COLOR.GREEN) {
      setColorID(4);
    } else if (e.target.value === COLOR.RED) {
      setColorID(1);
    } else if (e.target.value === 'Select Color') {
      setColorID(0);
    }
  };
  const handleChooseCapacity = (e: { target: { value: string } }) => {
    if (e.target.value === CAPACITY.GB64) {
      setCategoryID(1);
    } else if (e.target.value === CAPACITY.GB128) {
      setColorID(2);
    } else if (e.target.value === CAPACITY.GB256) {
      setColorID(3);
    } else if (e.target.value === 'Select Color') {
      setColorID(0);
    }
  };

  return (
    <div className="container form-add-product" id="main">
      <div className="row justify-content-center align-items-center mt-4">
        <div className="col-lg-6 col-lg-offset-4">
          <form>
            <div className="form-group row mb-3">
              <label htmlFor="input-name" className="col-sm-3 col-form-label">
                Product Name
              </label>
              <div className="col-sm-5">
                <input
                  type="text"
                  className="form-control"
                  id="input-name"
                  placeholder="Input Name"
                  onChange={e => setProductName(e.target.value)}
                />
              </div>
              <label
                htmlFor="input-quantity"
                className="col-sm-2 col-form-label"
                style={{ textAlign: 'right' }}
              >
                Quantity
              </label>
              <div className="col-sm-2">
                <input
                  type="text"
                  className="form-control"
                  id="input-quantity"
                  onChange={e => setQuantity(Number(e.target.value))}
                />
              </div>
            </div>
            <div className="form-group row mb-3">
              <label htmlFor="input-capacity" className="col-sm-3 col-form-label">
                Capacity
              </label>
              <div className="col-sm-9">
                <select
                  className="form-control"
                  id="input-capacity"
                  onChange={handleChooseCapacity}
                >
                  <option>Select Capacity</option>
                  <option>64GB</option>
                  <option>128GB</option>
                  <option>256GB</option>
                </select>
              </div>
            </div>
            <div className="form-group row mb-3">
              <label htmlFor="input-price" className="col-sm-3 col-form-label">
                Price
              </label>
              <div className="col-sm-5">
                <input
                  type="text"
                  className="form-control"
                  id="input-price"
                  placeholder="Input Price"
                  onChange={e => setPrice(Number(e.target.value))}
                />
              </div>
            </div>
            <div className="form-group row mb-3">
              <label htmlFor="input-color" className="col-sm-3 col-form-label">
                Color
              </label>
              <div className="col-sm-5">
                <select className="form-control" id="input-color" onChange={handleChooseColor}>
                  <option>Select Color</option>
                  <option>Black</option>
                  <option>White</option>
                  <option>Green</option>
                  <option>Red</option>
                </select>
              </div>
              <label
                htmlFor="input-category"
                className="col-sm-2 col-form-label"
                style={{ textAlign: 'right' }}
              >
                Category
              </label>
              <div className="col-sm-2">
                <select
                  className="form-control"
                  id="input-category"
                  onChange={() => setCategoryID(1)}
                >
                  <option>Iphone</option>
                </select>
              </div>
            </div>
            <div className="form-group row mb-3">
              <label htmlFor="input-shortdescription" className="col-sm-3 col-form-label">
                Short Description
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  id="input-shortdescription"
                  placeholder="Short Description"
                  onChange={e => setShortDescription(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group row mb-3">
              <label htmlFor="input-shortdescription" className="col-sm-3 col-form-label">
                Full Description
              </label>
              <div className="col-sm-9 form-group">
                <form>
                  <textarea
                    className="form-control"
                    rows={3}
                    id="input-shortdescription"
                    onChange={e => setFullDescription(e.target.value)}
                    placeholder="Full Description"
                  />
                </form>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-primary mb-3"
              id="submit-btn"
              onClick={() => postData()}
            >
              ADD
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
