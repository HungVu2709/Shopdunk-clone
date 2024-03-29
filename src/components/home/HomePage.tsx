import { Link } from 'react-router-dom';
import policy from '../../assets/fake-data/policy';
import Grid from '../common/Grid';
import Helmet from '../common/Helmet';
import HeroSlider from '../slider/HeroSlider';
import PolicyCard from './PolicyCard';
import Section, { SectionBody, SectionTitle } from './Section';
import SlideProduct from './SlideProduct';
import productData from '../../assets/fake-data/products';

const HomePage = () => {
  const products = productData.getAllProducts();
  const iPhoneProducts = productData.getIphoneProducts();
  const iPadProducts = productData.getIpadProducts();
  if (!products) {
    return <div>Loading</div>;
  }

  return (
    <>
      <HeroSlider />
      <Helmet title="Trang chủ">
        <Section>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {policy.map((item, index) => (
                <Link key={`policy-${index}`} to="#">
                  <PolicyCard name={item.name} icon={item.icon} />
                </Link>
              ))}
            </Grid>
          </SectionBody>
        </Section>
        <Section>
          <SectionTitle>iPhone</SectionTitle>
          <SectionBody>
            <SlideProduct products={iPhoneProducts} />
          </SectionBody>
        </Section>
        <Section>
          <SectionTitle>iPad</SectionTitle>
          <SectionBody>
            <SlideProduct products={iPadProducts} />
          </SectionBody>
        </Section>
        <Section>
          <SectionTitle>Macbook</SectionTitle>
          <SectionBody>{/* <SlideProduct products={products} /> */}</SectionBody>
        </Section>
      </Helmet>
    </>
  );
};

export default HomePage;
