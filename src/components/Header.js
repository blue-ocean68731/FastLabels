import {Link} from 'react-router-dom';
import CallPhone from "./header/CallPhone";

import Logo from "../assets/images/fastlabels_logo.svg";
import Basket from "../assets/images/basket.svg";
import Account from "./header/Login";


const Header = () => {
    return(
        <div className="py-4 block box-border w-full">
            <div className="w-auto xl:w-[1200px] lg:w-[970px] sm:w-[750px] mx-auto px-4 box-border inline-block relative">
                <div className="header-top">
                    <div className=" w-full float-left relative">
                        <div className="w-[170px] float-left inline-block relative md:w-[45%] lg:w-[310px] xl:w-[510px]">
                            <p className="hidden lg:block">&nbsp;</p>
                            <a className="">
                                <Link to="/">
                                <img className="block h-[30px] w-[170px] lg:hidden md:h-10 md:w-56 cursor-pointer" src={Logo}/>
                                </Link>
                            </a>                            
                        </div>
                        <CallPhone phoneNumber="01302 288 199" mediumText="Sales" smallText="Call us" />
                        <div className="hidden md:block">
                            <CallPhone phoneNumber="01302 499 079" mediumText="Support" smalltext="" />
                        </div>
                        <Account mediumText="LOGIN"/>
                        <div className="float-left md:ml-9 inline-block relative md:w-10 h-5">
                            <a className="cursor-pointer inline-block">
                                <img className="block h-5 w-10" src={Basket}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="header-bottom hidden mt-3 float-left w-full lg:block">
                    <div className=" inline-block float-left w-[30%]">
                        <Link to="/">
                        <img className="hidden lg:block lg:mt-[-55px] lg:w-[270px] xl:mt-[-25px] xl:w-[296px] " src={Logo} />
                        </Link>
                    </div>
                    <div className="hidden lg:block lg:w-[70%] float-left text-white font-semibold">
                        <span>
                            <ul>
                                <li className="inline-block float-left mr-6 px-4 py-3 rounded-md bg-[#d3298a] ">Our Proudcts</li>
                                <li className="inline-block text-base mx-[12px] leading-[48px] float-left">
                                    <Link to="/company">About Us</Link>
                                </li>
                                <li className="inline-block text-base mx-[12px] leading-[48px] float-left">
                                    <Link to="/requests-sample-pack">Request Samples</Link>
                                </li>
                                <li className="inline-block text-base mx-[12px] leading-[48px] float-left">
                                    <Link to="/company/our-equipment">Our Equipment</Link>
                                </li>
                                <li className="inline-block text-base mx-[12px] leading-[48px] float-left">
                                    <Link to="/testimonials">Reviews</Link>
                                </li>
                                <li className="inline-block text-base mx-[12px] leading-[48px] float-left">
                                    <Link to="/sign-in">REORDER</Link>
                                </li>
                                <li className="inline-block text-base mx-[12px] leading-[48px] float-left">
                                    <Link to="/contact">Contact Us</Link>
                                </li>
                            </ul>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;