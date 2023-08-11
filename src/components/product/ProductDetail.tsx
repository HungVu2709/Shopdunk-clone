import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IProductItemDetail } from '../../interfaces/ProductItem';
import Helmet from '../common/Helmet';
import Section, { SectionBody, SectionTitle } from '../home/Section';
import SlideProduct from '../home/SlideProduct';
import ProductView from './ProductView';
import productData from '../../assets/fake-data/products';

const ProductDetail = () => {
  const { productId } = useParams();
  const productDetail = productData.getProductById(Number(productId));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productDetail]);

  const products = productData.getAllProducts();

  if (!productDetail) {
    return <div>Loading</div>;
  }
  return (
    <Helmet title={productDetail?.Name}>
      <Section>
        <SectionBody>
          <ProductView product={productDetail} />
        </SectionBody>
      </Section>

      <Section>
        <SectionTitle>Khám phá thêm</SectionTitle>
        <SectionBody>
          <SlideProduct products={products} />
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default ProductDetail;
