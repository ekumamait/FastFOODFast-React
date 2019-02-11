import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/3fs.JPG';
import user from '../../images/user.png';
import burger from '../../images/burger.jpg';
import double from '../../images/double.PNG';
import silver from '../../images/silver.JPG';
import kungpao from '../../images/kungpao.JPG';
import ricebiryani from '../../images/ricebiryani.JPG';
import snack from '../../images/snack.JPG';

/** renders the Landing page with the menu. */
class Landing extends Component {
  render() {
    return (
      <div>
        <header className="head">
          <div className="header">
            <img id="logo" src={img} width="8%" />
            <a className="button" href="#popup1">
              See Menu & Order
            </a>
            <div className="dropdown">
              <button className="dropbtn">
                <img id="user_icon" src={user} action="history.html" />
              </button>
              <div className="dropdown-content">
                <Link to="/">Order History</Link>
                <Link to="/">Log Out</Link>
              </div>
            </div>
          </div>
        </header>
        <div className="wrapper">
          <div className="menu_section">
            <div id="popup1" className="overlay">
              <div className="popup">
                <h2>Place Your Order</h2>
                <a className="close" href="#">
                  &times;
                </a>
                <div className="content">
                  <div className="form-area-section">
                    <form method="post">
                      <div>
                        <select
                          name="order-list"
                          id="meals2"
                          className="form-control"
                          placeholder="Select Your meal here"
                        />
                        <option value="burgers">El Chapo</option>
                        <option value="burgers">Double El Chapo</option>
                        <option value="wraps">SilverBack Wrap</option>
                        <option value="chicken">2pc Kungpao</option>
                        <option value="rice">Chicken Biryani</option>
                        <option value="snack packs">Halal Snack pack</option>
                      </div>
                      <div>
                        <input
                          type="number"
                          name="number of order"
                          id="number-of-piece"
                          className="form-control"
                          placeholder="Number of orders"
                        />
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="self-delivery"
                          name="self-delivery"
                          value="self-delivery"
                        />
                        <label htmlFor="self-delivery">pickup</label>
                        <input type="radio" id="delivered" name="delivered" value="delivered" />
                        <label htmlFor="delivered">delivery</label>
                      </div>
                      <div>
                        <select
                          name="Select Your location here"
                          id="location"
                          className="form-control"
                          placeholder="Select Your location here"
                        />
                        <option value="Namanve">Namanve</option>
                        <option value=">Kololo">Kololo</option>
                        <option value="Bukoto Strt">Bukoto Strt</option>
                        <option value="Nakasero">Nakasero</option>
                        <option value="Kamokya">Kamokya</option>
                        <option value="Wandegeya">Wandegeya</option>
                      </div>
                      <div>
                        <input
                          type="submit"
                          name="submit"
                          value="buy"
                          id="submit"
                          className="button-sunshine-outline-order"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div id="meals">
              <div className="menu_item">
                <div className="snack-data">
                  <small>STREET BURGERS</small>
                </div>
                <h2 className="snack-title">El Chapo</h2>
                <img src={burger} />
                <p className="snack-content">
                  Slow Grilled beef patty with a slice of cheddar cheese, caramelised onions,
                  tomatoes, ketchup and mayo
                </p>
              </div>
              <div className="menu_item">
                <div className="snack-data">
                  <small>STREET BURGERS</small>
                </div>
                <h2 className="snack-title">Double El Chapo</h2>
                <img src={double} />
                <p className="snack-content">
                  2 Slow Grilled beef patty with double slice of cheddar cheese, caramelised onions,
                  tomatoes, ketchup and mayo
                </p>
              </div>
              <div className="menu_item">
                <div className="snack-data">
                  <small>WRAPS</small>
                </div>
                <h2 className="snack-title">SilverBack Wrap</h2>
                <img src={silver} />
                <p className="snack-content">
                  Shredded chicken marinated in a fusion of spices topped with a hand full of fries,
                  guacomole, ketchup and mayonnaise wrapped in a tortilla wrap
                </p>
              </div>
              <div className="menu_item">
                <div className="snack-data">
                  <small>KUNGPAO CHICKEN</small>
                </div>
                <h2 className="snack-title">2pc Kungpao</h2>
                <img src={kungpao} />
                <p className="snack-content">
                  2pc deep fried kungpao chicken with a filling pack of fries and free drink
                </p>
              </div>
              <div className="menu_item">
                <div className="snack-data">
                  <small>RICE</small>
                </div>
                <h2 className="snack-title">Chicken Biryani</h2>
                <img src={ricebiryani} />
                <p className="snack-content">
                  Bombay style chicken biryani served with a side of kachumbari and a free soft
                  drink
                </p>
              </div>
              <div className="menu_item">
                <div className="snack-data">
                  <small>SNACK PACKS</small>
                </div>
                <h2 className="snack-title">Halal Snack Pack</h2>
                <img src={snack} />
                <p className="snack-content">
                  Fries topped with biryani sauce, shredded chicken and a spread of ketchup and mayo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
