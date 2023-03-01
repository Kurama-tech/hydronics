/** @jsx jsx */
import { jsx, Box, Container, Grid, Text, Flex } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import SubscriptionForm from 'components/subscription-form';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Subscribe = () => {
  return (
    <Box as="section" id="contact" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Contact us"
          description=""
        />

<Grid
      columns={['1fr', '1fr 2fr']}
      sx={{ gap: 4, py: 4, maxWidth: 1024, margin: '0 auto' }}
    >
      <Box>
        <Flex sx={{ alignItems: 'center', my: 2 }}>
          <FaMapMarkerAlt sx={{ mr: 2 }} color="white" />
          <Box>
          <Text variant="heading" color="white">5th floor Rasis Business Center</Text>
          <Text variant="heading" color="white">Al barsha -1, Dubai, UAE </Text>
          <br />
          </Box>
        </Flex>
        <Flex sx={{ alignItems: 'center', my: 2 }}>
          <FaPhone sx={{ mr: 2 }} color="white" />
          <Box>
          <Text variant="heading" color="white" href="tel:+971529620433" >+971 529620433</Text>
          <br />
          </Box>
        </Flex>
        <Flex sx={{ alignItems: 'center', my: 2 }}>
          <FaEnvelope sx={{ mr: 2 }} color="white" />
          <Box>
            <Text variant="heading" color="white" href="mailto:info@hydronicsystems.ae">info@hydronicsystems.ae</Text>
          </Box>
        </Flex>
      </Box>
      <Box>
        <Box
          sx={{
            position: 'relative',
            height: 0,
            paddingBottom: '56.25%',
            marginTop: 4,
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.8459161291967!2d55.1987259!3d25.1070767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b7af47fdcf5%3A0x5e1780e9803c797f!2sRasis%20Business%20Center!5e0!3m2!1sen!2sae!4v1677676429483!5m2!1sen!2sae"
            title="Google Maps"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ position: 'absolute', top: 0, left: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />
        </Box>
      </Box>
    </Grid>
      </Container>
    </Box>
  );
};

export default Subscribe;

const styles = {
  section: {
    backgroundColor: '#353448',
    pt: [9, null, null, null, 10, 13, null],
    pb: [9, null, null, null, 11, 14, null],
  },
  heading: {
    mb: [7, null, null, 8, 9, 10],
    h2: {
      color: 'white',
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
      backgroundColor: rgba('white', 0.08),
      border: '0 none',
      color: rgba('white', 0.8),
      fontFamily: 'body',
      px: [5],
      minHeight: [50, null, null, null, 60],
      boxShadow: '0px 16px 40px rgba(72, 59, 26, 0.08)',
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      '::placeholder': {
        color: rgba('white', 0.8),
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
