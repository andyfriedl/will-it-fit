"use client";

import { useEffect, useState } from "react";
import Card from "@/components/Card";
import { vehicles } from "@/data/vehicles";
import { createVehicleSlug } from "@/utils/utils";
import { products } from "@/data/products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function FitCheckPage() {
    const [selectedVehicleSlug, setSelectedVehicleSlug] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [cartProducts, setCartProducts] = useState<typeof products>([]);

    useEffect(() => {
        const savedVehicleSlug = localStorage.getItem("selectedVehicleSlug");

        if (savedVehicleSlug) {
            setSelectedVehicleSlug(savedVehicleSlug);
        }
    }, []);

    const selectedVehicle = vehicles.find((vehicle) => {
        const slug = createVehicleSlug(vehicle.year, vehicle.make, vehicle.model);
        return slug === selectedVehicleSlug;
    });

    const normalizedSearchQuery = searchQuery
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    const filteredProducts = products.filter((product) => {
        const normalizedName = product.name
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

        return (
            normalizedName.includes(normalizedSearchQuery) ||
            product.productId.toString().includes(normalizedSearchQuery)
        );
    });

    function handleAddToCart(product: (typeof products)[number]) {
        setCartProducts((currentCart) => [...currentCart, product]);
    }

    return (
        <main >
            <h1>Will It Fit?</h1>

            <Card>
                <div className="card-header-row">
                    <h2>Selected Vehicle</h2>

                    <div className="cart-badge">
                        <FontAwesomeIcon icon={faCartShopping} />  {cartProducts.length}
                    </div>
                </div>

                {selectedVehicle ? (
                    <p>
                        {selectedVehicle.year} {selectedVehicle.make}{" "}
                        {selectedVehicle.model}
                    </p>
                ) : (
                    <p>No vehicle selected yet.</p>
                )}
            </Card>

            <Card variant="secondary">
                <h2>Search for Products</h2>

                <input
                    type="text"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Product name or number"
                    className="product-search-input"
                />

                {searchQuery && (
                    <div className="product-results">
                        <div className="product-results__header">
                            <h2>Suggested Matches</h2>
                            <p>{filteredProducts.length} items found</p>
                        </div>

                        {filteredProducts.map((product) => {
                            return (
                                <div className="product-result-card" key={product.productId}>
                                    <h2>{product.name}</h2>
                                    <p>Product #{product.productId}</p>
                                    <p>
                                        {product.width} × {product.height} × {product.depth} in
                                    </p>

                                    <button
                                        className="card-action-primary"
                                        onClick={() => handleAddToCart(product)}
                                    >
                                        Add to Cart →
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                )}
            </Card>
        </main>
    );
}