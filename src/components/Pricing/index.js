import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import MyButton from '../utils/Button';

class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    positions: ["Balcony", "Medium", "Star"],
    desc: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Eveniet quas veniam temporibus tempora quod velit accusamus odio mollitia, repellendus magnam praesentium quae dignissimos!Ipsa omnis enim, voluptate pariatur suscipit quibusdam!",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Eveniet quas veniam temporibus tempora quod velit accusamus odio mollitia, repellendus magnam praesentium quae dignissimos!Ipsa omnis enim, voluptate pariatur suscipit quibusdam!",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Eveniet quas veniam temporibus tempora quod velit accusamus odio mollitia, repellendus magnam praesentium quae dignissimos!Ipsa omnis enim, voluptate pariatur suscipit quibusdam!"
    ],
    linkto: ["http://sales/b", "http://sales/m", "http://sales/s"],
    delay:[500,0,500]
  };

  showBoxesHandler = () => this.state.prices.map((box,i) => (
    <Zoom key={i} delay={this.state.delay[i]}>
        <div className="pricing_item">
            <div className="pricing_inner_wrapper">
                <div className="pricing_title">
                    <span>${this.state.prices[i]}</span>
                    <span>{this.state.positions[i]}</span>
                </div>
                <div className="pricing_description">
                    {this.state.desc[i]}
                </div>
                <div className="pricing_buttons">
                  <MyButton 
                  text="Purchase"
                  bck="#FFA800"
                  color="#FFFFFF"
                  link={this.state.linkto[i]}/>
                </div>
            </div>
        </div>
  </Zoom>
  ))
  

  render() {
    return (
      <div className="bck_black">
        <div class="center_wrapper">
          <h2 style={{color:'white',textAlign:'center',fontSize: '36px',margin: '25px -5px',}}>Pricing</h2>

          <div className="pricing_wrapper">
            {this.showBoxesHandler()}
          </div>
        </div>
      </div>
    );
  }
}

export default Pricing;