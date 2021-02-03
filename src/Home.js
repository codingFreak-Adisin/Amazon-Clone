import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
                    alt=""
                />

                <div className="home__row">
                    <Product
                        id="49538094"
                        title="Mi Smart Band 4- Indias No.1 Fitness Band. Upto 20 days Battery-Life clour AMOLED Full touch screen, Waterproof with Music Control."
                        price={30.31}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdHuGNAftbdkotQ0OIco1nF6bMC31PQvFejj3sCp3n6cKwqMNhnWjvVg8CGs5Yh3V_lW0MQ0I&usqp=CAc"
                        rating={4}
                    />
                    <Product
                        id="4563728"
                        title="Realme Xt (pearl White, 64 Gb, 4000 Mah)"
                        price={231.77}
                        image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQc0dkQRRkYcPtrLyOiJggsk1uYB0FkRakNL9Cb3pHeaeOKgA64SG3eqSB0Mw&usqp=CAE"
                        rating={5}
                    />

                    <Product
                        id="02030405"
                        title="Amazon Echo Show 8 Charcoal, Camera for Video Calls, Smart Displays, Works With Alex"
                        price={105.99}
                        image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRSxm-Br6gxb5k14yFDwqOPE2se9Q2aSsTL_exSE3KIt0t__E0r&usqp=CAE"
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="1234567443"
                        title="Sony Bravia 138 cm (55 Inches) 4K UHD LED Smart TV KD-55X7500F (Black) (2018 model)"
                        price={1, 334.28}
                        image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTZyq5MiCeJgdFmo3f5yyxGWt_WMOAwTDCUSozHHtpZL4TMe_x1WLJEV6K5_bQuLtXJgUbV-sxn&usqp=CAE"
                        rating={5}
                    />
                    <Product
                        id="673838657"
                        title="Lenovo Ideapad S340 Thin and Light 81VV008TIN i5 10thGen 8GB 1TB HDD+256GB SSD 14in W10+MSO INT Grey"
                        price={768.23}
                        image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTvPCCA9XWaw_H4NJvM4DavvDePWThYk7DBd1xkgXODqaeidKo&usqp=CAY"
                        rating={5}
                    />
                </div>
                <Product
                    id="556473646"
                    title="Samsung 34-inch (86.40cm) Curved Monitor- 21:9 Ultrawide QLED, Thunderbolt 3 Port- LC34J791WTWXXL "
                    price={1144.76}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    rating={5}
                />
                <div className="home__row">

                </div>
            </div>
        </div>
    );
}


export default Home;
