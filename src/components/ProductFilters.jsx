import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ProductFilters({ onFilterChange }) {
    const [filters, setFilters] = useState({
        brands: [],
        categories: [],
        sizes: [],
        priceRange: [0, 1000],
    });

    const brands = ["Nike", "Adidas", "Puma", "New Balance"];
    const categories = ["Sneakers", "Boots", "Sandals"];
    const sizes = ["6", "7", "8", "9", "10", "11"];

    const handleCheckboxChange = (type, value) => {
        const newFilters = {
            ...filters,
            [type]: filters[type].includes(value)
                ? filters[type].filter((item) => item !== value)
                : [...filters[type], value],
        };
        setFilters(newFilters);
        onFilterChange(newFilters);
    };

    return (
        <div className="border-end p-4 " 
        // style={{ width: "250px" }}
        >
            {/* Brand Filter */}
            <div className="mb-4">
                <h5 className="fw-bold mb-2">Brands</h5>
                {brands.map((brand) => (
                    <div key={brand} className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            checked={filters.brands.includes(brand)}
                            onChange={() => handleCheckboxChange("brands", brand)}
                            id={`brand-${brand}`}
                        />
                        <label className="form-check-label" htmlFor={`brand-${brand}`}>
                            {brand}
                        </label>
                    </div>
                ))}
            </div>

            {/* Category Filter */}
            <div className="mb-4">
                <h5 className="fw-bold mb-2">Categories</h5>
                {categories.map((category) => (
                    <div key={category} className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            checked={filters.categories.includes(category)}
                            onChange={() => handleCheckboxChange("categories", category)}
                            id={`category-${category}`}
                        />
                        <label className="form-check-label text-capitalize" htmlFor={`category-${category}`}>
                            {category}
                        </label>
                    </div>
                ))}
            </div>

            {/* Size Filter */}
            <div className="mb-4">
                <h5 className="fw-bold mb-2">Sizes</h5>
                <div className="d-flex flex-wrap gap-2">
                    {sizes.map((size) => (
                        <label
                            key={size}
                            className={`btn btn-outline-dark ${filters.sizes.includes(size) ? "active" : ""
                                }`}
                        >
                            <input
                                type="checkbox"
                                className="d-none"
                                checked={filters.sizes.includes(size)}
                                onChange={() => handleCheckboxChange("sizes", size)}
                            />
                            {size}
                        </label>
                    ))}
                </div>
            </div>

            {/* Price Range Filter */}
            {/* <div>
                <h5 className="fw-bold mb-2">Price Range</h5>
                <input
                    type="range"
                    className="form-range"
                    min="0"
                    max="1000"
                    value={filters.priceRange[1]}
                    onChange={(e) => {
                        const newFilters = {
                            ...filters,
                            priceRange: [0, parseInt(e.target.value)],
                        };
                        setFilters(newFilters);
                        onFilterChange(newFilters);
                    }}
                />
                <div className="d-flex justify-content-between text-muted">
                    <span>$0</span>
                    <span>${filters.priceRange[1]}</span>
                </div>
            </div> */}
        </div>
    );
}
