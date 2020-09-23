import React, { Component } from 'react'
import './styles.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import HomeContent from "../../components/homecontent/HomeContent";
import Sidebar from "../../components/sidebar/Sidebar";

const photos = [
    {
        name : "Photo 1",
        id : 1,
        url : "https://asifgraphicsdesigner.files.wordpress.com/2018/06/111.jpg",
    },
    {
        name : "Photo 2",
        id:2,
        url : "https://img.freepik.com/free-vector/interface-online-shopping-mobile-applications-websites-concepts_131114-29.jpg?size=626&ext=jpg",
    },
    {
        name : "Photo 3",
        id : 3,
        url : "https://lh5.googleusercontent.com/proxy/VKt9IWPjiMQz7mVsv02vPbTpo9pbSy2Rt_grA3rqnBOOeMAR3UpGM-ri3pdZ_UtYcoh-JD2zQvlj3SiKwox_ZSXqIWeOl3NY=s0-d",
    }
]

class Home extends Component {

    
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
          };
        return (
            <div>
                <div className="slider-class">
                <Slider {...settings}>

                    {photos.map((photo) => (
                            <img className = "img-props" key ={photo.id} alt = "no Image" src={photo.url} />
                    ))}
                </Slider>
           
                </div> 

                <div className="home-main" >
                    <div className="sidebar-content">
                        <Sidebar />
                    </div>
                    <div className="mainsection-content">
                        <HomeContent />
                    </div>
                </div>
            </div>
        )
    }

    
}

export default Home
