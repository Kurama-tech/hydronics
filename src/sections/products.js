/** @jsx jsx */
import { useRef, useEffect, useState } from 'react';
import { rgba } from 'polished';
import { jsx, Box, Container, Card, Text, Flex, Heading, Grid, Image} from 'theme-ui';
import Tabs, { TabPane } from 'rc-tabs';
import SectionHeading from 'components/section-heading';
import ProductInd from 'components/cards/productcard';
import TabTitle from 'components/tabs/tab-title';
import TabContent from 'components/tabs/tab-content';
import Currency from 'components/icons/currency';
import PieChart from 'components/icons/pie-chart';
import Suitcase from 'components/icons/suitcase';
import BarChart from 'components/icons/bar-chart';
import dashboard from 'assets/images/dashboard.png';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import valve1 from 'assets/images/VALVES/Check/v1.jpg'
import valve2 from 'assets/images/VALVES/Check/v2.jpg'
import valve3 from 'assets/images/VALVES/Check/v3.jpg'
import exv1 from 'assets/images/VALVES/Expansion/exv1.jpeg'
import exv2 from 'assets/images/VALVES/Expansion/exv2.jpeg'
import crv1 from 'assets/images/VALVES/CRV/CRV1.jpeg'
import crv2 from 'assets/images/VALVES/CRV/CRV2.jpg'
import fil1 from 'assets/images/Filters/Burnout/Burnout.jpg'
import FD1 from 'assets/images/Filters/FD/FD1.jpeg'
import FD2 from 'assets/images/Filters/FD/FD2.jpg'
import OS1 from 'assets/images/Filters/OIL/OS1.jpg'
import OS2 from 'assets/images/Filters/OIL/OS2.jpeg'
import cm1 from 'assets/images/Compressors/C1.jpg'
import cm2 from 'assets/images/Compressors/C2.jpg'
import cl1 from 'assets/images/POOLS/CLEANING/1.jpeg'
import cl2 from 'assets/images/POOLS/CLEANING/2.gif'
import cl3 from 'assets/images/POOLS/CLEANING/3.jpeg'
import f1 from 'assets/images/POOLS/Filters/Filter.jpeg'
import fit1 from 'assets/images/POOLS/Fitting/PF1.jpeg'
import fit2 from 'assets/images/POOLS/Fitting/PF2.jpeg'
import fit3 from 'assets/images/POOLS/Fitting/PF3.jpeg'
import p1 from 'assets/images/POOLS/Pumps/p1.jpg'
import ph1 from 'assets/images/POOLS/Poolheating/ph1.jpeg'
import ph2 from 'assets/images/POOLS/Poolheating/ph2.jpeg'
import ahu1 from 'assets/images/AHV/AHU/AHU.jpeg'
import bac1 from 'assets/images/AHV/BAC/BAC1.jpeg'
import bac2 from 'assets/images/AHV/BAC/BAC2.jpeg'
import ch1 from 'assets/images/AHV/Chillers/CH1.jpeg'
import ch2 from 'assets/images/AHV/Chillers/CH2.jpeg'
import r1 from 'assets/images/AHV/Refrigeration/R1.jpeg'
import r2 from 'assets/images/AHV/Refrigeration/R2.jpeg'
import vrv1 from 'assets/images/AHV/VRV/1.jpeg'
import vrv2 from 'assets/images/AHV/VRV/2.jpeg'
import vrv3 from 'assets/images/AHV/VRV/3.jpeg'
import ctrl1 from 'assets/images/AHV/ControlSystems/1.jpeg'
import ctrl2 from 'assets/images/AHV/ControlSystems/2.jpeg'
import ctrl3 from 'assets/images/AHV/ControlSystems/3.jpeg'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles


const data = [
  {
    id: 1,
    tabPane: [
      {
        title: 'Valves',
      },
    ],
    tabContent:
      {
        products: [
            {id: 1, name: "Check Valves", img: [
              valve1, valve2, valve3
            ]},
            {id: 2,name: "Expansion Valves", img: [
              exv1, exv2
            ]},
            {id: 3,name: "Control and RegulatingValves", img: [
              crv1, crv2
            ]}
        ]
      },
  },
  {
    id: 2,
    tabPane: [
      {
        title: 'Filters, strainers and oil separators',
      },
    ],
    tabContent:
      {
        products: [
            {id: 1,name: "Burn out", img: [fil1]},
            {id: 2,name: "Filter Driers", img: [FD1, FD2]},
            {id: 3,name: "Oil Separator", img: [OS1, OS2]}
        ]
      },
  },
  {
    id: 3,
    tabPane: [
      {
        title: 'Compressors',
      },
    ],
    tabContent: 
      {
        products: [
            {id: 1,name: "Compressors for air conditioning", img: [cm1]},
            {id: 2,name: "Compressors for refrigeration", img: [cm2]},
        ]
      },
  },
  {
    id: 4,
    tabPane: [
      {
        title: 'Pools & Fountains',
      },
    ],
    tabContent:
      {
        products: [
        
            {id: 1,name: "Filters", img: [f1]},
            {id: 2,name: "Pumps", img: [p1]},
            {id: 3,name: "Pool Heating", img: [ph1, ph2]},
            {id: 4,name: "Pool Fitting", img: [fit1, fit2, fit3]},
            {id: 5,name: "Cleaning Accessories", img: [
              cl1, cl2, cl3
            ]}
            
        ]
      },
  },
  {
    id: 5,
    tabPane: [
      {
        title: 'Air handling units & ventilation systems',
      },
    ],
    tabContent: 
      {
        products: [
            {id: 1,name: "Air Handeling Units", img: [ahu1]},
            {id: 2,name: "Control systems", img: [ctrl1, ctrl2, ctrl3]},
            {id: 3,name: "VRV(variable refrigerant volume)", img: [vrv1, vrv2, vrv3]},
            {id: 4,name: "Chillers & air-side equipment", img: [ch1, ch2]},
            {id: 5,name: "Refrigeration", img: [r1, r2]},
            {id: 6,name: "Biddle Air Curtains", img: [bac1, bac2]},
            //{name: "Survey Equipments", img: ''}
        ]
      },
  },
];

