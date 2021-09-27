export default function () {
  this.namespace = 'api';

  this.get('/products', function () {
    return {
      data: [
        {
          type: 'products',
          id: 1,
          attributes: {
            name: 'Green tea',
            price: 3.11,
            image: 'img/green-tea.jpg',
            code: 'GR1',
            currency: '£',
          },
        },
        {
          type: 'products',
          id: 2,
          attributes: {
            name: 'Strawberries',
            price: 5.0,
            image: 'img/strawberries.jpg',
            code: 'SR1',
            currency: '£',
          },
        },
        {
          type: 'products',
          id: 3,
          attributes: {
            name: 'Coffee',
            price: 11.23,
            image: 'img/coffee.jpg',
            code: 'CF1',
            currency: '£',
          },
        },
      ],
    };
  });
}
