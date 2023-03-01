/** @jsx jsx */
import { jsx, Flex, Input, Button, Label, Text, Spinner } from 'theme-ui';
import { useState, useEffect } from 'react';
import { Destination, URLPrefix } from './const';
import axios from 'axios';

const SubscriptionForm = ({ buttonLabel, ...props }) => {
  const url = ""
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleEmailChange = (e) => {
    const emailInput = e.target.value;
    if (emailInput === ""){
      setEmail(emailInput);
      setIsValid(true);
    }
    else{
      setEmail(emailInput);
      setIsValid(validateEmail(emailInput));
    }
  };

  const validateEmail = (emailInput) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailInput);
  };

  const handlePost = async (email) => {
    const URL = URLPrefix+"?dest="+Destination+"&email="+email
    try {
      const response = await axios.post(URL);
      console.log(response.data)
      setLoading(false)
      setResponse(response.data)
    } catch (error) {
      setLoading(false)
      console.error(error);
      setResponse(error)
    }
  };

  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault();
    if (email != ""){
      console.log(email); // Replace with your desired behavior
      handlePost(email)
    }
    else {
      setIsValid(false)
    }
    
  };

  

  useEffect(() => {
    setId(Date.now());
  }, []);

  return (
    <div>
    <Flex as="form" sx={styles.form} onSubmit={handleSubmit} {...props}>
      <Label htmlFor={`email-${id}`} variant="styles.srOnly">
        Email
      </Label>
      <Input
        type="email"
        value={email}
        onChange={handleEmailChange}
        required
        sx={{
          flexGrow: 1,
          p: ['0 20px', null, null, null, '0 25px'],
          minHeight: [60],
          height: 'auto',
          width: 'auto',
          borderColor: isValid ? 'success' : 'error',
          ':focus': {
            borderColor: isValid ? 'success' : 'error',
            outline: 'none',
          },
        }}
        id={`email-${id}`}
        placeholder="Enter Email address"
      />
      {!loading && (
        <Button type="submit">{buttonLabel ?? 'Get Quote'}</Button>
      )}
      {loading && (
        <Spinner />
      )}
    </Flex>
    {response && (
      <Text sx={{ color: 'green', mt: 2 }}>{response}</Text>
    )}
    {!isValid && (
        <Text sx={{ color: 'orange', mt: 2 }}>Please enter a valid email address!</Text>
      )}
    </div>
  );
};

export default SubscriptionForm;

const styles = {
  form: {
    button: {
      ml: [3],
    },
  },
};
