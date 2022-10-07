import React, { StrictMode, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { IProDuctVendorDetail, VendorProduct } from '../../interfaces/Vendor';
import { getVendorProduct } from '../../services/vendor';
import Pagination from '../catalog/Pagination';
import AddProductModal from './AddProductModal';
import './vendor.css';
import Modal from 'react-modal';
import ItemProductVendor from './ItemProductVendor';
import SpinnerLoading from '../common/SpinnerLoading';

const Vendor = () => {
  const [showAddProductModal, setShowAddProductModal] = useState<boolean>(false);
  const [vendorProduct, setVendorProduct] = useState<IProDuctVendorDetail[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleShow = () => {
    setShowAddProductModal(!showAddProductModal);
  };
  const [columns, setColumns] = useState<string[]>([]);

  const [pageCount, setPageCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage, setPostsPerPage] = useState<number>(8);
  const [totalPosts, setTotalPosts] = useState<number>(0);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: '30%',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  function toggleModal() {
    setIsOpenModal(!isOpenModal);
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const res: VendorProduct = await getVendorProduct(currentPage);
        setLoading(true);

        setVendorProduct(res.Data.Products);
        setPageCount(res.Data.TotalPage);
        setTotalPosts(res.Data.TotalCount);
        setColumns(res.Data.Products[0] && Object.keys(res.Data.Products[0]));
      } catch (error) {
        throw error;
      }
    };
    getData();
    return () => {
      setLoading(false);
    };
  }, [currentPage]);

  const getAllProducts = () => vendorProduct;

  return (
    <div className="wrapper">
      <nav id="sidebar" className="active">
        <div className="sidebar-header" id="sidebar-title">
          <h3>
            <i className="bi bi-envelope-paper-heart-fill" /> Product Management
          </h3>
          <strong>
            <i className="bi bi-list" />
          </strong>
        </div>

        <ul className="list-unstyled components">
          <li className="active">
            <Link to="/vendor">
              <i className="bi bi-house" />
              Home
            </Link>
          </li>
          <li className="">
            <Link to="/editproduct">
              <i className="bi bi-pencil-square" />
              Edit
            </Link>
          </li>
          <li className="">
            <Link to="/searchproduct">
              <i className="bi bi-search" />
              Search
            </Link>
          </li>
          <li className="">
            <Link to="/managecategory">
              <i className="bi bi-list-ul" />
              Category
            </Link>
          </li>
        </ul>
      </nav>

      <div id="content">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Product Management
            </a>
          </div>
        </nav>

        <div>
          <button type="button" className="btn btn-primary mb-3" id="add-btn" onClick={toggleModal}>
            Add product
          </button>
          <Modal isOpen={isOpenModal} style={customStyles} onRequestClose={toggleModal}>
            <AddProductModal />
            <div className="d-grid gap-2 justify-content-center mx-auto">
              <button className="btn btn-primary" type="button" onClick={toggleModal}>
                CLOSE
              </button>
            </div>
          </Modal>
        </div>

        {loading ? (
          <div
            className="container"
            //  style="max-width: 90%"
          >
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Color</th>
                  <th scope="col">Category</th>
                  <th scope="col">Description</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody id="tbody">
                {vendorProduct.map(item => (
                  <ItemProductVendor
                    id={item.Id}
                    name={item.Name}
                    quantity={item.Quantity}
                    price={item.Price}
                    color={item.Color.Name}
                    category={item.Category.Name}
                    shortDescription={item.ShortDescription}
                  />
                ))}
              </tbody>
            </table>
            <Pagination postsPerPage={postsPerPage} totalPosts={totalPosts} paginate={paginate} />
          </div>
        ) : (
          <SpinnerLoading />
        )}
      </div>
    </div>
  );
};

export default Vendor;
