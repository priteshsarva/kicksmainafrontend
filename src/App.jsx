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


    setproducts(
      [
        {
          "productId": 1,
          "productName": ".DIOR B28 HIGH GREY",
          "productDateCreation": "2025-02-09 03:51:34",
          "productLastUpdated": 1740454104010,
          "productPrice": null,
          "productPriceWithoutDiscount": null,
          "productOriginalPrice": 2700,
          "productFetchedFrom": "https://hypeshoe.cartpe.in/",
          "productUrl": "https://hypeshoe.cartpe.in/di-or-b28-high-grey-hypeshoe.html?color=",
          "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/679dfbe1a6602.jpeg",
          "imageUrl": "[\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.DIOR_B28\\\\679dfbe1a6602.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.DIOR_B28\\\\679dfbe1cd02b.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.DIOR_B28\\\\679dfbe1e089e.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.DIOR_B28\\\\679dfbe1e9361.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.DIOR_B28\\\\679dfbe20b7a3.jpeg\"]",
          "productShortDescription": null,
          "productDescription": null,
          "productBrand": ".DIOR B28",
          "sizeName": "[\"40\",\"43\",\"44\",\"45\"]",
          "catName": "MENS+SHOES"
        },
        {
          "productId": 2,
          "productName": "NIK E KOBE 6 Reverse GRINCH Green Neon",
          "productDateCreation": "2025-02-09 03:51:34",
          "productLastUpdated": 1740454104057,
          "productPrice": null,
          "productPriceWithoutDiscount": null,
          "productOriginalPrice": 2800,
          "productFetchedFrom": "https://hypeshoe.cartpe.in/",
          "productUrl": "https://hypeshoe.cartpe.in/nik-e-kobe-6-reverse-grinch-green-neon-hypeshoe.html?color=",
          "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/679dce4f4386c.jpeg",
          "imageUrl": "[\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_E\\\\679dce4f4386c.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_E\\\\679dce4f3b50f.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_E\\\\679dce4f58d1d.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_E\\\\679dce4f5eeb1.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_E\\\\679dce4f6a120.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_E\\\\679dce4f757c7.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_E\\\\679dce4f836ca.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_E\\\\679dce4f8920d.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_E\\\\679dce4f95ec5.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_E\\\\679dce4fc4129.jpeg\"]",
          "productShortDescription": null,
          "productDescription": null,
          "productBrand": "NIK E",
          "sizeName": "[\"42\",\"43\",\"44\",\"45\"]",
          "catName": "EID SALE"
        },
        {
          "productId": 3,
          "productName": "UNDER ARMOUR PHANTOM 1 BLACK GREEN",
          "productDateCreation": "2025-02-09 03:51:35",
          "productLastUpdated": 1740454104160,
          "productPrice": null,
          "productPriceWithoutDiscount": null,
          "productOriginalPrice": 2700,
          "productFetchedFrom": "https://hypeshoe.cartpe.in/",
          "productUrl": "https://hypeshoe.cartpe.in/under-armour-phantom-1-black-green-hypeshoe.html?color=",
          "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/679ce850b0dbd.jpeg",
          "imageUrl": "[\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\UNDER_ARMOUR\\\\679ce850b0dbd.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\UNDER_ARMOUR\\\\679cdcdfe552c.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\UNDER_ARMOUR\\\\679cdce00bd9d.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\UNDER_ARMOUR\\\\679cdce01f9f2.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\UNDER_ARMOUR\\\\679cdce021ea5.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\UNDER_ARMOUR\\\\679cdce0341ac.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\UNDER_ARMOUR\\\\679cdce03b878.jpeg\"]",
          "productShortDescription": null,
          "productDescription": null,
          "productBrand": "UNDER ARMOUR",
          "sizeName": "[\"41\",\"43\",\"44\",\"45\"]",
          "catName": "Flipflops/Crocs"
        },
        {
          "productId": 4,
          "productName": "NIK E Sb Dunk Low Coast University Blu",
          "productDateCreation": "2025-02-09 03:51:35",
          "productLastUpdated": 1740454104210,
          "productPrice": null,
          "productPriceWithoutDiscount": null,
          "productOriginalPrice": 2200,
          "productFetchedFrom": "https://hypeshoe.cartpe.in/",
          "productUrl": "https://hypeshoe.cartpe.in/nik-e-sb-dunk-low-coast-university-blu-hypeshoe.html?color=",
          "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/679a343ab2fb8.jpeg",
          "imageUrl": "[\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_E\\\\679a343ab2fb8.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_E\\\\679a343ab0f52.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_E\\\\679a343abc662.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_E\\\\679a343ac2e53.jpeg\"]",
          "productShortDescription": null,
          "productDescription": null,
          "productBrand": "NIK E",
          "sizeName": "[\"41\",\"42\",\"43\",\"44\",\"45\"]",
          "catName": "Slides/Crocs"
        },
        {
          "productId": 5,
          "productName": "NIK E AIRFORCE 1 LOW KEN GRIFFEY BASEBALL",
          "productDateCreation": "2025-02-09 03:51:35",
          "productLastUpdated": 1740454104270,
          "productPrice": null,
          "productPriceWithoutDiscount": null,
          "productOriginalPrice": 2200,
          "productFetchedFrom": "https://hypeshoe.cartpe.in/",
          "productUrl": "https://hypeshoe.cartpe.in/nik-e-airforce-1-low-ken-griffey-baseball-hypeshoe.html?color=",
          "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/679a339e9543b.jpeg",
          "imageUrl": "[\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_E\\\\679a339e9543b.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_E\\\\679a339e8a31a.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_E\\\\679a339e955e6.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_E\\\\679a339e9b089.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_E\\\\679a339e9c247.jpeg\"]",
          "productShortDescription": null,
          "productDescription": null,
          "productBrand": "NIK E",
          "sizeName": "[\"41\",\"43\",\"44\",\"45\"]",
          "catName": "Women's Shoe"
        },
        {
          "productId": 6,
          "productName": ".NIKE AIR JORDAN RETRO 1 LOW Tokyo VINTAGE UNC GREY",
          "productDateCreation": "2025-02-09 03:51:35",
          "productLastUpdated": 1740454104469,
          "productPrice": null,
          "productPriceWithoutDiscount": null,
          "productOriginalPrice": 2200,
          "productFetchedFrom": "https://hypeshoe.cartpe.in/",
          "productUrl": "https://hypeshoe.cartpe.in/nik-e-air-jordan-retro-1-low-vintage-unc-grey-hypeshoe.html?color=",
          "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/679a313a04e83.jpeg",
          "imageUrl": "[\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.NIKE_AIR\\\\679a313a04e83.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.NIKE_AIR\\\\679a313a1a3f1.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.NIKE_AIR\\\\679a313a1bb6c.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.NIKE_AIR\\\\679a313a231db.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.NIKE_AIR\\\\679a313a26c53.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.NIKE_AIR\\\\679a313a2c657.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.NIKE_AIR\\\\679a313a2e81d.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.NIKE_AIR\\\\679a313a2ee37.jpeg\"]",
          "productShortDescription": null,
          "productDescription": null,
          "productBrand": ".NIKE AIR",
          "sizeName": "[\"41\",\"42\",\"43\",\"44\"]",
          "catName": "shoes+for+women"
        },
        {
          "productId": 7,
          "productName": "NIK E SB DUNK LOW CHUNKY DUNKY",
          "productDateCreation": "2025-02-09 03:51:35",
          "productLastUpdated": 1740454104513,
          "productPrice": null,
          "productPriceWithoutDiscount": null,
          "productOriginalPrice": 2200,
          "productFetchedFrom": "https://hypeshoe.cartpe.in/",
          "productUrl": "https://hypeshoe.cartpe.in/nik-e-sb-dunk-low-chunky-dunky-hypeshoe.html?color=",
          "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/679a2ef69fca4.jpeg",
          "imageUrl": "[\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_E\\\\679a2ef69fca4.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_E\\\\679a2ef6708d7.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_E\\\\679a2ef68b63e.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_E\\\\679a2ef6917b1.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_E\\\\679a2ef6a01bd.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_E\\\\679a2ef6b5240.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_E\\\\679a2ef6c86c6.jpeg\"]",
          "productShortDescription": null,
          "productDescription": null,
          "productBrand": "NIK E",
          "sizeName": "[\"42\",\"43\",\"44\",\"45\"]",
          "catName": "UA+QUALITY+SHOE"
        },
        {
          "productId": 8,
          "productName": "Nikee SB Dunk Low Jarritos FIXED",
          "productDateCreation": "2025-02-09 03:51:35",
          "productLastUpdated": 1740454104560,
          "productPrice": null,
          "productPriceWithoutDiscount": null,
          "productOriginalPrice": 2200,
          "productFetchedFrom": "https://hypeshoe.cartpe.in/",
          "productUrl": "https://hypeshoe.cartpe.in/nikee-sb-dunk-low-jarritos-fixed-hypeshoe.html?color=",
          "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/679a2e7125e82.jpeg",
          "imageUrl": "[\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\Nikee_SB\\\\679a2e7125e82.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\Nikee_SB\\\\679a2e7155b9a.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\Nikee_SB\\\\679a2e715b353.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\Nikee_SB\\\\679a2e715c983.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\Nikee_SB\\\\679a2e715d0be.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\Nikee_SB\\\\679a2e715f7e6.jpeg\"]",
          "productShortDescription": null,
          "productDescription": null,
          "productBrand": "Nikee SB",
          "sizeName": "[\"45\"]",
          "catName": "UA Quality"
        },
        {
          "productId": 9,
          "productName": ".NIKE AIRFORCE 1 UTILITY WHITE LOW",
          "productDateCreation": "2025-02-09 03:51:35",
          "productLastUpdated": 1740454104601,
          "productPrice": null,
          "productPriceWithoutDiscount": null,
          "productOriginalPrice": 1900,
          "productFetchedFrom": "https://hypeshoe.cartpe.in/",
          "productUrl": "https://hypeshoe.cartpe.in/nik-e-airforce-1-utility-white-low-hypeshoe.html?color=",
          "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/679a2e241d9cf.jpeg",
          "imageUrl": "[\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.NIKE_AIRFORCE\\\\679a2e241d9cf.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.NIKE_AIRFORCE\\\\679a2e243e3c5.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.NIKE_AIRFORCE\\\\679a2e244debc.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.NIKE_AIRFORCE\\\\679a2e2459e40.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.NIKE_AIRFORCE\\\\679a2e246b7b6.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.NIKE_AIRFORCE\\\\679a2e24b7d8b.jpeg\"]",
          "productShortDescription": null,
          "productDescription": null,
          "productBrand": ".NIKE AIRFORCE",
          "sizeName": "[\"41\",\"42\",\"43\",\"44\",\"45\"]",
          "catName": "UA Quality"
        },
        {
          "productId": 10,
          "productName": "ADID AS BAD BUNNY GREY",
          "productDateCreation": "2025-02-09 03:51:35",
          "productLastUpdated": 1740454104646,
          "productPrice": null,
          "productPriceWithoutDiscount": null,
          "productOriginalPrice": 2200,
          "productFetchedFrom": "https://hypeshoe.cartpe.in/",
          "productUrl": "https://hypeshoe.cartpe.in/adid-as-bad-bunny-grey-hypeshoe.html?color=",
          "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/679a2d209c803.jpeg",
          "imageUrl": "[\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\ADID_AS\\\\679a2d209c803.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\ADID_AS\\\\679a2d2090f35.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\ADID_AS\\\\679a2d20a35ed.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\ADID_AS\\\\679a2d20bb42d.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\ADID_AS\\\\679a2d20c1e9c.jpeg\"]",
          "productShortDescription": null,
          "productDescription": null,
          "productBrand": "ADID AS",
          "sizeName": "[\"40\"]",
          "catName": "MENS+SHOES"
        },
        {
          "productId": 11,
          "productName": "Nik E SB DUNK LOW VARSITY GREEN",
          "productDateCreation": "2025-02-09 03:51:36",
          "productLastUpdated": 1740454104687,
          "productPrice": null,
          "productPriceWithoutDiscount": null,
          "productOriginalPrice": 2200,
          "productFetchedFrom": "https://hypeshoe.cartpe.in/",
          "productUrl": "https://hypeshoe.cartpe.in/nik-e-sb-dunk-low-varsity-green-hypeshoe.html?color=",
          "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/679a2cd565f35.jpeg",
          "imageUrl": "[\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\Nik_E\\\\679a2cd565f35.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\Nik_E\\\\679a2cd55b98b.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\Nik_E\\\\679a2cd56a1ac.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\Nik_E\\\\679a2cd5702bf.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\Nik_E\\\\679a2cd57a597.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\Nik_E\\\\679a2cd57cc5e.jpeg\"]",
          "productShortDescription": null,
          "productDescription": null,
          "productBrand": "Nik E",
          "sizeName": "[\"41\",\"42\",\"43\",\"44\",\"45\"]",
          "catName": "MENS+SHOES"
        },
        {
          "productId": 12,
          "productName": "Airforce 1 White Black Swoosh",
          "productDateCreation": "2025-02-09 03:51:36",
          "productLastUpdated": 1740454104733,
          "productPrice": null,
          "productPriceWithoutDiscount": null,
          "productOriginalPrice": 2200,
          "productFetchedFrom": "https://hypeshoe.cartpe.in/",
          "productUrl": "https://hypeshoe.cartpe.in/airforce-1-white-black-swoosh-hypeshoe.html?color=",
          "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/679a282b5b951.jpeg",
          "imageUrl": "[\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\Airforce_1\\\\679a282b5b951.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\Airforce_1\\\\679a282b0f487.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\Airforce_1\\\\679a282b29b24.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\Airforce_1\\\\679a282b2bdcd.jpeg\"]",
          "productShortDescription": null,
          "productDescription": null,
          "productBrand": "Airforce 1",
          "sizeName": "[\"43\",\"44\",\"45\"]",
          "catName": "MENS+SHOES"
        },
        {
          "productId": 13,
          "productName": "NIK E AIRFORCE 1 KEEP FRESH",
          "productDateCreation": "2025-02-09 03:51:36",
          "productLastUpdated": 1740454104781,
          "productPrice": null,
          "productPriceWithoutDiscount": null,
          "productOriginalPrice": 2200,
          "productFetchedFrom": "https://hypeshoe.cartpe.in/",
          "productUrl": "https://hypeshoe.cartpe.in/nik-e-airforce-1-keep-fresh-hypeshoe.html?color=",
          "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/679a27a954053.jpeg",
          "imageUrl": "[\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_E\\\\679a27a954053.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_E\\\\679a27a95463c.jpeg\"]",
          "productShortDescription": null,
          "productDescription": null,
          "productBrand": "NIK E",
          "sizeName": "[\"41\",\"43\",\"44\",\"45\"]",
          "catName": "MENS+SHOES"
        },
        {
          "productId": 14,
          "productName": "TIMBERLAND BROWN LONG BOOTS",
          "productDateCreation": "2025-02-09 03:51:36",
          "productLastUpdated": 1740454104955,
          "productPrice": null,
          "productPriceWithoutDiscount": null,
          "productOriginalPrice": 2500,
          "productFetchedFrom": "https://hypeshoe.cartpe.in/",
          "productUrl": "https://hypeshoe.cartpe.in/timberland-brown-long-boots-hypeshoe.html?color=",
          "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/6791099cb29c6.jpeg",
          "imageUrl": "[\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\TIMBERLAND_BROWN\\\\6791099cb29c6.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\TIMBERLAND_BROWN\\\\6791099c9471e.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\TIMBERLAND_BROWN\\\\6791099ca9364.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\TIMBERLAND_BROWN\\\\6791099cc4604.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\TIMBERLAND_BROWN\\\\6791099cce95c.jpeg\"]",
          "productShortDescription": null,
          "productDescription": null,
          "productBrand": "TIMBERLAND BROWN",
          "sizeName": "[\"41\",\"42\",\"43\",\"44\",\"45\"]",
          "catName": "MENS+SHOES"
        },
        {
          "productId": 15,
          "productName": ".ADIDAS BAD BUNNY WHITE",
          "productDateCreation": "2025-02-09 03:51:36",
          "productLastUpdated": 1740454105049,
          "productPrice": null,
          "productPriceWithoutDiscount": null,
          "productOriginalPrice": 2200,
          "productFetchedFrom": "https://hypeshoe.cartpe.in/",
          "productUrl": "https://hypeshoe.cartpe.in/adi-das-bad-bunny-white-hypeshoe.html?color=",
          "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/678ccc5d84e1f.jpeg",
          "imageUrl": "[\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.ADIDAS_BAD\\\\678ccc5d84e1f.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.ADIDAS_BAD\\\\678ccc5d79b2e.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.ADIDAS_BAD\\\\678ccc5da4e4c.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.ADIDAS_BAD\\\\678ccc5df38e6.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.ADIDAS_BAD\\\\678ccc5e27572.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.ADIDAS_BAD\\\\678ccc5e2da28.jpeg\"]",
          "productShortDescription": null,
          "productDescription": null,
          "productBrand": ".ADIDAS BAD",
          "sizeName": "[\"40\",\"41\",\"42\",\"43\",\"45\"]",
          "catName": "MENS+SHOES"
        },
        {
          "productId": 16,
          "productName": "NIK AIR JORDAN RETRO 1 LOW FRAGMENT",
          "productDateCreation": "2025-02-09 03:51:36",
          "productLastUpdated": 1740454105190,
          "productPrice": null,
          "productPriceWithoutDiscount": null,
          "productOriginalPrice": 2200,
          "productFetchedFrom": "https://hypeshoe.cartpe.in/",
          "productUrl": "https://hypeshoe.cartpe.in/nik-air-jordan-retro-1-low-fragment-hypeshoe.html?color=",
          "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/678b8c468e209.jpeg",
          "imageUrl": "[\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_AIR\\\\678b8c468e209.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_AIR\\\\678b8c4695c59.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_AIR\\\\678b8c46a82d1.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_AIR\\\\678b8c46adae3.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_AIR\\\\678b8c46c1c51.jpeg\"]",
          "productShortDescription": null,
          "productDescription": null,
          "productBrand": "NIK AIR",
          "sizeName": "[\"40\",\"41\",\"43\",\"44\",\"45\"]",
          "catName": "MENS+SHOES"
        },
        {
          "productId": 17,
          "productName": "Louis Vuitton By Tyler The Creator 2024 SKY BLUE Trainer",
          "productDateCreation": "2025-02-09 03:51:36",
          "productLastUpdated": 1740454105358,
          "productPrice": null,
          "productPriceWithoutDiscount": null,
          "productOriginalPrice": 2500,
          "productFetchedFrom": "https://hypeshoe.cartpe.in/",
          "productUrl": "https://hypeshoe.cartpe.in/lous-hypeshoe.html?color=",
          "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/678b8989e0cd5.jpeg",
          "imageUrl": "[\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\Louis_Vuitton\\\\678b8989e0cd5.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\Louis_Vuitton\\\\678b8989c4298.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\Louis_Vuitton\\\\678b8989e56f4.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\Louis_Vuitton\\\\678b898e33759.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\Louis_Vuitton\\\\678b898e34d1b.jpeg\"]",
          "productShortDescription": null,
          "productDescription": null,
          "productBrand": "Louis Vuitton",
          "sizeName": "[\"41\",\"42\",\"43\",\"44\",\"45\"]",
          "catName": "MENS+SHOES"
        },
        {
          "productId": 18,
          "productName": "Louis Vuitton By Tyler The Creator 2024 Green Trainer",
          "productDateCreation": "2025-02-09 03:51:37",
          "productLastUpdated": 1740454105409,
          "productPrice": null,
          "productPriceWithoutDiscount": null,
          "productOriginalPrice": 2500,
          "productFetchedFrom": "https://hypeshoe.cartpe.in/",
          "productUrl": "https://hypeshoe.cartpe.in/louis-vuitton-by-tyler-the-creator-2024-green-trainer-hypeshoe.html?color=",
          "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/678b88b4b7685.jpeg",
          "imageUrl": "[\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\Louis_Vuitton\\\\678b88b4b7685.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\Louis_Vuitton\\\\678b88b4bb30b.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\Louis_Vuitton\\\\678b88b4d7c30.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\Louis_Vuitton\\\\678b88b4d92d6.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\Louis_Vuitton\\\\678b88b4ec108.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\Louis_Vuitton\\\\678b88b50649a.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\Louis_Vuitton\\\\678b88b5331f4.jpeg\"]",
          "productShortDescription": null,
          "productDescription": null,
          "productBrand": "Louis Vuitton",
          "sizeName": "[\"42\",\"43\",\"44\"]",
          "catName": "MENS+SHOES"
        },
        {
          "productId": 19,
          "productName": "NIK SB DUNK LOW STRANGE LOVE",
          "productDateCreation": "2025-02-09 03:51:37",
          "productLastUpdated": 1740454105642,
          "productPrice": null,
          "productPriceWithoutDiscount": null,
          "productOriginalPrice": 2500,
          "productFetchedFrom": "https://hypeshoe.cartpe.in/",
          "productUrl": "https://hypeshoe.cartpe.in/nik-sb-dunk-low-strange-love-hypeshoe.html?color=",
          "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/678b7d35efaeb.jpeg",
          "imageUrl": "[\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_SB\\\\678b7d35efaeb.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_SB\\\\678b7d35f0a06.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_SB\\\\678b7d36175a3.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_SB\\\\678b7d361aef7.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_SB\\\\678b7d361d53a.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_SB\\\\678b7d36427fb.jpeg\"]",
          "productShortDescription": null,
          "productDescription": null,
          "productBrand": "NIK SB",
          "sizeName": "[\"41\",\"42\",\"43\",\"44\",\"45\"]",
          "catName": "MENS+SHOES"
        },
        {
          "productId": 20,
          "productName": "Fast Rb Nitro Neon",
          "productDateCreation": "2025-02-09 03:51:37",
          "productLastUpdated": 1740454094706,
          "productPrice": null,
          "productPriceWithoutDiscount": null,
          "productOriginalPrice": 3200,
          "productFetchedFrom": "https://hypeshoe.cartpe.in/",
          "productUrl": "https://hypeshoe.cartpe.in/puma-fast-rb-nitro-neon-hypeshoe.html?color=",
          "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/678b7ac0a817d.jpeg",
          "imageUrl": "[\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\Fast_Rb\\\\678b7ac0a817d.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\Fast_Rb\\\\678b7ac0b4f04.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\Fast_Rb\\\\678b7ac0c4b63.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\Fast_Rb\\\\678b7ac0c65e1.jpeg\"]",
          "productShortDescription": null,
          "productDescription": null,
          "productBrand": "Fast Rb",
          "sizeName": "[\"41\",\"42\",\"43\",\"44\",\"45\"]",
          "catName": "MENS+SHOES"
        },
        {
          "productId": 21,
          "productName": "NEW BALANCE 9060 NORI VARDE GREEN",
          "productDateCreation": "2025-02-09 03:51:37",
          "productLastUpdated": 1740454094761,
          "productPrice": null,
          "productPriceWithoutDiscount": null,
          "productOriginalPrice": 2800,
          "productFetchedFrom": "https://hypeshoe.cartpe.in/",
          "productUrl": "https://hypeshoe.cartpe.in/new-balance-9060-nori-varde-green-hypeshoe.html?color=",
          "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/677baa4fca891.jpeg",
          "imageUrl": "[\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NEW_BALANCE\\\\677baa4fca891.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NEW_BALANCE\\\\677baa4fcaaaf.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NEW_BALANCE\\\\677baa50b56c1.jpeg\"]",
          "productShortDescription": null,
          "productDescription": null,
          "productBrand": "NEW BALANCE",
          "sizeName": "[\"41\",\"42\",\"44\",\"45\"]",
          "catName": "MENS+SHOES"
        },
        {
          "productId": 22,
          "productName": "NEW BALANCE 9060 Castle Rock Black",
          "productDateCreation": "2025-02-09 03:51:37",
          "productLastUpdated": 1740454094823,
          "productPrice": null,
          "productPriceWithoutDiscount": null,
          "productOriginalPrice": 2800,
          "productFetchedFrom": "https://hypeshoe.cartpe.in/",
          "productUrl": "https://hypeshoe.cartpe.in/new-balance-9060-castle-rock-black-hypeshoe.html?color=",
          "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/677ba97767de8.jpeg",
          "imageUrl": "[\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NEW_BALANCE\\\\677ba97767de8.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NEW_BALANCE\\\\677ba9776bb19.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NEW_BALANCE\\\\677ba977738dc.jpeg\"]",
          "productShortDescription": null,
          "productDescription": null,
          "productBrand": "NEW BALANCE",
          "sizeName": "[\"41\",\"42\",\"43\",\"45\"]",
          "catName": "MENS+SHOES"
        },
        {
          "productId": 23,
          "productName": ".NIKE AIR JORDAN RETRO 1 LOW PARIS",
          "productDateCreation": "2025-02-09 03:51:37",
          "productLastUpdated": 1740454094889,
          "productPrice": null,
          "productPriceWithoutDiscount": null,
          "productOriginalPrice": 2000,
          "productFetchedFrom": "https://hypeshoe.cartpe.in/",
          "productUrl": "https://hypeshoe.cartpe.in/nik-e-air-jordan-retro-1-low-paris-hypeshoe.html?color=",
          "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/676bc8522c376.jpeg",
          "imageUrl": "[\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.NIKE_AIR\\\\676bc8522c376.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.NIKE_AIR\\\\676bc85239d62.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.NIKE_AIR\\\\676bc85242b5f.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.NIKE_AIR\\\\676bc8524e1fb.jpeg\"]",
          "productShortDescription": null,
          "productDescription": null,
          "productBrand": ".NIKE AIR",
          "sizeName": "[\"40\",\"41\",\"43\",\"44\",\"45\"]",
          "catName": "MENS+SHOES"
        },
        {
          "productId": 24,
          "productName": ".PUMA SPEEDCAT OG RED WITH OG BOX N TOP PACKING",
          "productDateCreation": "2025-02-09 03:51:37",
          "productLastUpdated": 1740454106926,
          "productPrice": null,
          "productPriceWithoutDiscount": null,
          "productOriginalPrice": 1800,
          "productFetchedFrom": "https://hypeshoe.cartpe.in/",
          "productUrl": "https://hypeshoe.cartpe.in/pum-a-speedcat-og-red-with-og-box-n-top-packing-hypeshoe.html?color=",
          "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/674896ecd2090.jpeg",
          "imageUrl": "[\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.PUMA_SPEEDCAT\\\\674896ecd2090.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.PUMA_SPEEDCAT\\\\674896ecdbe48.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.PUMA_SPEEDCAT\\\\674896ecdffa1.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.PUMA_SPEEDCAT\\\\674896ececc74.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.PUMA_SPEEDCAT\\\\674896ed177ba.jpeg\"]",
          "productShortDescription": null,
          "productDescription": null,
          "productBrand": ".PUMA SPEEDCAT",
          "sizeName": "[\"42\",\"43\",\"45\"]",
          "catName": "MENS+SHOES"
        },
        {
          "productId": 25,
          "productName": ".NIKE Airforce 1 Vacheta Tan",
          "productDateCreation": "2025-02-09 03:51:38",
          "productLastUpdated": 1740454094944,
          "productPrice": null,
          "productPriceWithoutDiscount": null,
          "productOriginalPrice": 2200,
          "productFetchedFrom": "https://hypeshoe.cartpe.in/",
          "productUrl": "https://hypeshoe.cartpe.in/nike-airforce-1-vacheta-tan-hypeshoe.html?color=",
          "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/67441cb131610.jpeg",
          "imageUrl": "[\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.NIKE_Airforce\\\\67441cb131610.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.NIKE_Airforce\\\\67441cb138adf.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.NIKE_Airforce\\\\67441cb13c0b2.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.NIKE_Airforce\\\\67441cb13c57f.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.NIKE_Airforce\\\\67441cb1599f3.jpeg\"]",
          "productShortDescription": null,
          "productDescription": null,
          "productBrand": ".NIKE Airforce",
          "sizeName": "[\"41\",\"42\",\"43\",\"44\",\"45\"]",
          "catName": "MENS+SHOES"
        },
        {
          "productId": 26,
          "productName": ".NIKE MID BLAZER LOW VINTAGE 77",
          "productDateCreation": "2025-02-09 03:51:38",
          "productLastUpdated": 1740454095005,
          "productPrice": null,
          "productPriceWithoutDiscount": null,
          "productOriginalPrice": 1800,
          "productFetchedFrom": "https://hypeshoe.cartpe.in/",
          "productUrl": "https://hypeshoe.cartpe.in/nik-e-mid-blazer-low-vintage-77-hypeshoe.html?color=",
          "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/6739b9717d3bf.jpeg",
          "imageUrl": "[\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.NIKE_MID\\\\6739b9717d3bf.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.NIKE_MID\\\\6739b97197d7d.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.NIKE_MID\\\\6739b9719ad97.jpeg\"]",
          "productShortDescription": null,
          "productDescription": null,
          "productBrand": ".NIKE MID",
          "sizeName": "[\"40\",\"41\",\"42\",\"43\",\"44\",\"45\"]",
          "catName": "MENS+SHOES"
        },
        {
          "productId": 27,
          "productName": ".NIKE AIR JORDAN RETRO 1HIGH UNION",
          "productDateCreation": "2025-02-09 03:51:38",
          "productLastUpdated": 1740454107853,
          "productPrice": null,
          "productPriceWithoutDiscount": null,
          "productOriginalPrice": 2500,
          "productFetchedFrom": "https://hypeshoe.cartpe.in/",
          "productUrl": "https://hypeshoe.cartpe.in/ni-ke-airforce-jordan-retro-1high-union-hypeshoe.html?color=",
          "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/670fdd579bf29.jpeg",
          "imageUrl": "[\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.NIKE_AIR\\\\670fdd579bf29.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.NIKE_AIR\\\\670fdd5784181.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.NIKE_AIR\\\\670fdd5786ad2.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.NIKE_AIR\\\\670fdd578d5f5.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.NIKE_AIR\\\\670fdd579ce17.jpeg\"]",
          "productShortDescription": null,
          "productDescription": null,
          "productBrand": ".NIKE AIR",
          "sizeName": "[\"41\",\"42\",\"43\",\"44\"]",
          "catName": "MENS+SHOES"
        },
        {
          "productId": 28,
          "productName": "NIK E AIR JORDAN RETRO 1 LOW TRAVIS SCOTT X PHANTOM SEMI UA",
          "productDateCreation": "2025-02-09 03:51:38",
          "productLastUpdated": 1740454108184,
          "productPrice": null,
          "productPriceWithoutDiscount": null,
          "productOriginalPrice": 2500,
          "productFetchedFrom": "https://hypeshoe.cartpe.in/",
          "productUrl": "https://hypeshoe.cartpe.in/nik-e-air-jordan-retro-1-low-travis-scott-x-phantom-semi-ua-hypeshoe.html?color=",
          "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/670f63fd77702.jpeg",
          "imageUrl": "[\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_E\\\\670f63fd77702.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_E\\\\670f63fd64a03.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_E\\\\670f63fd654a4.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_E\\\\670f63fd6a5ea.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_E\\\\670f63fd72c0c.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_E\\\\670f63fd81ad6.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_E\\\\670f63fd8dd23.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\NIK_E\\\\670f63fd95ad7.jpeg\"]",
          "productShortDescription": null,
          "productDescription": null,
          "productBrand": "NIK E",
          "sizeName": "[\"40\",\"41\",\"42\",\"43\",\"45\"]",
          "catName": "MENS+SHOES"
        },
        {
          "productId": 29,
          "productName": ".NIKE Airforce 1 White Leather Special Size",
          "productDateCreation": "2025-02-09 03:51:38",
          "productLastUpdated": 1740454095058,
          "productPrice": null,
          "productPriceWithoutDiscount": null,
          "productOriginalPrice": 1700,
          "productFetchedFrom": "https://hypeshoe.cartpe.in/",
          "productUrl": "https://hypeshoe.cartpe.in/nike-airforce-1-white-leather-special-size-hypeshoe.html?color=",
          "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/6706917827ac5.jpeg",
          "imageUrl": "[\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.NIKE_Airforce\\\\6706917827ac5.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.NIKE_Airforce\\\\6706917803b6c.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.NIKE_Airforce\\\\670691780e833.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.NIKE_Airforce\\\\6706917822011.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.NIKE_Airforce\\\\674edcb5c3d00.jpeg\"]",
          "productShortDescription": null,
          "productDescription": null,
          "productBrand": ".NIKE Airforce",
          "sizeName": "[\"46\"]",
          "catName": "MENS+SHOES"
        },
        {
          "productId": 30,
          "productName": ".NIKE Airforce 1 White Men S Semi Ua WITH OG BOX CARD CARRY BAG DUST BAG N ALL",
          "productDateCreation": "2025-02-09 03:51:38",
          "productLastUpdated": 1740454095105,
          "productPrice": null,
          "productPriceWithoutDiscount": null,
          "productOriginalPrice": 1500,
          "productFetchedFrom": "https://hypeshoe.cartpe.in/",
          "productUrl": "https://hypeshoe.cartpe.in/airforce-1-white-men-s-semi-ua-hypeshoe.html?color=",
          "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/670534f65ba55.jpeg",
          "imageUrl": "[\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.NIKE_Airforce\\\\670534f65ba55.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.NIKE_Airforce\\\\670534f671214.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.NIKE_Airforce\\\\670534f679ecf.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.NIKE_Airforce\\\\670534f679dcd.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.NIKE_Airforce\\\\670534f753a22.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.NIKE_Airforce\\\\674edcc6d7a00.jpeg\"]",
          "productShortDescription": null,
          "productDescription": null,
          "productBrand": ".NIKE Airforce",
          "sizeName": "[\"41\",\"42\",\"43\",\"44\",\"45\"]",
          "catName": "MENS+SHOES"
        },
        {
          "productId": 31,
          "productName": ".ADIDAS SAMBA BLACK MENS",
          "productDateCreation": "2025-02-09 03:51:38",
          "productLastUpdated": 1740454108680,
          "productPrice": null,
          "productPriceWithoutDiscount": null,
          "productOriginalPrice": 1600,
          "productFetchedFrom": "https://hypeshoe.cartpe.in/",
          "productUrl": "https://hypeshoe.cartpe.in/samba-black-mens-hypeshoe.html?color=",
          "featuredimg": "https://cdn.cartpe.in/images/gallery_sm/6704f46b4f6f7.jpeg",
          "imageUrl": "[\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.ADIDAS_SAMBA\\\\6704f46b4f6f7.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.ADIDAS_SAMBA\\\\6704f46b481e0.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.ADIDAS_SAMBA\\\\6704f46b52d00.jpeg\",\"C:\\\\Users\\\\sarva\\\\Documents\\\\kickmania\\\\kickmaniaserver\\\\controller\\\\images\\\\.ADIDAS_SAMBA\\\\6704f46b53bfb.jpeg\"]",
          "productShortDescription": null,
          "productDescription": null,
          "productBrand": ".ADIDAS SAMBA",
          "sizeName": "[\"41\",\"42\",\"43\"]",
          "catName": "MENS+SHOES"
        },
      ]
    )


    console.log("exit page");

    // fetch('https://kicksmaniaserver.onrender.com/product/all', {
    //   method: 'GET',
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data)
    //     setproducts(data)
    //   })
    //   .catch(error => console.error('Error:', error));
  }



  useEffect(() => {

  }, [products])




  return (
    <>
      {products == "" ?
        // <Loader /> 
        ""
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
