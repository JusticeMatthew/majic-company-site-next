import personalPlan from '../../public/personalPlan.json';
import businessPlan from '../../public/businessPlan.json';
import commercePlan from '../../public/commercePlan.json';

const pricingPlans = [
  {
    name: 'Personal',
    recommended: false,
    services: [
      'Enchanting mobile-friendly webpage',
      'Personalized domain',
      'Search engine optimization',
      'Google Business listing',
      'Secure hosting & maintenance',
    ],
    price: '$2,000',
    monthly: '+ $0 per month',
    lottie: personalPlan,
  },
  {
    name: 'Business',
    recommended: true,
    services: [
      'Enchanting mobile-friendly webpage',
      'Personalized domain',
      'Search engine optimization',
      'Google Business listing',
      'Secure hosting & maintenance',
      'Professional company email addresses',
    ],
    price: '$3,000',
    monthly: '+ $200 per month',
    lottie: businessPlan,
  },
  {
    name: 'Commerce',
    recommended: false,
    services: [
      'Enchanting mobile-friendly webpage',
      'Personalized domain',
      'Search engine optimization',
      'Google Business listing',
      'Secure hosting & maintenance',
      'Professional company email addresses',
      'Powerful Shopify e-commerce platform',
    ],
    price: '$4,500',
    monthly: '+ $300 per month',
    lottie: commercePlan,
  },
];
export default pricingPlans;
