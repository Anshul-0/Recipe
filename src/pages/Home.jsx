import apiData from "../api/api.json";
import "./Home.css";

export const Home = () => {
    return (
        <div className="container">
            {apiData.map((currEle, idx) => (
                <div className="cart-card" key={idx}>
                    <h2 className="cart-title">Cart ID: {currEle.id}</h2>

                    <div className="products-grid">
                        {currEle.products.map((product, index) => (
                            <div className="product-card" key={index}>
                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                    className="product-img"
                                />

                                <h3 className="product-title">{product.title}</h3>
                                <p className="product-price">${product.price}</p>

                                <div className="button-group">
                                    <button className="btn view-btn">View</button>
                                    <button className="btn cart-btn">Add to Cart</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
