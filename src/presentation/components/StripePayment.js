import React from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const CURRENCY = 'USD';

const fromDollarToCent = amount => parseInt(amount * 100);

const successPayment = data => {
    let totalCount = localStorage.getItem('count');
    localStorage.setItem('count', totalCount+10);
    alert('Call API to say that user can now see 5 more posts');
};

const onToken = (amount, description) => token =>
    axios.post('http://localhost:3001',
        {
            description,
            source: token.id,
            currency: CURRENCY,
            amount: fromDollarToCent(amount)
        })
        .then(successPayment)
        .catch(successPayment);

const StripePayment = ({ name, description, amount }) =>
    <StripeCheckout
        name={name}
        description={description}
        amount={fromDollarToCent(amount)}
        token={onToken(amount, description)}
        currency={CURRENCY}
        stripeKey={'pk_test_51NbgAySE0xvReEWpy3Lx7Luc9oOXj2v3sv2YTxDx3eKD70lV3NrKQr27RpmVXboKhlHobXjXB7FphtkOzmR9swVR00t7inzJQF'}
        zipCode
        email
        allowRememberMe
    />

export default StripePayment;