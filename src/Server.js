import { createServer } from "miragejs";
import product1 from './Assets/shoe-1.jpg';
import product2 from './Assets/shoe-2.jpg';
import product3 from './Assets/shoe-3.jpg';
import product4 from './Assets/shoe-4.jpg';
import product5 from './Assets/shoe-5.jpg';
import product6 from './Assets/shoe-6.jpg';
import product7 from './Assets/shoe-7.jpg';
import product8 from './Assets/shoe-8.jpg';
import product9 from './Assets/shoe-9.jpg';
import product10 from './Assets/shoe-10.jpg';
import product11 from './Assets/shoe-11.jpg';
import product12 from './Assets/shoe-12.jpg';
import product13 from './Assets/shoe-13.jpg';
import product14 from './Assets/shoe-14.jpg';
import product15 from './Assets/shoe-15.jpg';
import product16 from './Assets/shoe-16.jpg';

createServer({
  routes() {
    this.namespace = "api"

    this.get("/shoes", () => {
      return {
        shoes: [
            {
                id: 1,
                productName:"Pink Running Shoes",
                price: 7595,
                productImage: product1,
                age: "Female",
                rating : 5
            },
            {
                id: 2,
                productName:"Classic Sport Shoes",
                price: 8945,
                productImage: product2,
                age: "Kids",
                rating : 1
            },
            {
                id: 3,
                productName:"Green Sneakers",
                price: 14995,
                productImage: product3,
                age: "Male",
                rating : 4
            },
            {
                id: 4,
                productName:"Light Weight Running Shoes",
                price: 6695,
                productImage: product4,
                age: "Male",
                rating : 5
            },
            {
                id: 5,
                productName:"Honey Running Shoes",
                price: 5995,
                productImage: product5,
                age: "Kids",
                rating : 3
            },
            {
                id: 6,
                productName:"Classic Sports",
                price: 4595,
                productImage: product6,
                age: "Kids",
                rating : 2
            },
            {
                id: 7,
                productName:"Teal Casuals",
                price: 8195,
                productImage: product7,
                age: "Female",
                rating : 4
            },
            {
                id: 8,
                productName:"Yellow Sneakers",
                price: 10295,
                productImage: product8,
                age: "Female",
                rating : 3
            },
            {
                id: 9,
                productName:"White Sneakers",
                price: 8295,
                productImage: product9,
                age: "Male",
                rating : 5
            },
            {
                id: 10,
                productName:"Sneakers",
                price: 12795,
                productImage: product10,
                age: "Kids",
                rating : 1
            },
            {
                id: 11,
                productName:"Men's Casual Sneakers",
                price: 7295,
                productImage: product11,
                age: "Kids",
                rating : 4
            },
            {
                id: 12,
                productName:"High Ankel Sneakers",
                price: 7995,
                productImage: product12,
                age: "Male",
                rating : 2
            },
            {
                id: 13,
                productName:"White Sneakers",
                price: 7995,
                productImage: product13,
                age: "Male",
                rating : 5
            },
            {
                id: 14,
                productName:"Blue Sneakers",
                price: 4495,
                productImage: product14,
                age: "Male",
                rating : 3
            },
            {
                id: 15,
                productName:"Pink Sport Shoes",
                price: 4495,
                productImage: product15,
                age: "Female",
                rating : 1
            },
            {
                id: 16,
                productName:"Skin Sports Shoes",
                price: 4495,
                productImage: product16,
                age: "Female",
                rating : 4
            }
        ],
      }
    })
  },
})