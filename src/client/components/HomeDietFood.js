import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

class HomeDietFood extends Component {
  render(){
    return (
      <MuiThemeProvider>
        <Paper style={{ marginTop: "15px", marginBottom: "20px", padding: "15px", height: "480px" }}>
          <p style={{ fontWeight: "normal", fontSize: "10" }}>만 2세 식단</p>
          <hr style={{ maxWidth: "150px", marginLeft: "0px" }}/>
          {this.props.products.slice(0,5).map((product, index)=>{
            return (
              <div className="HomeDietFood" key={index}>
                <Link className="HomeDietFoodImg" to={`/foodDetail/${product._id}`}><img src={product.image} alt="food"/></Link>
                <div className="HomeDietFoodFullText">
                  <p className="HomeDietFoodFullTextTitle">{product.name}</p>
                  <p className="HomeDietFoodFullTextSubtitle">{product.subname}</p>
                </div>
                <hr />
                <p className="HomeDietFoodPrice">{product.price.toLocaleString()} 원</p>
              </div>
            );
          })}
        </Paper>
        <Paper style={{ marginTop: "15px", marginBottom: "20px", padding: "15px", height: "480px" }}>
          <p style={{ fontWeight: "normal", fontSize: "10" }}>만 3세 식단</p>
          <hr style={{ maxWidth: "150px", marginLeft: "0px" }}/>
          {this.props.products.slice(5,10).map((product, index)=>{
            return (
              <div className="HomeDietFood" key={index}>
                <Link className="HomeDietFoodImg" to={`/foodDetail/${product._id}`}><img src={product.image} alt="food"/></Link>
                <div className="HomeDietFoodFullText">
                  <p className="HomeDietFoodFullTextTitle">{product.name}</p>
                  <p className="HomeDietFoodFullTextSubtitle">{product.subname}</p>
                </div>
                <hr />
                <p className="HomeDietFoodPrice">{product.price.toLocaleString()} 원</p>
              </div>
            );
          })}
        </Paper>
        <Paper style={{ marginTop: "15px", marginBottom: "20px", padding: "15px", height: "480px" }}>
          <p style={{ fontWeight: "normal", fontSize: "10" }}>만 4세 식단</p>
          <hr style={{ maxWidth: "150px", marginLeft: "0px" }}/>
          {this.props.products.slice(10,15).map((product, index)=>{
            return (
              <div className="HomeDietFood" key={index}>
                <Link className="HomeDietFoodImg" to={`/foodDetail/${product._id}`}><img src={product.image} alt="food"/></Link>
                <div className="HomeDietFoodFullText">
                  <p className="HomeDietFoodFullTextTitle">{product.name}</p>
                  <p className="HomeDietFoodFullTextSubtitle">{product.subname}</p>
                </div>
                <hr />
                <p className="HomeDietFoodPrice">{product.price.toLocaleString()} 원</p>
              </div>
            );
          })}
        </Paper>
        <Paper style={{ marginTop: "15px", marginBottom: "20px", padding: "15px", height: "480px" }}>
          <p style={{ fontWeight: "normal", fontSize: "10" }}>만 5세 식단</p>
          <hr style={{ maxWidth: "150px", marginLeft: "0px" }}/>
          {this.props.products.slice(15,20).map((product, index)=>{
            return (
              <div className="HomeDietFood" key={index}>
                <Link className="HomeDietFoodImg" to={`/foodDetail/${product._id}`}><img src={product.image} alt="food"/></Link>
                <div className="HomeDietFoodFullText">
                  <p className="HomeDietFoodFullTextTitle">{product.name}</p>
                  <p className="HomeDietFoodFullTextSubtitle">{product.subname}</p>
                </div>
                <hr />
                <p className="HomeDietFoodPrice">{product.price.toLocaleString()} 원</p>
              </div>
            );
          })}
        </Paper>
      </MuiThemeProvider> 
    )
  }
};

export default HomeDietFood;
