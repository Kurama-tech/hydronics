/** @jsx jsx */
import { jsx, Box, Flex, Heading, Link, Card, Text } from 'theme-ui';
import Image from 'components/image';
import check from 'assets/images/icons/company.png';

const ProductInd = ({ data }) => {
  return (
    <Box>
      <Flex>
        <Card
        sx={{
            maxWidth: 256,
        }}>
        <Image src={check} />
        <Text>{data.name}</Text>
        </Card>
      </Flex>
    </Box>
  );
};

export default ProductInd;

const styles = {
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
