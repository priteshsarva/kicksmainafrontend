import { useState } from "react";

export default function ProductFilters({ onFilterChange, catViseProductsearch }) {
    const [filters, setFilters] = useState({
        brands: [],
        categories: [],
        sizes: [],
        priceRange: [0, 1000],
    });

    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false); // State for mobile dropdown

    // const sizes = {
    //     "40": ["40", "40-m6", "40-6.5", "40-6", "UK 6/EURO 40", "UK 6.5/EURO 40", "UK 6 / EURO 40", "UK-6 EUR-40", "M-6", "m-6", "UK 6|Euro 40", "UK 6.5|EURO 40", "U.K-6 Euro-40", "UK-6 EURO-40", "40-UK 6", "40 UK 6", "EURO 40", "40 - 6", "Euro 40- Uk 6"],
    //     "41": ["41", "41-7.5", "41-m7", "41-7", "UK 7/EURO 41", "UK7.5/EURO 41", "UK 7 / EURO 41", "UK-7 EUR-41", "7.5", "Euro-41. UK-7", "UK-7.5 EUR-41.5", "Uk 7/Euro 41", "7/ Euro 41", "41/7.5", "41/7", "41/7 5", "M7", "Euro 41", "41 7.5", "41-UK7", "41 UK 7", "UK 7", "41-42"],
    //     "42": ["42", "42-8", "42-7.5", "42-m8", "UK 7.5/EURO 42", "UK 8/EURO 42", "UK 8 / EURO 42", "UK-7.5 EUR-42", "m-8", "Euro-42.5 UK-8", "Euro-42. UK-7.5", "UK 8|EURO 42", "UK 8.5|EURO 42", "UK-8 EUR-42", "42-UK 8", "42 UK 8", "EURO 42", "Euro 42-UK 8", "Euro 42-UK 7.5"],
    //     "43": ["43", "43-8.5", "43-9", "43-m9", "UK 8.5/EURO 43", "UK 9/EURO 43", "UK 9 / EURO 43", "UK-8.5 EUR-43", "m-9", "Euro-43. Uk-8.5", "UK 9|EURO 43", "UK 9.5|EURO 43", "UK-9 EUR-43", "43-UK 9", "43 UK 9", "EURO 43", "Euro 43-UK 9", "Euro 43-UK 8.5"],
    //     "44": ["44", "44-9.5", "44-9", "44-m10", "UK 9.5/EURO 44", "UK 10/EURO 44", "UK 10 / EURO 44", "UK-9.5 EUR-44", "m-10", "Euro-44. Uk-9", "UK 10|EURO 44", "UK-10 EUR-44", "44-UK 10", "44 UK 10", "EURO 44", "Euro 44-UK 9", "Euro 44-UK 9.5"],
    //     "45": ["45", "45-10.5", "45-10", "45-m11", "UK 10.5/EURO 45", "UK 11/EURO 45", "UK 11 / EURO 45", "UK-10.5 EUR-45", "m-11", "Euro-45. Uk-10", "UK 10.5|EURO 45", "UK-11 EUR-45", "45-UK 11", "45 UK 11", "EURO 45", "Euro 45-UK 10", "Euro 45-UK 10.5"],
    //     "46": ["46", "46-11", "46-UK 12", "UK 11/EURO 46", "UK-11 EUR-46", "UK-10.5 EUR-46", "EURO 46", "Euro-46. Uk-11"],
    //     "36": ["36", "36-3.5", "U.K-3.5 Euro-36", "U.K-3 Euro-36", "EURO 36"],
    //     "37": ["37", "37-4", "U.K-4 Euro-37", "EURO 37"],
    //     "38": ["38", "38-5", "U.K-5 Euro-38", "U.K-5.5 Euro-39", "EURO 38"],
    //     "39": ["39", "39-6", "U.K-6 Euro-39", "EURO 39"],
    //     "47": ["47", "47/12", "UK 12 / EURO 47", "EURO 47"],
    //     "48": ["48"],
    //     // "nill": ["MONOGRAM", "CHECKED BROWN", "Black", "Brown", "Gold", "Silver", "Purple", "Regular", "Pcs", "S", "XXL", "M", "L", "XL"]
    // };

    // const categories = {
    //     "Men's Shoe": [
    //         "MENS+SHOES", "EID SALE", "Exclusive Offer", "Diwali Dhamaka Sale", "Winter+Dhamaka+Sale",
    //         "Men's Kick", "Diwali Special Sale", "PREMIUM SHOES", "Biggest Sale", "Diwali sale shoes",
    //         "End Of Season Sale", "Shoes", "Diwali Offer 2022", "Men's shoes", "shoes+for+men",
    //         "Shoe for men", "Biggest sale 2025", "DIWALI SALE", "Shoes for Men", "MENS SHOES",
    //         "DIWALI+SALE+", "Men’s Shoes", "Bumper Sale", "Diwali Sale", "Mens+Shoes",
    //         "Mega Sale", "Mens's Sneakers", "Men Shoes", "Sale Product", "Slides-Crocs",
    //         "Sale Products", "MEN’S SHOES", "SPECIAL SALE", "Men’s Footwear", "sell+itam",
    //         "DIWALI+MEN+", "Sale", "Onitsuka+Tiger+Models", "MENS KICKS", "Sale Article"
    //     ],
    //     "Slides/Crocs": [
    //         "FLIPFLOP", "Flipflops/Crocs", "Flip+flops", "Flip-Flop", "Foam&Slide&Crocs",
    //         "Crocs+", "CROCS+SLIDE", "slide+", "crocs+%2B+slide+", "Crocs", "crocs+%2B+slide",
    //         "Flip-flops & Slides", "Birkenstock slide", "Slides+", "crocs", "FLIP/FLOPS",
    //         "Flip-flop", "Flipflops", "FLIP FLOP / SANDALS", "Flip Flops", "FlipFlop & CLOG",
    //         "flip flops", "Flip Flops & Crocs"
    //     ],
    //     "Women's Shoe": [
    //         "WOMANS+SHOES", "Women Sports Shoes", "Women's Kick", "womens", "Ladies Shoes",
    //         "Women's Shoes", "shoes+for+women", "shoes+for+girls", "Shoe for girls", "PREMIUM+HEELS",
    //         "Shoes For Her", "Womans shoes", "women shoes", "Womens+Shoes", "women%27s+%26+men%27s+",
    //         "Womens's Sneakers", "WOMEN’S SHOES", "Women’s Shoes", "Women’s Footwear", "WOMENS SHOES",
    //         "DIWALI+WOMEN+SELL", "Ladies+Shoes", "womens Kicks"
    //     ],
    //     "UA Quality": [
    //         "UA+QUALITY+SHOE", "UA QUALITY SHOES", "Men Sports Shoes", "wall+Clock",
    //         "UA+Quality+Shoes", "Premium Shoes", "UA Quality", "Bottle", "Premium Shoe",
    //         "UA+Models", "UA+QUALITY+SHOES", "Ua Quality", "Premium Article", "Premium kicks"
    //     ],
    //     // "Nill": [
    //     //     "Casual Shoes", "KeyChain", "BAG PACK", "Hoodie Unisex", "50% Off", "Lace", 
    //     //     "Bags", "Hand bags", "Jackets", "FORMAL", "LOFFER", "mojdi", "long+boots", 
    //     //     "SANDAL", "SPORTS", "Belt+", "Wallet+", "Sport Jersey", "Loafer/Formal Shoes", 
    //     //     "Yeezy Foam Runner", "SALE % SALE % SALE", "T-Shirts", "Travelling Bags", "Wallet", 
    //     //     "Belts", "Hoodies", "Clothing", "SALE", "Mens Accessories", "Mens Watch", "Cap", 
    //     //     "Accessories", "Stoles"
    //     // ],
    //     "Formal": [
    //         "Loafers Or Formals", "Formals", "Party Wear Shoes"
    //     ]
    // };


    const sizes = [
        "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46",
        "47", "48"
    ];

    const categories = [
        "Mens Shoes",
        "Slides/Crocs",
        "Women shoes",
        "UA Quality",
        "Formal",
    ];

    const brands = [
        "Nike",
        "Jordan",
        "Yeezy",
        "Airforce",
        "Dunks",
        "Adidas",
        "New Balance",
        "Louis Vuitton",
        "Crocs Slide",
        "Puma",
        "Onitsuka",
        "Asics",
        "Vans",
        "Converse",
        "UA Quality"
    ];


    const handleCheckboxChange = (type, value) => {
        const newFilters = {
            ...filters,
            [type]: filters[type].includes(value.slice(0, 3))
                ? filters[type].filter((item) => item !== value.slice(0, 3))
                : [...filters[type], value.slice(0, 3)],
        };
        console.log(filters[type].includes(value))
        setFilters(newFilters);
        onFilterChange(newFilters);
    };

    const handleRadioChange = (type, value) => {
        const newFilters = {
            ...filters,
            [type]: [value.slice(0, 3)] // Always set as array with single item
        };
        setFilters(newFilters);
        onFilterChange(newFilters);
    };
    const handleToggleableRadio = (type, value) => {
        const newFilters = {
            ...filters,
            [type]: filters[type][0] === value ? [] : [value]
        };
        setFilters(newFilters);
        onFilterChange(newFilters);
    };


    const filterOptions = (e) => {
        const inputValue = e.target.value;

        const newFilters = {
            ...filters,
            searchIncategoryByName: inputValue.toLowerCase()
        };

        onFilterChange(newFilters);

        // const sections = ['brand', 'category', 'size'];

        // sections.forEach(section => {
        //     const labels = document.querySelectorAll(`[id^="${section}-"] + label`);

        //     labels.forEach(label => {
        //         const match = label.innerText.toLowerCase().includes(filter);
        //         label.closest('.form-check')?.classList.toggle('d-none', !match);
        //         label.closest('label.btn')?.classList.toggle('d-none', !match);
        //     });
        // });
    }

    // const handleCheckboxChange = (type, value) => {
    //     let exists = filters[type].map(e=>{
    //         return e[0] == value[0]
    //     })


    //     const newFilters = {
    //         ...filters,
    //         [type]: exists.includes(true)
    //             ? filters[type].filter((item) => {
    //                 console.log(item);
    //                 item !== value
    //             })
    //             : [...filters[type], value],
    //     };
    //     // console.log(filters[type].includes(value))
    //     setFilters(newFilters);
    //     onFilterChange(newFilters);
    // };
    return (
        <>
            {/* Mobile Dropdown Button */}
            {/* <div className="d-block d-sm-none mb-3">
        <button
            className="btn btn-dark w-100"
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
        >
            {isMobileFiltersOpen ? "Hide Filters" : "Show Filters"}

        </button>
    </div> */}

            <div className={`filter-link d-sm-none ${catViseProductsearch ? "d-flex justify-content-between" : "text-end"}`}>
                {console.log(catViseProductsearch)}
                {catViseProductsearch ? <>
                    <div class="mb-3">
                        <div class="input-group">
                            <span class="input-group-text bg-white border-end-0">
                                <i class="bi bi-search"></i>
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                id="filterSearchInput"
                                placeholder="Search "
                                onChange={filterOptions}
                            />
                        </div>
                    </div>
                </> : ""}
                <div onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
                    style={{ cursor: "pointer" }}>
                    <i className="bi bi-funnel-fill"></i>
                    <span>Filter</span>
                </div>


            </div>






            {/* Filters Container */}
            <div
                className={`border-end p-4 ${isMobileFiltersOpen ? "d-block" : "d-none d-sm-block"} sticky-sm-top`}
            >
                {/* Brand Filter - Changed to Radio */}
                <div className="mb-4">
                    <h5 className="fw-bold mb-2">Brands</h5>
                    {brands.map((brand) => {
                        const isActivebrand = filters.brands[0] === brand;
                        return (
                            <div key={brand} className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="brand-radio"
                                    checked={isActivebrand}
                                    id={`brand-${brand}`}
                                    onChange={() => handleToggleableRadio("brands", brand)}
                                // use onChange for radios — triggers only when selected
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor={`brand-${brand}`}
                                // No onClick needed here — clicking label triggers input onChange automatically
                                >
                                    {brand}
                                </label>
                            </div>
                        )
                    })}
                </div>

                {/* Category Filter - Changed to Radio */}
                <div className="mb-4">
                    <h5 className="fw-bold mb-2">Categories</h5>
                    {categories.map((category) => {
                        const isActivecategory = filters.categories[0] === category;
                        return (
                            <div key={category} className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="category-radio"
                                    checked={isActivecategory}
                                    onChange={() => handleToggleableRadio("categories", category)}
                                    id={`category-${category}`}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor={`category-${category}`}
                                >
                                    {category}
                                </label>
                            </div>

                        )
                    })}




                </div>


                {/* Size Filter - Toggleable Radio Buttons */}
                <div className="mb-4">
                    <h5 className="fw-bold mb-2">Sizes</h5>
                    <div className="d-flex flex-wrap gap-2">
                        {sizes.map((size) => {
                            const isActive = filters.sizes[0] === size;
                            return (
                                <label
                                    key={size}
                                    className={`btn btn-outline-dark ${isActive ? "active" : ""}`}
                                    onClick={(e) => {
                                        // Prevent double trigger from input/label
                                        if (e.target.tagName !== 'INPUT') {
                                            handleToggleableRadio("sizes", size);
                                        }
                                    }}
                                >
                                    <input
                                        type="radio"
                                        name="size-radio"
                                        className="d-none"
                                        checked={isActive}
                                        onChange={() => { }}
                                    />
                                    {size}
                                </label>
                            );
                        })}
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
        </>
    );
}