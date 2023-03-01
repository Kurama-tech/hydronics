import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Support from 'sections/support';
import PremiumFeature from 'sections/premium-feature';
import AppFeature from 'sections/app-feature';
import Products from 'sections/products';
import Pricing from 'sections/pricing';
import Testimonials from 'sections/testimonials';
import Subscribe from 'sections/subscribe';
import Partners from 'sections/partners';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="HYDRONIC SYSTEM COOLING & HEATING
          EQUIPMENT TRADING LLC"
          description="HYDRONIC SYSTEM COOLING & HEATING
          EQUIPMENT TRADING LLC"
        />
         <Banner />
       {/*  <Support /> */}
        <PremiumFeature />
        {/*  <AppFeature />*/}
        <Products /> 
        {/* <Pricing /> 
        <Testimonials /> */}
        <Subscribe />
        <Partners />
      </Layout>
    </ThemeProvider>
  );
}
