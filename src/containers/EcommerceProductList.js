// Container: react or redux ko connect karne ke lia use karte hia container ka.
import { connect } from "react-redux";//react or redux ko connect karega  // react-redux se connect nikalenge connect karne ke lia
import EcommerceList from "../components/EcommerceList";
import { addToCart, removeToCart } from "../Services/Actions/actions"; //Redux//  yanha se actions nikalenge

//connect ke pass 2 funtion hote hai:--> data send karne me kaam aata hai REDUX me, or data get karne me kaam aata hai REDUX me.
//1.mapStateToProps:- STORE se data upas lane ke lia 
//2.mapDispatchToProps:- STORE me data ko send karne ke lia use karte hai.

const mapStateToProps = state => ({ //STORE me jo data hai vo kanhi 3rd compoment me use ho raha hoga. 
//To STORE se data upas use karne ke lia mapStateToProps ka use karte hai.

    cardData:state.cardItem
})

const mapDispatchToProps = dispatch => ({ // data ko STORE me bhejne ke lia use karte hai.
    addToCartHandler:data=>dispatch(addToCart(data)),
    // removeToCartHandler:data=>dispatch(removeToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EcommerceList)//<--early call pe jo hamara component hai #Home<-- ye de dia hai.


// export default Home;
//component or redux ko map karenge iss lia container ka use kart hai
