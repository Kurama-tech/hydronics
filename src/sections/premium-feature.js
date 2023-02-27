/** @jsx jsx */
import { jsx, Box, Container, Grid } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
import Image from 'components/image';
import messenger from 'assets/images/shared.svg';
import vision from 'assets/images/vision.svg';
import emoji from 'assets/images/icons/emoji-2.png';

const data = [
  {
    title: 'Support',
    contents: (
      <div>
        Support throughout the construction phase from specification to commissioning works.
      </div>
    ),
  },
  {
    title: 'Complete.    ',
    contents: (
      <div>
        Complete systems from heat exchanger to air vents.
      </div>
    ),
  },
  {
    title: `Supply`,
    contents: (
      <div>
        Supply of equipment from leading manufactures HVAC for business-class objects, but also domestic brands for model objects.
      </div>
    ),
  },
];

const data2 = [
  {
    title: 'Negotiation',
    contents: (
      <div>
        From negotiation on price to the inspection and legalities, we're your ally in making sure that everything goes smoothly, putting you in the best possible position come closing.
      </div>
    ),
  },
  {
    title: 'Innovation.    ',
    contents: (
      <div>
        Researching, developing and modifying products to meet customers technical requirement and needs.
      </div>
    ),
  },
  {
    title: `Family`,
    contents: (
      <div>
       The main reason why we're so highly reviewed is to because we treat our customers like family, we know that there are many options and we appreciate the opportunity to earn your business

      </div>
    ),
  },
];

const PremiumFeature = () => {
  return (
    <section id="features" sx={styles.section}>
      <Container>
      <SectionHeading
          sx={styles.heading2}
          title="About us"
          description=""
        />
        <br />
        <Grid sx={styles.grid}>
          <Box as="figure" sx={styles.illustration}>
            <Image src={messenger} alt="messenger" />
          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeading
              sx={styles.heading}
              title="Mission"
              description="Hydronic Systems was founded in 2018 and specializes in supplying equipment for heating and cooling systems, water supply, fire fighting and heat substation. Our company is a partner of leading manufactures HVAC, Building automation. Regardless of whether you require a speedy radiator fix or a full AC substitution, we'll give an answer custom-made to your necessities."
            />
            <Box sx={styles.accordionGroup}>
              <Accordion items={data} />
            </Box>
          </Box>
        </Grid>
      </Container>
      <br/>
      <Container>
        <Grid sx={styles.grid}>
          <Box sx={styles.rightContent}>
            <SectionHeading
              sx={styles.heading}
              title="Vision"
              description=""
            />
            <Box sx={styles.accordionGroup}>
              <Accordion items={data2} />
            </Box>
          </Box>
          <Box as="figure" sx={styles.illustration}>
            <Image src={vision} alt="messenger" />
          </Box>
        </Grid>
      </Container>
    </section>
  );
};

export default PremiumFeature;

const styles = {
  section: {
    backgroundColor: '#FFFCF7',
    pt: [6, null, null, 6, 8, 9],
    pb: [6, null, null, null, 7, 9, 11, null],
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
  heading2: {
    mb: 3,
    h2: {
      fontSize: [6, null, null, 8],
    },
    p: {
      color: '#858B91',
      fontSize: 3,
      m: ['10px auto', null, null, '0 auto'],
    },
  },
  heading: {
    textAlign: ['left', null, null, 'center', 'left'],
    ml: [null, null, null, 'auto'],
    maxWidth: [null, null, null, 520, 660],
    h2: {
      fontSize: [null, null, null, 10, 8, 10, 40],
      img: {
        maxWidth: [24, null, null, 30, 25, null, '100%'],
        top: ['4px', '8px', null, null, '4px', '8px'],
      },
    },
    p: {
      fontSize: [null, null, null, 2],
    },
  },
  illustration: {
    mb: [-6, null, null, -8, 0],
  },
  accordionGroup: {
    m: [null, null, null, '0 auto', 'unset'],
    maxWidth: [null, null, null, 600, 'none'],
  },
};
