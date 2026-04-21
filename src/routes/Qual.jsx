import "./Styles/Qual.scss"
import superteam from "./Images/Logos/Superteam.png"
import Fuse from "./Images/Logos/Fuse.png"
import Axelar from "./Images/Logos/Axelar.png"
import Tangible from "./Images/Logos/Tangible.png"
import cadence from "./Images/Logos/cadence.png"
import Cenoa from "./Images/Logos/Cenoa.png"
import Navbar from "../components/Navbar"
import { RevealRed } from "../components/Animation/RevealRed"
import { Slowvert } from "../components/Animation/Slowvert"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
// import {Baheet} from "./Images/Baheet.png"
// import {Nzube} from "./Images/Nzube.png"

function Qual() {
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 150,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
    
  //   responsive: [
  //     {
  //       breakpoint: 1124,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: false
  //       }
  //     }
  //   ]
  // };

  return (
    <div className='Qualpage'>
     <Navbar />
      <div className='ambassador-page'>
        <div className='ambassador-box'>
        <div className='middle'>
        <div className='ambassador-group'>
        <div className='ambassador-details'>
        <RevealRed>
        <div className='kol'>
          <div className='kol-logo'>
          <img src={superteam} alt="superteam" />
          </div>
          <h1>
            @SuperteamNG
          </h1>
        </div>
        </RevealRed>  
        <div className="jobs">
          <Slowvert><h1>KOL</h1></Slowvert>
          <Slowvert><h1>Team Member</h1></Slowvert>
        </div>
        </div>
        <div className='ambassador-details'>
        <RevealRed>
        <div className='kol'>
          <div className='kol-logo'>
          <img src={Fuse} alt="Fuse" />
          </div>
          <h1>
            @FuseNetwork
          </h1>
        </div>
        </RevealRed>
        <div className="jobs">
          <Slowvert><h1>KOL</h1></Slowvert>
          <Slowvert><h1>Writer</h1></Slowvert>
        </div>
        </div>
        </div>
        <div className='ambassador-group'>
        <div className='ambassador-details'>
        <RevealRed>
        <div className='kol'>
          <div className='kol-logo'>
          <img src={Axelar} alt="Axelar" />
          </div>
          <h1>
            @Axelar
          </h1>
        </div>
        </RevealRed>
        <div className="jobs">
          <Slowvert><h1>KOL</h1></Slowvert>
          <Slowvert><h1>Writer</h1></Slowvert>
        </div>
        </div>
        <div className='ambassador-details'>
        <RevealRed>
        <div className='kol'>
          <div className='kol-logo'>
          <img src={Cenoa} alt="Cenoa" />
          </div>
          <h1>
            @Cenoapp
          </h1>
        </div>
        </RevealRed>
        <div className="jobs">
          <Slowvert><h1>KOL</h1></Slowvert>
          <Slowvert><h1>Writer</h1></Slowvert>
        </div>
        </div>
        </div>
        <div className='ambassador-group'>
        <div className='ambassador-details'>
        <RevealRed>
        <div className='kol'>
          <div className='kol-logo'>
          <img src={cadence} alt="cadence" />
          </div>
          <h1>
            @CadenceProtocol
          </h1>
        </div>
        </RevealRed>
        <div className="jobs">
          <Slowvert><h1>Writer ( Composer )</h1></Slowvert>
        </div>
        </div>
        <div className='ambassador-details'>
        <RevealRed>
        <div className='kol'>
          <div className='kol-logo'>
          <img src={Tangible} alt="Tangible" />
          </div>
          <h1>
            @TangibleDAO
          </h1>
        </div>
        </RevealRed>
        <div className="jobs">
          <Slowvert><h1>Marketer</h1></Slowvert>
        </div>
        </div>
        </div>
        </div>
        </div>
      </div>
      {/* <Slider {...settings} >
        <div className="reviews">
         <div className="review-box">
        <div className="pfp">
          <img src="" alt="" />
        </div>
        <div className="review">
          <p>I would have not moved a single letter from your amazing thread @netrovert1. it is amazing from start to finish. - Winston burndead</p>
        </div>
         </div>
        </div>
        <div className="reviews">
         <div className="review-box">
        <div className="pfp">
          <img src={Baheet} alt="" />
        </div>
        <div className="review">
          <p>First of all, I've been following you for a while and i love your content. You're one of the few CT creators that is producing top notch content</p>
        </div>
         </div>
        </div>
        <div className="reviews">
         <div className="review-box">
        <div className="pfp">
          <img src={Nzube} alt="" />
        </div>
        <div className="review">
          <p>@netrovertHQ is basically behaving like his avatar. This guys is just knocking up @superteamEarn bounties like they are dominos. Just like that Naruto Uzumaki kid in his DP. I respect a true king</p>
        </div>
         </div>
        </div>
      </Slider> */}
    </div>
  )
}

export default Qual