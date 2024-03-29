import bcrypt from 'bcryptjs'

const data = {
    users:[
        {
            name: 'John',
            email: 'admin@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
            
        },
        {
            name: 'Jane',
            email: 'user@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,
            
        },
    ],
products: [
    {
        name: "Free Shirt",
        slug: "free-shirt",
        category: "Shirts",
        image: "/images/shirt1.jpg",
        price: 70,
        brand: "Nike",
        rating: 4.5,
        numReviews: 8,
        countInStock: 20,
        description: "A popular shirt",
        isFeatured: true,
        banner: "/images/banner1.jpg",
    },
    {
        name: "Fit Shirt",
        slug: "fit-shirt",
        category: "Shirts",
        image: "/images/shirt2.jpg",
        price: 80,
        brand: "Adidas",
        rating: 4.5,
        numReviews: 13,
        countInStock: 20,
        description: "A popular shirt",
        isFeatured: true,
        banner: "/images/banner2.jpg",
    },
    {
        name: "Slim Shirt",
        slug: "slim-shirt",
        category: "Shirts",
        image: "/images/shirt3.jpg",
        price: 80,
        brand: "Raymond",
        rating: 3.2,
        numReviews: 10,
        countInStock: 20,
        description: "A popular shirt",
        isFeatured: true,
        
    },
    {
        name: "Golf Pants",
        slug: "golf-pants",
        category: "Pants",
        image: "/images/pants1.jpg",
        price: 90,
        brand: "Oliver",
        rating: 2.9,
        numReviews: 10,
        countInStock: 20,
        description: "Smart looking pants",
        isFeatured: true,
        
    },
    {
        name: "Fit Pants",
        slug: "fit-pants",
        category: "Pants",
        image: "/images/pants2.jpg",
        price: 85,
        brand: "Zara",
        rating: 3.9,
        numReviews: 17,
        countInStock: 20,
        description: "A popular pants",
        isFeatured: true,
        
    },
    {
        name: "Classic Pants",
        slug: "classic-pants",
        category: "Pants",
        image: "/images/pants3.jpg",
        price: 75,
        brand: "Casely",
        rating: 2.3,
        numReviews: 14,
        countInStock: 20,
        description: "A popular pants",
        isFeatured: true,
        
    },
]
}

export default data;