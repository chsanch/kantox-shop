export default function() {
  this.namespace = 'api';

  this.get('/products', function () {
    return {
      data: [
        {
          type: "products",
          id: 1,
          attributes: {
            name: "Green tea",
            price: 3.11,
            image: "https://cdn-prod.medicalnewstoday.com/content/images/articles/269/269538/green-tea-in-a-cup.jpg"
          }
        },
        {
          type: "products",
          id: 2,
          attributes: {
            name: "Strawberries",
            price: 5.00,
            image: "https://www.whatchefswant.com/wp-content/uploads/2019/02/strawberries.jpg"
          }
        },
        {
          type: "products",
          id: 3,
          attributes: {
            name: "Coffee",
            price: 11.23,
            image: "https://athome.starbucks.com/sites/site.prod.athome.starbucks.com/files/2019-06/CoffeeFinder_ArticleHeader_Desktop_1176x712.jpg"
          }
        }
      ]
    }
  });
}
