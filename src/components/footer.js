import deliveryIcon from "../assets/images/free-delivery-icon.png";
import qualityIcon from "../assets/images/premium-quality-icon.png";
import firstIcon from "../assets/images/first-class-icon.png";
import twitter from "../assets/images/twitter-icon.svg";
import facebook from "../assets/images/facebook-icon.svg";
import trustpilot from "../assets/images/tp-logo_star_dark.svg";
import verifiedVisa from "../assets/images/payment-cards-large.png";
import card1 from "../assets/images/card-01.jpg";
import card2 from "../assets/images/card-02.jpg";
import card3 from "../assets/images/card-03.jpg";
import card4 from "../assets/images/card-04.jpg";
import card5 from "../assets/images/card-05.jpg";
import card6 from "../assets/images/card-06.jpg";

import Sell from "./footer/Sell";

const sellData = [
    {
        title: "Free UK delivery",
        content: "Free delivery via DPD next-day tracked for ALL UK Pro orders!",
        image: deliveryIcon,
    },
    {
        title: "Premium Quality",
        content: "High quality materials, fade-resistant inks and high definition printing.",
        image: qualityIcon,
    },
    {
        title: "First class service",
        content: "We'll make sure you’re delighted with your order with expert support.",
        image: firstIcon,
    }
]

const Footer = () => {
    return (
        <div className="w-full flex flex-col mt-8">
            <div className="w-full footer-background py-14 xl:py-24">
                <div className="w-auto xl:w-[1200px] lg:w-[970px] md:w-[750px] mx-auto">
                    <div className="flex flex-col xl:flex-row w-full gap-12 xl:gap-4 text-white ">
                        {
                            sellData.map((data, index) => {
                                return (
                                    <Sell key={index} title={data.title} content={data.content} image={data.image} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="w-full bg-gray-200 py-8 xl:py-14">
                <div className="w-full flex flex-col md:flex-row xl:w-[1200px] lg:w-[970px] md:w-[750px] mx-auto my-6 px-5 gap-4 ">
                    <div className="w-full flex flex-col lg:flex-row md:w-1/2 lg:justify-between">
                        <div className="w-full lg:w-1/2 flex flex-col text-left md:mt-8">
                            <h3 className="text-xl mb-1 font-bold">Get Connected</h3>
                            <p className="text-base mb-8">Get deals & design tips via email</p>
                            <input type="text" placeholder="Enter your email address" className="w-full p-2 border-2 md:w-[80%] border-gray-600 outline-none mb-6" />
                            <button className="w-[20%] md:w-1/2 p-2 bg-pink-600 rounded-lg text-white">Subscribe</button>
                            <div className="flex flex-row gap-4 mt-6">
                                <img src={facebook} className="w-6" />
                                <img src={twitter} className="w-6" />
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 flex flex-col text-left mt-8 gap-4">
                            <h3 className="text-xl font-bold">About us</h3>
                            <a className="text-base font-semibold hover:underline cursor-pointer ">Customer Testimonials</a>
                            <a className="text-base font-semibold hover:underline cursor-pointer ">Privacy Policy</a>
                            <a className="text-base font-semibold hover:underline cursor-pointer ">Terms & Conditions</a>                        
                        </div>
                    </div>
                    <div className="w-full flex flex-col lg:flex-row md:w-1/2 lg:justify-between ">
                        <div className="w-full lg:w-1/2 flex flex-col text-left mt-8 gap-4">
                            <h3 className="text-xl font-bold">Products & Services</h3>
                            <a className="text-base font-semibold hover:underline cursor-pointer ">Request Sample Pack</a>
                            <a className="text-base font-semibold hover:underline cursor-pointer ">Sitemap</a>
                            <a className="text-base font-semibold hover:underline cursor-pointer ">Custom labels</a>
                            <a className="text-base font-semibold hover:underline cursor-pointer ">Adhesive Labels</a>
                        </div>
                        <div className="w-full lg:w-1/2 flex flex-col text-left mt-8">
                            <h3 className="text-xl font-bold">Contact us</h3>
                            <a className="text-base font-semibold mt-4">Sales</a>
                            <span>Call:<a className="text-base font-semibold hover:underline cursor-pointer ">01302 288 119</a></span>
                            <span>Email:<a className="text-base font-semibold hover:underline cursor-pointer ">sales@fastlabels.co.uk</a></span>
                            <a className="text-base font-semibold mt-4">Support</a>
                            <span>Call:<a className="text-base font-semibold hover:underline cursor-pointer ">01302 499 079</a></span>
                            <span>Email:<a className="text-base font-semibold hover:underline cursor-pointer ">support@fastlabels.co.uk</a></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-white py-8 xl:py-14">
                <div className="w-full flex flex-col items-center md:relative xl:w-[1200px] lg:w-[970px] md:w-[750px] mx-auto px-5 gap-4">
                    <div className=" flex flex-row relative md:absolute left-1 top-0 xl:justify-between border border-gray-600 p-2 bg-white ">
                        <span className="text-base">Review us on</span>
                        <img src={trustpilot} className="w-20" />
                    </div>
                    <div className="flex flex-col lg:flex-row items-center gap-4 ">
                        <div className="flex flex-row gap-4 mt-6">
                            <img src={verifiedVisa} className=" h-auto lg:h-9" />
                        </div>
                        <div className="flex flex-row gap-4 mt-6">
                            <img src={card1} className="h-8" />
                            <img src={card2} className="h-8" />
                            <img src={card3} className="h-8" />
                            <img src={card4} className="h-8" />
                            <img src={card5} className="h-8" />
                            <img src={card6} className="h-8" />
                        </div>
                    </div>
                    
                    <p className="text-xs">Fastlabels.co.uk - Address: Unit 8 Network Centre, Doncaster Rd, Doncaster, South Yorkshire, DN3 1HP | VAT Reg. GB 116 8565 00</p>
                    <p className="text-xs">Copyright 2024 Fastlabels.co.uk</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;