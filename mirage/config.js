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
          },
        },
        {
          type: 'products',
          id: 2,
          attributes: {
            name: 'Strawberries',
            price: 5.0,
            image: 'img/strawberries.jpg',
          },
        },
        {
          type: 'products',
          id: 3,
          attributes: {
            name: 'Coffee',
            price: 11.23,
            image: 'img/coffee.jpg',
          },
        },
      ],
    };
  });
}
