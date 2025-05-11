import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavBaar from './components/Navbar';
import './index.css';
import HeroSection from './components/HeroSection';
import ShopBrand from './components/shopBrand';
import FooterOne from './components/FooterOne';
import './custombootstrap.css';
import ShoeCarousel from './components/ShoeCarousel';
import FeaturedCategories from './components/FeaturedCategories';
import SingleCollection from './components/SingleCollection';
import ProductPage from './components/ProductPage';
import TermsOfService from './components/legal/TermsOfService';
import ReturnPolicy from './components/legal/ReturnPolicy';
import ShippingPolicy from './components/legal/ShippingPolicy';
import Faq from './components/legal/Faq';
import ProductGride from './components/ProductGride';
import ProductFilters from './components/ProductFilters';
import PriivacyPolicy from './components/legal/PriivacyPolicy';
import ProductPageWithPrive from './components/ProductPageWithPrive';
import Loader from './components/Loader';
import AllProducts from './components/AllProducts';



const App = () => {

  const [products, setproducts] = useState('')



  if (products == '') {

    // setTimeout(() => {
    //   setproducts(
    //     [
    //       {
    //         "productId": 7,
    //         "productName": "Adidass Palace X Puig Samba Black Fix Rate 291",
    //         "productDateCreation": "2025-03-17 06:31:54",
    //         "productLastUpdated": 1746640182665,
    //         "productPrice": null,
    //         "productPriceWithoutDiscount": null,
    //         "productOriginalPrice": 999,
    //         "productFetchedFrom": "https://metro-kicks.cartpe.in/",
    //         "productUrl": "https://metro-kicks.cartpe.in/adidass-palace-x-puig-samba-black-fix-rate-291-metro-kicks.html?color=",
    //         "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/675ea8439b211.jpeg",
    //         "imageUrl": "[\"https://cdn.cartpe.in/images/gallery_md/675ea8439b211.jpeg\"]",
    //         "productShortDescription": null,
    //         "productDescription": null,
    //         "productBrand": "Adidass Palace",
    //         "sizeName": "[\"45\"]",
    //         "catName": "Monsoon+Dhamaka+Sale"
    //       },
    //       {
    //         "productId": 8,
    //         "productName": "Nikee Dunk Low Hyperflat Multi Colour Same Box As Shown In Picture Fix 232",
    //         "productDateCreation": "2025-03-17 06:31:54",
    //         "productLastUpdated": 1746640182698,
    //         "productPrice": null,
    //         "productPriceWithoutDiscount": null,
    //         "productOriginalPrice": 999,
    //         "productFetchedFrom": "https://metro-kicks.cartpe.in/",
    //         "productUrl": "https://metro-kicks.cartpe.in/nikee-dunk-low-hyperflat-multi-colour-same-box-as-shown-in-picture-fix-232-metro-kicks.html?color=",
    //         "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/675ea7018b363.jpeg",
    //         "imageUrl": "[\"https://cdn.cartpe.in/images/gallery_md/675ea7018b363.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/675ea701b5b95.jpeg\"]",
    //         "productShortDescription": null,
    //         "productDescription": null,
    //         "productBrand": "Nikee Dunk",
    //         "sizeName": "[\"45\"]",
    //         "catName": "Monsoon+Dhamaka+Sale"
    //       },
    //       {
    //         "productId": 13,
    //         "productName": "Crocss Classic Hiker Multi Black #352",
    //         "productDateCreation": "2025-03-17 06:31:54",
    //         "productLastUpdated": 1746640182719,
    //         "productPrice": null,
    //         "productPriceWithoutDiscount": null,
    //         "productOriginalPrice": 699,
    //         "productFetchedFrom": "https://metro-kicks.cartpe.in/",
    //         "productUrl": "https://metro-kicks.cartpe.in/crocss-classic-hiker-multi-black-352-metro-kicks.html?color=",
    //         "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/668fb25fcde96.jpeg",
    //         "imageUrl": "[\"https://cdn.cartpe.in/images/gallery_md/668fb25fcde96.jpeg\"]",
    //         "productShortDescription": null,
    //         "productDescription": null,
    //         "productBrand": "Crocss Classic",
    //         "sizeName": "[\"M-11\"]",
    //         "catName": "Monsoon+Dhamaka+Sale"
    //       },
    //       {
    //         "productId": 97,
    //         "productName": "Nikee SB Dunk \"Chunky Dunky\" #564",
    //         "productDateCreation": "2025-03-17 07:46:58",
    //         "productLastUpdated": 1745511137901,
    //         "productPrice": null,
    //         "productPriceWithoutDiscount": null,
    //         "productOriginalPrice": 1800,
    //         "productFetchedFrom": "https://metro-kicks.cartpe.in/",
    //         "productUrl": "https://metro-kicks.cartpe.in/nikee-sb-dunk-chunky-dunky-553-metro-kicks.html?color=",
    //         "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/67953c43ac251.jpeg",
    //         "imageUrl": "[\"https://cdn.cartpe.in/images/gallery_md/67953c43ac251.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/67953c43f045f.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/67953c442cab5.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/67953c44618ae.jpeg\"]",
    //         "productShortDescription": null,
    //         "productDescription": null,
    //         "productBrand": "Nikee SB",
    //         "sizeName": "[\"42\"]",
    //         "catName": "Men's Kick"
    //       },
    //       {
    //         "productId": 98,
    //         "productName": "Air Jordan Retro 4 \"Black-Cat\" #233",
    //         "productDateCreation": "2025-03-17 07:46:58",
    //         "productLastUpdated": 1745511139233,
    //         "productPrice": null,
    //         "productPriceWithoutDiscount": null,
    //         "productOriginalPrice": 2600,
    //         "productFetchedFrom": "https://metro-kicks.cartpe.in/",
    //         "productUrl": "https://metro-kicks.cartpe.in/air-jordan-retro-4-black-cat-233-metro-kicks.html?color=",
    //         "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/67952f4067c57.jpeg",
    //         "imageUrl": "[\"https://cdn.cartpe.in/images/gallery_md/67952f4067c57.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/67952f41ad7bf.jpeg\"]",
    //         "productShortDescription": null,
    //         "productDescription": null,
    //         "productBrand": "Air Jordan",
    //         "sizeName": "[\"42\"]",
    //         "catName": "Men's Kick"
    //       },
    //       {
    //         "productId": 99,
    //         "productName": "Amirii MA-1 \"Black-Alabaster\" #551",
    //         "productDateCreation": "2025-03-17 07:46:58",
    //         "productLastUpdated": 1745511139285,
    //         "productPrice": null,
    //         "productPriceWithoutDiscount": null,
    //         "productOriginalPrice": 2500,
    //         "productFetchedFrom": "https://metro-kicks.cartpe.in/",
    //         "productUrl": "https://metro-kicks.cartpe.in/amirii-ma-1-black-alabaster-551-metro-kicks.html?color=",
    //         "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/67952e7bbd469.jpeg",
    //         "imageUrl": "[\"https://cdn.cartpe.in/images/gallery_md/67952e7bbd469.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/67952e7a21eab.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/67952e7d2be2e.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/67952e7ef19c4.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/67952e7fe6096.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/67952e7fee1d7.jpeg\"]",
    //         "productShortDescription": null,
    //         "productDescription": null,
    //         "productBrand": "Amirii MA-1",
    //         "sizeName": "[\"42\",\"43\"]",
    //         "catName": "Men's Kick"
    //       },
    //       {
    //         "productId": 100,
    //         "productName": "Nikee Zoom Alphafly 3 \"Hyper-Pink\" #549",
    //         "productDateCreation": "2025-03-17 07:46:58",
    //         "productLastUpdated": 1745511137967,
    //         "productPrice": null,
    //         "productPriceWithoutDiscount": null,
    //         "productOriginalPrice": 2400,
    //         "productFetchedFrom": "https://metro-kicks.cartpe.in/",
    //         "productUrl": "https://metro-kicks.cartpe.in/nikee-zoom-alphafly-3-hyper-pink-549-metro-kicks.html?color=",
    //         "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/677d325603c85.jpeg",
    //         "imageUrl": "[\"https://cdn.cartpe.in/images/gallery_md/677d325603c85.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677d325681c84.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677d32594cb9e.jpeg\"]",
    //         "productShortDescription": null,
    //         "productDescription": null,
    //         "productBrand": "Nikee Zoom",
    //         "sizeName": "[\"41\",\"43\",\"44\",\"45\"]",
    //         "catName": "Men's Kick"
    //       },
    //       {
    //         "productId": 102,
    //         "productName": "Nikee Airforce 1 White \"Pure Leather\" (Heavy Quality) #189",
    //         "productDateCreation": "2025-03-17 07:46:58",
    //         "productLastUpdated": 1745511138279,
    //         "productPrice": null,
    //         "productPriceWithoutDiscount": null,
    //         "productOriginalPrice": 1500,
    //         "productFetchedFrom": "https://metro-kicks.cartpe.in/",
    //         "productUrl": "https://metro-kicks.cartpe.in/nikee-airforce-1-white-pure-leather-heavy-quality-189-metro-kicks.html?color=",
    //         "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/6763001caa7af.jpeg",
    //         "imageUrl": "[\"https://cdn.cartpe.in/images/gallery_md/6763001caa7af.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/6763001ca2e72.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/6763001ca5e24.jpeg\"]",
    //         "productShortDescription": null,
    //         "productDescription": null,
    //         "productBrand": "Nikee Airforce",
    //         "sizeName": "[\"40\",\"41\",\"45\"]",
    //         "catName": "Men's Kick"
    //       },
    //       {
    //         "productId": 104,
    //         "productName": "Adidass UB Ultraboost 23 Light Boost Grey Noir Blanc 495",
    //         "productDateCreation": "2025-03-17 07:46:58",
    //         "productLastUpdated": 1742372974037,
    //         "productPrice": null,
    //         "productPriceWithoutDiscount": null,
    //         "productOriginalPrice": 2200,
    //         "productFetchedFrom": "https://metro-kicks.cartpe.in/",
    //         "productUrl": "https://metro-kicks.cartpe.in/adidass-ub-ultraboost-23-light-boost-grey-noir-blanc-495-metro-kicks.html?color=",
    //         "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/675f016389493.jpeg",
    //         "imageUrl": "[\"https://cdn.cartpe.in/images/gallery_md/675f016389493.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/675f01642b424.jpeg\"]",
    //         "productShortDescription": null,
    //         "productDescription": null,
    //         "productBrand": "Adidass UB",
    //         "sizeName": "[\"41\",\"42\",\"43\",\"44\",\"45\"]",
    //         "catName": "Men's Kick"
    //       },
    //       {
    //         "productId": 106,
    //         "productName": "Adidass AE 1 \"Velocity\" #565",
    //         "productDateCreation": "2025-03-17 07:46:58",
    //         "productLastUpdated": 1745511137721,
    //         "productPrice": null,
    //         "productPriceWithoutDiscount": null,
    //         "productOriginalPrice": 2300,
    //         "productFetchedFrom": "https://metro-kicks.cartpe.in/",
    //         "productUrl": "https://metro-kicks.cartpe.in/adidass-ae-1-velocity-564-metro-kicks.html?color=",
    //         "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/67977c9134f0d.jpeg",
    //         "imageUrl": "[\"https://cdn.cartpe.in/images/gallery_md/67977c9134f0d.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/67977c9240f48.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/67977c9250ac4.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/67977c92b5e3a.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/67977c92c073f.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/67977c92d661e.jpeg\"]",
    //         "productShortDescription": null,
    //         "productDescription": null,
    //         "productBrand": "Adidass AE",
    //         "sizeName": "[\"41\"]",
    //         "catName": "Men's Kick"
    //       },
    //       {
    //         "productId": 107,
    //         "productName": "Nikee SB Dunk \"Blossam Pink\"#563",
    //         "productDateCreation": "2025-03-17 07:46:58",
    //         "productLastUpdated": 1745511137772,
    //         "productPrice": null,
    //         "productPriceWithoutDiscount": null,
    //         "productOriginalPrice": 1900,
    //         "productFetchedFrom": "https://metro-kicks.cartpe.in/",
    //         "productUrl": "https://metro-kicks.cartpe.in/nikee-sb-dunk-blossam-pink-metro-kicks.html?color=",
    //         "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/6795624c02af2.jpeg",
    //         "imageUrl": "[\"https://cdn.cartpe.in/images/gallery_md/6795624c02af2.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/6795624c1157b.jpeg\"]",
    //         "productShortDescription": null,
    //         "productDescription": null,
    //         "productBrand": "Nikee SB",
    //         "sizeName": "[\"42\",\"43\",\"44\"]",
    //         "catName": "Men's Kick"
    //       },
    //       {
    //         "productId": 108,
    //         "productName": "Nikee SB Dunk Low \"PowerPuff Buttercup* #562",
    //         "productDateCreation": "2025-03-17 07:46:59",
    //         "productLastUpdated": 1742372974141,
    //         "productPrice": null,
    //         "productPriceWithoutDiscount": null,
    //         "productOriginalPrice": 2500,
    //         "productFetchedFrom": "https://metro-kicks.cartpe.in/",
    //         "productUrl": "https://metro-kicks.cartpe.in/nikee-sb-low-powerpuff-buttercup-562-metro-kicks.html?color=",
    //         "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/6795615b0b739.jpeg",
    //         "imageUrl": "[\"https://cdn.cartpe.in/images/gallery_md/6795615b0b739.jpeg\"]",
    //         "productShortDescription": null,
    //         "productDescription": null,
    //         "productBrand": "Nikee SB",
    //         "sizeName": "[\"41\",\"42\",\"43\",\"44\",\"45\"]",
    //         "catName": "Men's Kick"
    //       },
    //       {
    //         "productId": 109,
    //         "productName": "New Balance 550 \"EverGreen\" #283",
    //         "productDateCreation": "2025-03-17 07:46:59",
    //         "productLastUpdated": 1745511138986,
    //         "productPrice": null,
    //         "productPriceWithoutDiscount": null,
    //         "productOriginalPrice": 1900,
    //         "productFetchedFrom": "https://metro-kicks.cartpe.in/",
    //         "productUrl": "https://metro-kicks.cartpe.in/new-balance-550-evergreen-283-metro-kicks5770.html?color=",
    //         "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/679560520cdc2.jpeg",
    //         "imageUrl": "[\"https://cdn.cartpe.in/images/gallery_md/679560520cdc2.jpeg\"]",
    //         "productShortDescription": null,
    //         "productDescription": null,
    //         "productBrand": "New Balance",
    //         "sizeName": "[\"41\",\"42\"]",
    //         "catName": "Men's Kick"
    //       },
    //       {
    //         "productId": 111,
    //         "productName": "New Balance XC 72 \"CastleRock\" #561",
    //         "productDateCreation": "2025-03-17 07:46:59",
    //         "productLastUpdated": "2025-03-17 07:46:59",
    //         "productPrice": null,
    //         "productPriceWithoutDiscount": null,
    //         "productOriginalPrice": 2200,
    //         "productFetchedFrom": "https://metro-kicks.cartpe.in/",
    //         "productUrl": "https://metro-kicks.cartpe.in/new-balance-xc-72-castlerock-561-metro-kicks.html?color=",
    //         "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/67955f953daa0.jpeg",
    //         "imageUrl": "[\"https://cdn.cartpe.in/images/gallery_md/67955f953daa0.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/67955f95347d4.jpeg\"]",
    //         "productShortDescription": null,
    //         "productDescription": null,
    //         "productBrand": "New Balance",
    //         "sizeName": "[\"41\",\"42\",\"43\",\"44\"]",
    //         "catName": "Men's Kick"
    //       },
    //       {
    //         "productId": 113,
    //         "productName": "Pumaa Fast RB-Nitro Elite \"Black SunSets Glow\" #559",
    //         "productDateCreation": "2025-03-17 07:46:59",
    //         "productLastUpdated": 1745511137803,
    //         "productPrice": null,
    //         "productPriceWithoutDiscount": null,
    //         "productOriginalPrice": 2700,
    //         "productFetchedFrom": "https://metro-kicks.cartpe.in/",
    //         "productUrl": "https://metro-kicks.cartpe.in/pumaa-fast-rb-nitro-elite-black-sunsets-glow-559-metro-kicks.html?color=",
    //         "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/679559d4d7c1c.jpeg",
    //         "imageUrl": "[\"https://cdn.cartpe.in/images/gallery_md/679559d4d7c1c.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/679559d5196df.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/679559d55d732.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/679559d5697c8.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/679559d586316.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/679559d588b2d.jpeg\"]",
    //         "productShortDescription": null,
    //         "productDescription": null,
    //         "productBrand": "Pumaa Fast",
    //         "sizeName": "[\"43\"]",
    //         "catName": "Men's Kick"
    //       },
    //       {
    //         "productId": 114,
    //         "productName": "Zion Williamson X Air Jordan 1 Low OG Box #309",
    //         "productDateCreation": "2025-03-17 07:46:59",
    //         "productLastUpdated": 1745511139164,
    //         "productPrice": null,
    //         "productPriceWithoutDiscount": null,
    //         "productOriginalPrice": 2200,
    //         "productFetchedFrom": "https://metro-kicks.cartpe.in/",
    //         "productUrl": "https://metro-kicks.cartpe.in/zion-williomson-x-air-jordan-1-low-og-box-309-metro-kicks2305.html?color=",
    //         "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/67955716b7039.jpeg",
    //         "imageUrl": "[\"https://cdn.cartpe.in/images/gallery_md/67955716b7039.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/67955716adf20.jpeg\"]",
    //         "productShortDescription": null,
    //         "productDescription": null,
    //         "productBrand": "Zion Williamson",
    //         "sizeName": "[\"42\"]",
    //         "catName": "Men's Kick"
    //       },
    //       {
    //         "productId": 115,
    //         "productName": "Balenciaga Triple S \"Crem White\" \"557",
    //         "productDateCreation": "2025-03-17 07:46:59",
    //         "productLastUpdated": 1745511137833,
    //         "productPrice": null,
    //         "productPriceWithoutDiscount": null,
    //         "productOriginalPrice": 2800,
    //         "productFetchedFrom": "https://metro-kicks.cartpe.in/",
    //         "productUrl": "https://metro-kicks.cartpe.in/balenciaga-triple-s-crem-white-557-metro-kicks.html?color=",
    //         "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/679555e7ccf2d.jpeg",
    //         "imageUrl": "[\"https://cdn.cartpe.in/images/gallery_md/679555e7ccf2d.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/679555e68b963.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/679555e70ace3.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/679555e7e9065.jpeg\"]",
    //         "productShortDescription": null,
    //         "productDescription": null,
    //         "productBrand": "Balenciaga Triple",
    //         "sizeName": "[\"41\",\"42\",\"43\"]",
    //         "catName": "Men's Kick"
    //       },
    //       {
    //         "productId": 116,
    //         "productName": "Cloud Horizon \"Black Alloy\" #556",
    //         "productDateCreation": "2025-03-17 07:46:59",
    //         "productLastUpdated": 1745511139205,
    //         "productPrice": null,
    //         "productPriceWithoutDiscount": null,
    //         "productOriginalPrice": 2700,
    //         "productFetchedFrom": "https://metro-kicks.cartpe.in/",
    //         "productUrl": "https://metro-kicks.cartpe.in/cloud-horizon-black-alloy-556-metro-kicks.html?color=",
    //         "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/67955489c45a7.jpeg",
    //         "imageUrl": "[\"https://cdn.cartpe.in/images/gallery_md/67955489c45a7.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/6795548a6a84f.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/6795548ae2712.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/6795548aecdca.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/6795548aedc96.jpeg\"]",
    //         "productShortDescription": null,
    //         "productDescription": null,
    //         "productBrand": "Cloud Horizon",
    //         "sizeName": "[\"44\"]",
    //         "catName": "Men's Kick"
    //       },
    //       {
    //         "productId": 118,
    //         "productName": "Nikee SB Dunk Low \"Racing Buggy Sand Scorcher\" #554",
    //         "productDateCreation": "2025-03-17 07:46:59",
    //         "productLastUpdated": 1745511137867,
    //         "productPrice": null,
    //         "productPriceWithoutDiscount": null,
    //         "productOriginalPrice": 2000,
    //         "productFetchedFrom": "https://metro-kicks.cartpe.in/",
    //         "productUrl": "https://metro-kicks.cartpe.in/nikee-sb-dunk-low-racing-buggy-sand-scorcher-554-metro-kicks.html?color=",
    //         "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/67953e700f4ec.jpeg",
    //         "imageUrl": "[\"https://cdn.cartpe.in/images/gallery_md/67953e700f4ec.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/67953e7053da3.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/67953e712e00a.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/67953e714ddd7.jpeg\"]",
    //         "productShortDescription": null,
    //         "productDescription": null,
    //         "productBrand": "Nikee SB",
    //         "sizeName": "[\"44\"]",
    //         "catName": "Men's Kick"
    //       },
    //       {
    //         "productId": 121,
    //         "productName": "Adidass Adizero Aruku \"Grey-Cream\" #550",
    //         "productDateCreation": "2025-03-17 07:46:59",
    //         "productLastUpdated": 1745511137933,
    //         "productPrice": null,
    //         "productPriceWithoutDiscount": null,
    //         "productOriginalPrice": 2000,
    //         "productFetchedFrom": "https://metro-kicks.cartpe.in/",
    //         "productUrl": "https://metro-kicks.cartpe.in/adidass-adizero-aruku-grey-cream-550-metro-kicks.html?color=",
    //         "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/677d33d3cd1f0.jpeg",
    //         "imageUrl": "[\"https://cdn.cartpe.in/images/gallery_md/677d33d3cd1f0.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677d33d3958d0.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677d33d39d732.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677d33d3a8f2a.jpeg\"]",
    //         "productShortDescription": null,
    //         "productDescription": null,
    //         "productBrand": "Adidass Adizero",
    //         "sizeName": "[\"44\",\"45\"]",
    //         "catName": "Men's Kick"
    //       },
    //       {
    //         "productId": 122,
    //         "productName": "Nikee Zoom Alphafly 3 \"Eliud Kipchoge\" #548",
    //         "productDateCreation": "2025-03-17 07:46:59",
    //         "productLastUpdated": 1745511138005,
    //         "productPrice": null,
    //         "productPriceWithoutDiscount": null,
    //         "productOriginalPrice": 2400,
    //         "productFetchedFrom": "https://metro-kicks.cartpe.in/",
    //         "productUrl": "https://metro-kicks.cartpe.in/nikee-zoom-alphafly-3-eliud-kipchoge-548-metro-kicks.html?color=",
    //         "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/677d2fdd2ab51.jpeg",
    //         "imageUrl": "[\"https://cdn.cartpe.in/images/gallery_md/677d2fdd2ab51.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677d2fde60353.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677d2fe115748.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677d2fe117385.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677d2fe159dc7.jpeg\"]",
    //         "productShortDescription": null,
    //         "productDescription": null,
    //         "productBrand": "Nikee Zoom",
    //         "sizeName": "[\"45\"]",
    //         "catName": "Men's Kick"
    //       },
    //       {
    //         "productId": 123,
    //         "productName": "Nikee Blazer City Low \"Black-White\" #543",
    //         "productDateCreation": "2025-03-17 07:46:59",
    //         "productLastUpdated": "2025-03-17 07:46:59",
    //         "productPrice": null,
    //         "productPriceWithoutDiscount": null,
    //         "productOriginalPrice": 2500,
    //         "productFetchedFrom": "https://metro-kicks.cartpe.in/",
    //         "productUrl": "https://metro-kicks.cartpe.in/nikee-blazer-city-low-black-white-543-metro-kicks.html?color=",
    //         "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/677d1aa4b478e.jpeg",
    //         "imageUrl": "[\"https://cdn.cartpe.in/images/gallery_md/677d1aa4b478e.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677d1aa4a5902.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677d1aa726627.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677d1ab5f0e39.jpeg\"]",
    //         "productShortDescription": null,
    //         "productDescription": null,
    //         "productBrand": "Nikee Blazer",
    //         "sizeName": "[\"45\"]",
    //         "catName": "Men's Kick"
    //       },
    //       {
    //         "productId": 126,
    //         "productName": "Adidass Samba White Mens #118",
    //         "productDateCreation": "2025-03-17 07:46:59",
    //         "productLastUpdated": 1745511139357,
    //         "productPrice": null,
    //         "productPriceWithoutDiscount": null,
    //         "productOriginalPrice": 1600,
    //         "productFetchedFrom": "https://metro-kicks.cartpe.in/",
    //         "productUrl": "https://metro-kicks.cartpe.in/adidass-samba-white-mens-118-metro-kicks376.html?color=",
    //         "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/677cc9babcda8.jpeg",
    //         "imageUrl": "[\"https://cdn.cartpe.in/images/gallery_md/677cc9babcda8.jpeg\"]",
    //         "productShortDescription": null,
    //         "productDescription": null,
    //         "productBrand": "Adidass Samba",
    //         "sizeName": "[\"43\"]",
    //         "catName": "Men's Kick"
    //       },
    //       {
    //         "productId": 127,
    //         "productName": "Adidass X END Samba Consortium Cup Ecru Tint #407",
    //         "productDateCreation": "2025-03-17 07:46:59",
    //         "productLastUpdated": 1745511139400,
    //         "productPrice": null,
    //         "productPriceWithoutDiscount": null,
    //         "productOriginalPrice": 1900,
    //         "productFetchedFrom": "https://metro-kicks.cartpe.in/",
    //         "productUrl": "https://metro-kicks.cartpe.in/adidass-x-end-samba-consortium-cup-ecru-tint-407-metro-kicks56.html?color=",
    //         "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/677cc954ceb84.jpeg",
    //         "imageUrl": "[\"https://cdn.cartpe.in/images/gallery_md/677cc954ceb84.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677cc954b72ae.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677cc954ceaed.jpeg\"]",
    //         "productShortDescription": null,
    //         "productDescription": null,
    //         "productBrand": "Adidass X",
    //         "sizeName": "[\"41\"]",
    //         "catName": "Men's Kick"
    //       },
    //       {
    //         "productId": 130,
    //         "productName": "Air Jordan Retro 4 \"White Cement\" #474",
    //         "productDateCreation": "2025-03-17 07:46:59",
    //         "productLastUpdated": 1745511139429,
    //         "productPrice": null,
    //         "productPriceWithoutDiscount": null,
    //         "productOriginalPrice": 2500,
    //         "productFetchedFrom": "https://metro-kicks.cartpe.in/",
    //         "productUrl": "https://metro-kicks.cartpe.in/air-jordan-retro-4-white-cement-474-metro-kicks6531.html?color=",
    //         "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/677cc5ad0facf.jpeg",
    //         "imageUrl": "[\"https://cdn.cartpe.in/images/gallery_md/677cc5ad0facf.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677cc5ad07315.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677cc5ad17cfd.jpeg\"]",
    //         "productShortDescription": null,
    //         "productDescription": null,
    //         "productBrand": "Air Jordan",
    //         "sizeName": "[\"43\",\"45\"]",
    //         "catName": "Men's Kick"
    //       },
    //       {
    //         "productId": 131,
    //         "productName": "Air Jordan Retro 4 \"SE Craft\" #536",
    //         "productDateCreation": "2025-03-17 07:46:59",
    //         "productLastUpdated": "2025-03-17 07:46:59",
    //         "productPrice": null,
    //         "productPriceWithoutDiscount": null,
    //         "productOriginalPrice": 2600,
    //         "productFetchedFrom": "https://metro-kicks.cartpe.in/",
    //         "productUrl": "https://metro-kicks.cartpe.in/air-jordan-retro-4-se-carft-metro-kicks.html?color=",
    //         "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/677cc502ab053.jpeg",
    //         "imageUrl": "[\"https://cdn.cartpe.in/images/gallery_md/677cc502ab053.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677cc502cb7f7.jpeg\"]",
    //         "productShortDescription": null,
    //         "productDescription": null,
    //         "productBrand": "Air Jordan",
    //         "sizeName": "[\"41\"]",
    //         "catName": "Men's Kick"
    //       },
    //       {
    //         "productId": 132,
    //         "productName": "Nikee Cortex SE Pack \"Metallic Cool Grey\" #537",
    //         "productDateCreation": "2025-03-17 07:46:59",
    //         "productLastUpdated": "2025-03-17 07:46:59",
    //         "productPrice": null,
    //         "productPriceWithoutDiscount": null,
    //         "productOriginalPrice": 2500,
    //         "productFetchedFrom": "https://metro-kicks.cartpe.in/",
    //         "productUrl": "https://metro-kicks.cartpe.in/nikee-cortex-se-pack-metallic-cool-grey-554-metro-kicks.html?color=",
    //         "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/677c5666ed046.jpeg",
    //         "imageUrl": "[\"https://cdn.cartpe.in/images/gallery_md/677c5666ed046.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677c56675300b.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677c5667bdb26.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677c5667cc90a.jpeg\"]",
    //         "productShortDescription": null,
    //         "productDescription": null,
    //         "productBrand": "Nikee Cortex",
    //         "sizeName": "[\"41\",\"45\"]",
    //         "catName": "Men's Kick"
    //       },
    //       {
    //         "productId": 135,
    //         "productName": "Nikee Air More UpTempo \"Black-White\" #171",
    //         "productDateCreation": "2025-03-17 07:46:59",
    //         "productLastUpdated": 1745511138044,
    //         "productPrice": null,
    //         "productPriceWithoutDiscount": null,
    //         "productOriginalPrice": 2000,
    //         "productFetchedFrom": "https://metro-kicks.cartpe.in/",
    //         "productUrl": "https://metro-kicks.cartpe.in/nikee-airup-tempo-black-white-171-metro-kicks.html?color=",
    //         "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/677c507086963.jpeg",
    //         "imageUrl": "[\"https://cdn.cartpe.in/images/gallery_md/677c507086963.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677c50709e675.jpeg\"]",
    //         "productShortDescription": null,
    //         "productDescription": null,
    //         "productBrand": "Nikee Air",
    //         "sizeName": "[\"41\",\"42\",\"43\"]",
    //         "catName": "Men's Kick"
    //       },
    //       {
    //         "productId": 137,
    //         "productName": "Nikee AirMax \"Futura-Black\" #173",
    //         "productDateCreation": "2025-03-17 07:46:59",
    //         "productLastUpdated": 1745511138073,
    //         "productPrice": null,
    //         "productPriceWithoutDiscount": null,
    //         "productOriginalPrice": 2400,
    //         "productFetchedFrom": "https://metro-kicks.cartpe.in/",
    //         "productUrl": "https://metro-kicks.cartpe.in/nikee-airmax-futura-black-173-metro-kicks4610.html?color=",
    //         "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/677c4e2fce8df.jpeg",
    //         "imageUrl": "[\"https://cdn.cartpe.in/images/gallery_md/677c4e2fce8df.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677c4e2fc2db0.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677c4e2fc3c63.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677c4e2fd682f.jpeg\"]",
    //         "productShortDescription": null,
    //         "productDescription": null,
    //         "productBrand": "Nikee AirMax",
    //         "sizeName": "[\"42\"]",
    //         "catName": "Men's Kick"
    //       },
    //       {
    //         "productId": 138,
    //         "productName": "Nikee AirMax TL 2.5 X CDG \"Homme Plus\" #541",
    //         "productDateCreation": "2025-03-17 07:46:59",
    //         "productLastUpdated": "2025-03-17 07:46:59",
    //         "productPrice": null,
    //         "productPriceWithoutDiscount": null,
    //         "productOriginalPrice": 2500,
    //         "productFetchedFrom": "https://metro-kicks.cartpe.in/",
    //         "productUrl": "https://metro-kicks.cartpe.in/nikee-airmax-tl-2-5-x-cdg-homme-plus-549-metro-kicks.html?color=",
    //         "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/677c46fbbceb1.jpeg",
    //         "imageUrl": "[\"https://cdn.cartpe.in/images/gallery_md/677c46fbbceb1.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677c46fbccb00.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677c46fbe93ea.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677c46fc04aa6.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677c46fc1c8eb.jpeg\"]",
    //         "productShortDescription": null,
    //         "productDescription": null,
    //         "productBrand": "Nikee AirMax",
    //         "sizeName": "[\"41\",\"42\",\"43\",\"44\",\"45\"]",
    //         "catName": "Men's Kick"
    //       },
    //       {
    //         "productId": 140,
    //         "productName": "Nikee AirMax 97 \"Muslin-Pink\" Foam #272",
    //         "productDateCreation": "2025-03-17 07:47:00",
    //         "productLastUpdated": 1745511139456,
    //         "productPrice": null,
    //         "productPriceWithoutDiscount": null,
    //         "productOriginalPrice": 2199,
    //         "productFetchedFrom": "https://metro-kicks.cartpe.in/",
    //         "productUrl": "https://metro-kicks.cartpe.in/nikee-airmax-97-muslin-pink-foam-272-metro-kicks.html?color=",
    //         "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/677c439bc2d45.jpeg",
    //         "imageUrl": "[\"https://cdn.cartpe.in/images/gallery_md/677c439bc2d45.jpeg\"]",
    //         "productShortDescription": null,
    //         "productDescription": null,
    //         "productBrand": "Nikee AirMax",
    //         "sizeName": "[\"41\"]",
    //         "catName": "Men's Kick"
    //       },
    //       {
    //         "productId": 141,
    //         "productName": "Onitsuka Tiger Moage \"Wine Red\" #546",
    //         "productDateCreation": "2025-03-17 07:47:00",
    //         "productLastUpdated": "2025-03-17 07:47:00",
    //         "productPrice": null,
    //         "productPriceWithoutDiscount": null,
    //         "productOriginalPrice": 2799,
    //         "productFetchedFrom": "https://metro-kicks.cartpe.in/",
    //         "productUrl": "https://metro-kicks.cartpe.in/onitsuka-tiger-moage-wine-red-546-metro-kicks.html?color=",
    //         "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/677c421154870.jpeg",
    //         "imageUrl": "[\"https://cdn.cartpe.in/images/gallery_md/677c421154870.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677c4215039d0.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677c421513bcf.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677c4215194b8.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677c4215426eb.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677c421574723.jpeg\"]",
    //         "productShortDescription": null,
    //         "productDescription": null,
    //         "productBrand": "Onitsuka Tiger",
    //         "sizeName": "[\"45\"]",
    //         "catName": "Men's Kick"
    //       },
    //       {
    //         "productId": 142,
    //         "productName": "Adidass Climawarm Running #545",
    //         "productDateCreation": "2025-03-17 07:47:00",
    //         "productLastUpdated": 1745511138119,
    //         "productPrice": null,
    //         "productPriceWithoutDiscount": null,
    //         "productOriginalPrice": 1800,
    //         "productFetchedFrom": "https://metro-kicks.cartpe.in/",
    //         "productUrl": "https://metro-kicks.cartpe.in/adidass-climawarm-running-545-metro-kicks.html?color=",
    //         "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/677b68e2e17bf.jpeg",
    //         "imageUrl": "[\"https://cdn.cartpe.in/images/gallery_md/677b68e2e17bf.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677b68e2e7e68.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677b68e303885.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677b68e336717.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677b68e417d86.jpeg\"]",
    //         "productShortDescription": null,
    //         "productDescription": null,
    //         "productBrand": "Adidass Climawarm",
    //         "sizeName": "[\"41\",\"43\",\"44\"]",
    //         "catName": "Men's Kick"
    //       },
    //       {
    //         "productId": 143,
    //         "productName": "Adidass Yeezy Boost 350 V2 \"Full Reflective\" #544",
    //         "productDateCreation": "2025-03-17 07:47:00",
    //         "productLastUpdated": "2025-03-17 07:47:00",
    //         "productPrice": null,
    //         "productPriceWithoutDiscount": null,
    //         "productOriginalPrice": 2200,
    //         "productFetchedFrom": "https://metro-kicks.cartpe.in/",
    //         "productUrl": "https://metro-kicks.cartpe.in/adidass-yeezy-boost-350-v2-full-reflective-544-metro-kicks.html?color=",
    //         "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/677b67dfaa338.jpeg",
    //         "imageUrl": "[\"https://cdn.cartpe.in/images/gallery_md/677b67dfaa338.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677b67df839ce.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677b67df8717e.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677b67df92986.jpeg\"]",
    //         "productShortDescription": null,
    //         "productDescription": null,
    //         "productBrand": "Adidass Yeezy",
    //         "sizeName": "[\"41\"]",
    //         "catName": "Men's Kick"
    //       },
    //       {
    //         "productId": 145,
    //         "productName": "Adidass X Packer \"Intimidation FYW\" #532",
    //         "productDateCreation": "2025-03-17 07:47:00",
    //         "productLastUpdated": 1745511138181,
    //         "productPrice": null,
    //         "productPriceWithoutDiscount": null,
    //         "productOriginalPrice": 1999,
    //         "productFetchedFrom": "https://metro-kicks.cartpe.in/",
    //         "productUrl": "https://metro-kicks.cartpe.in/adidass-x-packer-intimidation-fyw-532-metro-kicks.html?color=",
    //         "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/677ae81a1963f.jpeg",
    //         "imageUrl": "[\"https://cdn.cartpe.in/images/gallery_md/677ae81a1963f.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677ae819e6f94.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677ae81a92551.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677ae81ab09c0.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677ae81b0630b.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677ae81b3be0e.jpeg\"]",
    //         "productShortDescription": null,
    //         "productDescription": null,
    //         "productBrand": "Adidass X",
    //         "sizeName": "[\"41\"]",
    //         "catName": "Men's Kick"
    //       },
    //       {
    //         "productId": 146,
    //         "productName": "Onitsuka Tiger Moage Black Carrier Grey 531",
    //         "productDateCreation": "2025-03-17 07:47:00",
    //         "productLastUpdated": "2025-03-17 07:47:00",
    //         "productPrice": null,
    //         "productPriceWithoutDiscount": null,
    //         "productOriginalPrice": 2799,
    //         "productFetchedFrom": "https://metro-kicks.cartpe.in/",
    //         "productUrl": "https://metro-kicks.cartpe.in/onitsuka-tiger-moage-black-carrier-grey-531-metro-kicks.html?color=",
    //         "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/677ae4929cff7.jpeg",
    //         "imageUrl": "[\"https://cdn.cartpe.in/images/gallery_md/677ae4929cff7.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677ae491cd07a.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677ae49201d59.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677ae492614ac.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677ae492ed0db.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677ae493851a0.jpeg\"]",
    //         "productShortDescription": null,
    //         "productDescription": null,
    //         "productBrand": "Onitsuka Tiger",
    //         "sizeName": "[\"41\",\"45\"]",
    //         "catName": "Men's Kick"
    //       },
    //       {
    //         "productId": 148,
    //         "productName": "Louis Vuitton Trainer LV \"Moka Brown\" #529",
    //         "productDateCreation": "2025-03-17 07:47:00",
    //         "productLastUpdated": "2025-03-17 07:47:00",
    //         "productPrice": null,
    //         "productPriceWithoutDiscount": null,
    //         "productOriginalPrice": 2600,
    //         "productFetchedFrom": "https://metro-kicks.cartpe.in/",
    //         "productUrl": "https://metro-kicks.cartpe.in/louis-vuitton-trainer-lv-moka-brown-529-metro-kicks.html?color=",
    //         "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/677ae23f75288.jpeg",
    //         "imageUrl": "[\"https://cdn.cartpe.in/images/gallery_md/677ae23f75288.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677ae23f3731e.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677ae23f458a5.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677ae23fdc7bf.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677ae23feb854.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677ae2400df8d.jpeg\"]",
    //         "productShortDescription": null,
    //         "productDescription": null,
    //         "productBrand": "Louis Vuitton",
    //         "sizeName": "[\"42\"]",
    //         "catName": "Men's Kick"
    //       },
    //       {
    //         "productId": 152,
    //         "productName": "Nikee Blazer Mid 77 \"Vintage White\" #389",
    //         "productDateCreation": "2025-03-17 07:47:00",
    //         "productLastUpdated": 1745511139644,
    //         "productPrice": null,
    //         "productPriceWithoutDiscount": null,
    //         "productOriginalPrice": 2199,
    //         "productFetchedFrom": "https://metro-kicks.cartpe.in/",
    //         "productUrl": "https://metro-kicks.cartpe.in/nikee-blazer-mid-77-vintage-white-389-metro-kicks118.html?color=",
    //         "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/677ad54877ef7.jpeg",
    //         "imageUrl": "[\"https://cdn.cartpe.in/images/gallery_md/677ad54877ef7.jpeg\"]",
    //         "productShortDescription": null,
    //         "productDescription": null,
    //         "productBrand": "Nikee Blazer",
    //         "sizeName": "[\"41\",\"42\",\"43\"]",
    //         "catName": "Men's Kick"
    //       },
    //       {
    //         "productId": 154,
    //         "productName": "Adidass Samba Consortium X \"BSTN\" #523",
    //         "productDateCreation": "2025-03-17 07:47:00",
    //         "productLastUpdated": 1745511139681,
    //         "productPrice": null,
    //         "productPriceWithoutDiscount": null,
    //         "productOriginalPrice": 2500,
    //         "productFetchedFrom": "https://metro-kicks.cartpe.in/",
    //         "productUrl": "https://metro-kicks.cartpe.in/adidass-samba-consortium-x-bstn-523-metro-kicks.html?color=",
    //         "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/677ad165b73e9.jpeg",
    //         "imageUrl": "[\"https://cdn.cartpe.in/images/gallery_md/677ad165b73e9.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677ad165dced1.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677ad16613a51.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677ad16630c8c.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677ad16694812.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677ad166c81ca.jpeg\",\"https://cdn.cartpe.in/images/gallery_md/677ad167bd67f.jpeg\"]",
    //         "productShortDescription": null,
    //         "productDescription": null,
    //         "productBrand": "Adidass Samba",
    //         "sizeName": "[\"42\"]",
    //         "catName": "Men's Kick"
    //       },
        
    //     ]
    //   )
    // }, 7000);




    console.log("exit page");

    // fetch('https://kicksmaniaserver.onrender.com/product/all', {
    // fetch('http://localhost:5000/product/all', {
    fetch('http://localhost:5000/product/search?size=40', {


      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setproducts(data.results)
      })
      .catch(error => console.error('Error:', error));
  }



  useEffect(() => {

  }, [products])




  return (
    <>
      {products == "" ?
        <Loader />
        // ""
        :
        <Router>
          <ScrollToTop />
          <NavBaar productss={products} />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <ShopBrand />
                  <ShoeCarousel productss={products} />
                  <FeaturedCategories />
                  <SingleCollection products={products} />
                </>
              }
            />
            <Route
              path="/product/:id"
              element={<ProductPage products={products} />}
            />
            <Route
              path="/product/:id/backdoor"
              element={<ProductPageWithPrive products={products} />}
            />
            <Route
              path="/product/"
              element={<AllProducts products={products} />}
            />
            <Route
              path="/search/:searchterm"
              element={<AllProducts products={products} />}
            />
            <Route
              path="/category/:searchcategory"
              element={<AllProducts products={products} />}
            />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PriivacyPolicy />} />
            <Route path="/returns" element={<ReturnPolicy />} />
            <Route path="/shipping" element={<ShippingPolicy />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>

          <FooterOne />
        </Router>
      }
    </>
  );
};

export default App;
