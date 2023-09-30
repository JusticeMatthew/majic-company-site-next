import personalPlan from '../../public/personalPlan.json';
import businessPlan from '../../public/businessPlan.json';
import commercePlan from '../../public/commercePlan.json';

const pricingPlans = [
  {
    name: 'Personal',
    recommended: false,
    services: [
      'Custom mobile-friendly webpage',
      'Personalized domain',
      'Search engine optimization',
      'Google Business listing',
      'Secure hosting & maintenance',
    ],
    price: '$1,000',
    monthly: '+ $0 per month',
    lottie: personalPlan,
  },
  {
    name: 'Business',
    recommended: true,
    services: [
      'Custom mobile-friendly webpage',
      'Personalized domain',
      'Search engine optimization',
      'Google Business listing',
      'Secure hosting & maintenance',
      'Professional company emails',
    ],
    price: '$1,500',
    monthly: '+ $100 per month',
    lottie: businessPlan,
  },
  {
    name: 'Commerce',
    recommended: false,
    services: [
      'Custom mobile-friendly webpage',
      'Personalized domain',
      'Search engine optimization',
      'Google Business listing',
      'Secure hosting & maintenance',
      'Professional company emails',
      'Shopify e-commerce platform',
    ],
    price: '$2,000',
    monthly: '+ $200 per month',
    lottie: commercePlan,
  },
];
export default pricingPlans;
