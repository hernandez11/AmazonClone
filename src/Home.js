import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
            />

            {/* product */}
            <div className="home__row">
                <Product
                    id= "id#"
                    title= "Echo Plus (2nd Gen) - Premium sound with built-in smart home hub - Charcoal"
                    price= {99.99}
                    rating= {4}
                    image="https://www.worldshop.eu/medias/sys_master/h5d/he5/8895597838366.png"
                />
                <Product
                    id= "id#"
                    title= "New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7)"
                    price= {2149.00}
                    rating= {5}
                    image="https://astorekw.com/web/image/product.template/56293/image"
                />
            </div>

            <div className="home__row">
                <Product
                    id= "id#"
                    title= "Hydro Flask 12 Oz Coffee Mug"
                    price= {29.95}
                    rating= {4}
                    image="https://media-emea.hydroflask.com/media/catalog/product/cache/9177cfe059281270017bc29637323e6d/h/y/hydro-flask-stainless-steel-vacuum-insulated-12-oz-coffee-mug-pacific.jpg"
                />
                <Product
                    id= "id#"
                    title= "Samsung Gear S3 Frontier Smartwatch (Bluetooth)"
                    price= {199.99}
                    rating= {5}
                    image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6280/6280408_sd.jpg;maxHeight=640;maxWidth=550"
                />
                <Product
                    id= "id#"
                    title= "Cracking the Coding Interview: 189 Programming Questions and Solutions 6th Edition"
                    price= {26.99}
                    rating= {5}
                    image="https://miro.medium.com/max/500/0*0-ArICuBgQiHnSik.png"
                />
            </div>
            <div className="home__row">
                <Product
                    id= "id#"
                    title= "Samsung 49-Inch CRG9 Curved Gaming Monitor (LC49RG90SSNXZA) – 120Hz Refresh, Ultrawide Screen QLED"
                    price= {1499.66}
                    rating= {5}
                    image="https://mightygadget.co.uk/wp-content/uploads/2019/08/Samsung-ultra-wide.png"
                />
            </div>

        </div>
    );
}

export default Home;
