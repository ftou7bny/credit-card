import React from 'react' ;

const CarteBancaire = () => {
return (
<div className="panel">
  <div className="card card--front">
  <div className="card__name">CREDIT CARD</div>
  <img className="card__puce"  src="https://maxcdn.icons8.com/Share/icon/Mobile//sim_card_chip1600.png"/> 
  
    <div className="card__number">1111 1111 1111 1111</div>
   <div className=" line2"> 
    <div>5422</div>
    <div className="card__validation" ><div ><div className="m_y">MONTH/YEAR</div><div>10/17</div></div> <div className="valid">VALID THRU</div></div>
    </div>
    <div >CARDHOLDER</div>
    <img className="card__logo"  src="http://cliparts.co/cliparts/8TE/9n6/8TE9n67Ta.jpg"/>    
  </div>
 

    </div>
    )
    }
    export default CarteBancaire ;