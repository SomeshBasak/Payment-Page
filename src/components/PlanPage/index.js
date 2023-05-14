import {Component} from 'react'
import {GrRadialSelected} from 'react-icons/gr'
import {FaRupeeSign} from 'react-icons/fa'
import {AiOutlineFieldTime} from 'react-icons/ai'
import './index.css'

class PlanPage extends Component {
    render(){
        return(
            <>
            <div className='main-container-planpage'>
                <div className='first-container'>
                    <div className='inside-first-container'>
                        <button className='first-container-btn'>1</button>
                        <p className='desc'>Sign up</p>
                    </div>
                    <div className='inside-first-container'>
                        <button className='first-container-btn'>2</button>
                        <p className='desc'>Subscribe</p>
                    </div>
                </div>
                <div className="second-container">
                    <p className='descr'>Select your subscription plan</p>
                </div>
                <div className='subscription-plans'>

                    <div className="offer-portion">
                        <div className='months-part'>
                            <p className='offer-expired'>Offer expired</p>
                            <p className='months-subscription-description'>
                                <GrRadialSelected size={15} className='select-icons'/> 12 Months Subscription
                            </p>
                        </div>
                        <div className='price-part'>
                            <p className='price-total'>Total <FaRupeeSign size={10}/> 99</p>
                            <p className='price-discount'><FaRupeeSign size={10}/>8 /mo</p>
                        </div>
                    </div>

                    <div className="offer-portion">
                        <div className='months-part'>
                            <p className='offer-recommended'>Recommended</p>
                            <p className='months-subscription-description'>
                            <img className="tick-logo" alt="tick-radio-button-logo" src="https://raw.githubusercontent.com/Meetawa/payment-page/9e21eaf50b5fda134ae3ac7601f686378de4cf83/src/assets/radio-button1.svg"/> 
                            12 Months Subscription
                            </p>
                        </div>
                        <div className='price-part'>
                            <p className='price-total'>Total <FaRupeeSign size={10}/> 179</p>
                            <p className='price-discount'><FaRupeeSign size={10}/>15 /mo</p>
                        </div>
                    </div>

                    <div className="offer-portion">
                        <div className='months-input-part'>
                            <input type="radio" name="select" id="select"/>          
                            <label className='months-subscription-description' for="select">
                            6 Months Subscription
                            </label>
                        </div>
                        <div className='price-part'>
                            <p className='price-total'>Total <FaRupeeSign size={10}/> 149</p>
                            <p className='price-discount'><FaRupeeSign size={10}/>25 /mo</p>
                        </div>
                    </div>

                    <div className="offer-portion">
                        <div className='months-input-part'>
                            <input type="radio" name="select" id="select" />          
                            <label className='months-subscription-description' for="select">
                            3 Months Subscription
                            </label>
                        </div>
                        <div className='price-part'>
                            <p className='price-total'>Total <FaRupeeSign size={10}/> 99</p>
                            <p className='price-discount'><FaRupeeSign size={10}/>33 /mo</p>
                        </div>
                    </div>
                </div>
                <hr className='horizontal-line'/>
                <div className='subs-fee'>
                    <p className='subs-desc'>Subscription Fee</p>
                    <p className="subs-price"><FaRupeeSign size={10}/>18,500</p>
                </div>

                <div className="offer-portion-limited">
                        <div className='months-offer-part'>
                            <p className='offer-valid-desc'> <span className='offer-span'>Limited time offer</span> <br/> 
                            <AiOutlineFieldTime size={22} className='offer-logo'/> Offer valid till 25th March 2023</p>
                            <p className='offer-price-total'>- <FaRupeeSign size={10}/> 18,401</p>
                        </div>
                        <div className='price-offer-part'>
                            <p className='offer-valid-time'>
                               
                            </p>
                        </div>
                </div>

                <div className='gst-portion'>
                    <p className='gst-desc'><span className='Total'>Total</span> (Incl. of 18% GST)</p>
                    <p className="gst-price"><FaRupeeSign size={12}/>149</p>
                </div>
                <div className="btn-container">
                    <button className="cancel-btn">CANCEL</button>
                    <button className="pay-btn">PROCEED TO PAY</button>
                </div>
                <img src="https://cdn.razorpay.com/static/assets/merchant-badge/badge-dark.png" className='razorpay-logo' alt="logo"/>
            </div>            
</>
        )
    }
}

export default PlanPage