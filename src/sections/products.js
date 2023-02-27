/** @jsx jsx */
import { useRef, useEffect, useState } from 'react';
import { rgba } from 'polished';
import { jsx, Box, Container } from 'theme-ui';
import Tabs, { TabPane } from 'rc-tabs';
import SectionHeading from 'components/section-heading';
import ProductInd from 'components/cards/productcard';
import { Swiper, SwiperSlide } from 'swiper/react';
import TabTitle from 'components/tabs/tab-title';
import TabContent from 'components/tabs/tab-content';
import Currency from 'components/icons/currency';
import PieChart from 'components/icons/pie-chart';
import Suitcase from 'components/icons/suitcase';
import BarChart from 'components/icons/bar-chart';
import dashboard from 'assets/images/dashboard.png';

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
            {name: "Check Valves", img: ''},
            {name: "Expansion Valves", img: ''},
            {name: "Control and RegulatingValves", img: ''}
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
            {name: "Burn out", img: ''},
            {name: "Filter Driers", img: ''},
            {name: "Oil Separator", img: ''}
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
            {name: "Compressors for air conditioning", img: ''},
            {name: "Compressors for refrigeration", img: ''},
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
            {name: "Pumps", img: ''},
            {name: "Filters", img: ''},
            {name: "Pool Heating", img: ''},
            {name: "Pool Fitting", img: ''},
            {name: "Cleaning Accessories", img: ''}
            
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
            {name: "Control systems", img: ''},
            {name: "VRV(variable refrigerant volume)", img: ''},
            {name: "Chillers & air-side equipment", img: ''},
            {name: "Refrigeration", img: ''},
            {name: "Biddle Air Curtains", img: ''},
            {name: "Survey Equipments", img: ''}
        ]
      },
  },
];

const Dashboard = () => {
 /*  const containerRef = useRef();
  const [containerOffset, setContainerOffset] = useState({
    left: null,
    top: null,
  });
  useEffect(() => {
    setContainerOffset({
      left: containerRef.current.offsetLeft,
      top: containerRef.current.offsetTop,
    });
  }, [containerRef]); */
  const options = {
    spaceBetween: 20,
    loop: false,
    grabCursor: true,
    
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      1366: {
        slidesPerView: 3,
      },
      1600: {
        slidesPerView: 4,
      },
    },
  };
  return (
    <Box as="section" sx={styles.section}>
      <Container />
      <SectionHeading
          sx={styles.heading}
          title="Products"
          description=""
        />
      <Box sx={{...styles.container }}>
        <Tabs
          sx={styles.tabs}
          animated={{ tabPane: true }}
          defaultActiveKey="2"
        >
          {data?.map((tab) => (
            <TabPane key={tab?.id} tab={<TabTitle tab={tab.tabPane} />}>
             {/*  <TabContent tabContent={tab?.tabContent} /> */}

             <Swiper sx={styles.carousel} {...options}>
             {tab.tabContent.products.map((item, index) => (
                <SwiperSlide key={index}>
                    
                    <ProductInd data={item} />
                
          </SwiperSlide>
        ))}
      </Swiper>
            </TabPane>
          ))}
        </Tabs>
      </Box>
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
    mb: [7, null, null, 8, 9, 10],
    h2: {
      color: 'black',
      fontSize: [6, null, null, 8],
    },
    p: {
      color: '#858B91',
      fontSize: [2, null, null, 3],
      m: ['15px auto 0', null, null, '10px auto 0'],
    },
  },
  container: {
    maxWidth: ['none !important'],
    //pl : [40, null, null, 0]

    pr: [6, null, null, 0],
  },
  carousel: {
    '&.swiper-container': {
      //pb: [8],
      pl: [6, null, null, 0],
      //pr: [6, null, null, 0],
    },
  },
  tabs: {
    border: 0,
    color: 'black',
    '.rc-tabs-nav': {
      mb: [8, null, null, 7, 10, null, 12],
    },
    '.rc-tabs-nav-wrap': {
      '::before': {
        backgroundColor: rgba('#fff', 0.1),
        content: ['none', null, null, `''`],
        height: 1,
        position: 'absolute',
        left: 0,
        top: 51,
        width: '100%',
      },
      '::after': {
        borderColor: ['primary'],
      },
    },
    '.rc-tabs-nav-list': {
      display: ['flex'],
    },
    '.rc-tabs-tab': {
      backgroundColor: 'transparent',
      '+ .rc-tabs-tab': {
       ml: [5, null, null, 5, 8, 12],
        // mt: [0, null, null, 0],
      },
      'svg g, svg path': {
        transition: '0.3s ease-in-out 0s',
      },
    },
    '.rc-tabs-tab-btn': {
      alignItems: 'center',
      display: ['flex', null, null, 'block'],
      outline: '0 none',
      fontSize: [null, null, null, 15, 2],
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
};
