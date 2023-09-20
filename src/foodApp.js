import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - RestaurantContainer
 *   - Restaurant Cards
 *     - Name of restaurant
 *     - image
 *     - ratings
 *     - cuisine
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */
const Header = () => (
    <div className="header">
        <div className="logoContainer">
            <img className="logo" src="https://penji.co/wp-content/uploads/2022/08/10.-mr.-d-food-logo.jpg"></img>
        </div>    
        <div className="navItems">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);

const RestaurantCard = () => (
    <div className="res-card">
        <img className='food-img' src='https://static.toiimg.com/thumb/84667091.cms?imgsize=446034&width=800&height=800'></img>
        <h3>Romit'er Henshel</h3>
        <h4>Bengali authentic, North Indian</h4>
        <h4>4.8 stars</h4>
        <h4>33 minutes</h4>
    </div>
);

const Body = () => (
    <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
            <RestaurantCard/>
        </div>
    </div>
);

const AppLayout = () => (
    <div className="App">
        <Header/>
        <Body/>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(AppLayout());