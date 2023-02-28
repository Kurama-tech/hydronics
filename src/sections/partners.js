/** @jsx jsx */
import { jsx, Box, Container, Flex, Text } from 'theme-ui';
import { rgba } from 'polished';
import Image from 'components/image';
import SectionHeading from 'components/section-heading';
import SubscriptionForm from 'components/subscription-form';
import carrier from 'assets/images/partners/carrier.png';
import aqua from 'assets/images/partners/aqua.png';
import atlantic from 'assets/images/partners/atlantic.png';
import d from 'assets/images/partners/d.png';
import daikin from 'assets/images/partners/daikin.png';
import imi from 'assets/images/partners/imi.png';
import wilo from 'assets/images/partners/wilo.png';
import xylem from 'assets/images/partners/xylem.png';


const logos = [
  {
    name: 'Carrier',
    src: carrier,
  },
  {
    name: 'Aqua',
    src: aqua,
  },
  {
    name: 'Atlantic',
    src: atlantic,
  },
  {
    name: 'Danfoff',
    src: d,
  },
  {
    name: 'Daikin',
    src: daikin,
  },
  {
    name: 'IMI',
    src: imi,
  },
  {
    name: 'Wilo',
    src: wilo,
  },
  {
    name: 'Xylem',
    src: xylem,
  },
];

const Partners = () => {
  return (
    <Box as="section" id="partners" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Our Partners"
          description="Who We are proud to be in busniess with"
        />
        <Flex sx={styles.sponsoredBy}>
              <Flex sx={styles.sponsor}>
                {logos?.map((logo, index) => (
                  <Flex as="figure" key={index}>
                    <Image src={logo.src} alt={logo.name} />
                  </Flex>
                ))}
              </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Partners;

const styles = {
  section: {
    backgroundColor: '#FFFCF7',
    pt: [9, null, null, null, 10, 13, null],
    pb: [9, null, null, null, 11, 14, null],
  },
  sponsoredBy: {
    alignItems: 'center',
    m: [null, null, null, '30px auto', '30px 0 0'],
    mt: [6],
    span: {
      fontSize: ['13px', null, null, null, 2],
      lineHeight: 2.62,
      color: rgba('#566272', 0.6),
    },
  },
  sponsor: {
    alignItems: 'center',
    figure: {
      ml: [2, null, null, null, 4, 5],
      img: {
        maxWidth: ['60px', null, null, null, '80px', '100%'],
      },
    },
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
  subscriptionForm: {
    m: ['30px auto 0'],
    maxWidth: [555],
    flexDirection: ['column', null, null, 'row'],
    input: {
      backgroundColor: rgba('black', 0.08),
      border: '0 none',
      color: rgba('black', 0.8),
      fontFamily: 'body',
      px: [5],
      minHeight: [50, null, null, null, 60],
      boxShadow: '0px 16px 40px rgba(72, 59, 26, 0.08)',
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      '::placeholder': {
        color: rgba('grey', 0.8),
        opacity: 1 /* Firefox */,
      },
    },
    button: {
      fontSize: [1, null, null, 2],
      minHeight: [50, null, null, null, 60],
      ml: [0, null, null, 3],
      mt: [4, null, null, 0],
    },
  },
};
