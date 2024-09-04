import React, { useState } from "react";
import { useProductStore } from "store/product";

const ProductCard = ({ product }) => {
    return (
        <div style={{ padding: "16px", border: "1px solid #ccc", borderRadius: "8px", marginBottom: "16px" }}>
            <h3>{product?.name}</h3>
            <p>${product?.price}</p>
        </div>
    );
};

export default ProductCard;
