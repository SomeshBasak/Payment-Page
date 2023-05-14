import {Component} from 'react'

import Header from '../Header'
import PlanPage from '../PlanPage'

import {VscBook} from 'react-icons/vsc'
import {FaRegClock,FaRupeeSign} from 'react-icons/fa'
import {MdLiveTv,MdOutlineNoAccounts} from 'react-icons/md'
import {GiGraduateCap} from 'react-icons/gi'

import './index.css'

class Body extends Component {
    render(){ 
        return(
            <>
            <Header/>  
            <div className='main-container-body'>
                <div className='left-container'>
                    <h1 className='heading'>Access curated courses worth <br/> <FaRupeeSign className="react-body-icons" size={16}/><span className='cross-line'>18,500</span> at just <span className='blue'><FaRupeeSign className="react-body-icons" size={16}/> 99</span> per year!</h1>
                    <div className='details'>
                        <VscBook className="react-body-icons" size={22}/>
                        <p><span className='blue'>100+</span> Job relevant courses</p>
                    </div>
                    <div className='details'>
                        <FaRegClock className="react-body-icons" size={20}/>
                        <p><span className='blue'>20,000+</span> Hours of content</p>
                    </div>
                    <div className='details'>
                        <MdLiveTv className="react-body-icons" size={22}/>
                        <p><span className='blue'>Exclusive</span> webinar access</p>
                    </div>
                    <div className='details'>
                        <GiGraduateCap className="react-body-icons" size={22}/>
                        <p>Scholorship worth <span className='blue'><FaRupeeSign size={10}/>94,500</span></p>
                    </div>
                    <div className='details'>
                        <MdOutlineNoAccounts className="react-body-icons" size={22}/>
                        <p><span className='blue'>Add Free</span> learning experience</p>
                    </div>
                </div>
                <div className='right-container'>
                    <PlanPage/>
                </div>  
            </div>
            </>
        )
    }
}

export default Body