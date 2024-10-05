import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // For React Router
// or import { useRouter } from 'next/router'; for Next.js

const ProductDetails = () => {
    const { id } = useParams(); // For React Router
    // const router = useRouter(); // For Next.js
    const [product, setProduct] = useState(null);

    const backendUrl = process.env.VITE_BACKEND_URL;

    useEffect(() => {
        const fetchProductDetails = async () => {
            const response = await fetch(`${backendUrl}/api/v1/products/${id}`);
            const data = await response.json();
            setProduct(data);
        };

        fetchProductDetails();
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.img} alt={product.title} />
            <p>{product.price}</p>
            <p>{product.description}</p>
            {/* Add more product details here */}
        </div>
    );
};

export default ProductDetails;