const Dashboard = () => {
  const options = {
    slidesPerView: 1,
  };
  return (
    <Box as="section" id="products" sx={styles.section}>
      <Container>   
                <SectionHeading
                    sx={styles.heading}
                    title="Products"
                    description=""
                    />      
      
        <Tabs
          sx={styles.tabs}
          tabBarGutter={35}
          animated={{ tabPane: true }}
          defaultActiveKey="2"
        >
          {data?.map((tab) => (
            <TabPane key={tab?.id} tab={<TabTitle tab={tab.tabPane} />}>
                <Grid sx={styles.grid}>
                {tab?.tabContent.products.map((item)=>(
                      
                         <Box key={item.id} sx={styles.testimonial}>
                          <Box>
                          <Carousel showThumbs={false} swipeable={true} >
                            {item.img.map((i)=>{
                              return(
                                <div>
                                  <img  src={i} width='100%' height='50%'/>
                                </div>
                              )
                            })}
                          </Carousel>
                          </Box> 
                          <Flex sx={styles.author}>
                            <Box>
                              <Heading as="h3">{item.name}</Heading>
                            </Box>
                          </Flex>
                        </Box>
                    ))}
                </Grid>
            </TabPane>
          ))}
        </Tabs>
      </Container>
      </Box>
    
  );
};

export default Dashboard;

const styles = {
  section: {
    backgroundColor: '#FFFCF7',
    pt: [9, null, null, 11, 10, 12, null],
    pb: [9, null, null, null, 0],
  },
  heading: {
    textAlign: ['center'],
    mb: 3,
    p: {
      color: '#858B91',
      fontSize: 4,
      m: ['10px auto', null, null, '0 auto'],
    },
  },
  carousel: {
    '&.swiper-container': {
      //pb: [8],
      pl: [6, null, null, 0],
      //pr: [6, null, null, 0],
    },
  },
  grid: {
    alignItems: 'center',
    gridTemplateColumns: [
      '1fr',
      null,
      null,
      null,
      '1fr 431px',
      '1fr 530px',
      '1fr 550px',
    ],
  },
  tabs: {
    border: 0,
    color: 'black',
    '.rc-tabs-nav-list': {
      display: ['flex'],
    },
    '.rc-tabs-tab': {
      backgroundColor: 'transparent',
      '+ .rc-tabs-tab': {
       //ml: [0, null, null, 5, 8, 12],
      },
      'svg g, svg path': {
        transition: '0.3s ease-in-out 0s',
      },
    },
    '.rc-tabs-tab-btn': {
      alignItems: 'center',
      display: ['flex', null, null, 'block'],
      outline: '0 none',
      //fontSize: [null, null, null, 15, 2],
    },
    '.rc-tabs-tab-active': {
      'svg g, svg path': {
        fill: 'primary',
        opacity: 1,
      },
      h5: {
        color: 'primary',
      },
    },
    '.rc-tabs-ink-bar': {
      backgroundColor: 'primary',
      borderRadius: 5,
      bottom: [47],
      display: ['none', null, null, 'block'],
    },
    '.rc-tabs-tabpane': {
      outline: '0 none',
    },
  },
  testimonial: {
    backgroundColor: 'white',
    borderRadius: 5,
    p: '25px 35px 30px',
    transition: 'all 0.3s ease 0s',
    ':hover': {
      boxShadow: '0px 13px 40px rgba(75, 102, 135, 0.1)',
    },
    '+ div': {
      mt: [4],
    },
  },
  quote: {
    lineHeight: 1.88,
    color: 'text',
  },
  author: {
    mt: [6],
    figure: {
      mr: [3],
    },
    h3: {
      fontSize: '17px',
      lineHeight: 1.3,
      color: 'text',
    },
    a: {
      fontWeight: 500,
      fontSize: [1],
      lineHeight: 2.14,
      color: 'link',
      cursor: 'pointer',
      textDecoration: 'none',
    },
  },
};
