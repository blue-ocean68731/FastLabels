import Clock from "../assets/images/promise-time-icon.png";
import Support from "../assets/images/promise-support-icon.png";
import Shield from "../assets/images/check-shield-white.png";
import Rshipfoed from "../assets/images/first-class-icon-white.png";
import Eco from "../assets/images/promise-eco-icon.png";
import StarGreen from "../assets/images/tp-logo_star.svg";
import StarDrak from "../assets/images/tp-logo_star_dark.svg";
import StarRating from "../assets/images/starrating.svg";
import VideoImage from "../assets/images/video-image-1.jpg";
import PlayButton from "../assets/images/play-button.png";
import Klgs from "../assets/images/klgs.png"
import Blk from "../assets/images/blk.png"
import Snsbr from "../assets/images/snsbr.png"
import Nt from "../assets/images/NT.png"
import Ymsu from "../assets/images/ymsu.png"
import ISO9001 from "../assets/images/ISO9001-ISO14001.jpg";
import LabelZero from "../assets/images/labelszero2landfill.png";
import Xeikon from "../assets/images/xeikon-large.png";
import Bpif from "../assets/images/bpif.png";
import Tick from "../assets/images/tick.svg";

import Promises1 from "../components/dashboard/Promises1";
import Promises2 from "../components/dashboard/Promises2";
import Header from "../components/Header";
import Tabs from "../components/dashboard/Tabs";
import IncOverview from "../components/dashboard/IncOverview";
import LatestBlog from "../components/dashboard/LatestBlog";

/**
 * An array of objects representing the promises or guarantees offered by the label printing service.
 * Each object has the following properties:
 * - `id`: a unique identifier for the promise
 * - `title`: the title or name of the promise
 * - `content`: a brief description of the promise
 * - `image`: the path to an image icon representing the promise
 */
const promisesData = [
    {
        id:1,
        title:"Fast Turnaround",
        content:"Your labels delivered in a few working days",
        image: Clock,
    },
    {
        id:2,
        title:"Leading Quality",
        content:"Razor sharp text, crisp graphics and rich colours",
        image: Support,
    },
    {
        id:3,
        title:"Artwork check",
        content:"We'll hand inspect your artwork before we print",
        image: Shield,
    },
    {
        id:4,
        title:"Rapid Suppport",
        content:"We'll hand inspect your artwork before we print",
        image: Rshipfoed,
    },
    {
        id:5,
        title:"Eco-friendly",
        content:"We remain ecologically aware at all times",
        image: Eco,
    },
];
const Dashboard = () => {
    return(
        <div className="flex flex-col">
            <div className="w-full flex flex-col header-background-1">
                <Header />
                <div className="w-full flex flex-col pb-8">
                    <div className=" w-auto xl:w-[1200px] lg:w-[970px] md:w-[750px] mx-auto">
                        <div className="text-white text-center ">
                            <h1 className="capitalize font-sans font text-[32px] mt-[60px] mb-4  md:text-[44px] md:mt-[80px] lg:text-[32px] lg:mt-[60px] xl:text-[52px] xl:mt-20 2xl:text-[60px] 2xl:mt-[120px] ">
                                Labels-Fast, Affordable Label Printing That Enhances Your Brand
                            </h1>
                        </div>
                        <div className="text-white">
                            <h2 className=" py-[30px] text-2xl md:text-[20px] xl:text-[28px] ">From one of the UK's largest label printing providers</h2>
                        </div>
                        <div className="text-white">
                            <h3 className=" text-lg xl:text-[22px] font-light my-[22px] ">We make labels in any bespoke size with high-resolution printing, rapid turnaround and free next-day delivery after dispatch available. This gives you labels and stickers that tick every box for some of the UK's lowest prices. We even include a reprint or refund quality guarantee for complete peace of mind.</h3>
                        </div>
                    </div>
                    <div className="w-full bg-[#00a0d2]">
                        <div className="w-auto xl:w-[1200px] lg:w-[970px] md:w-[750px] mx-auto hidden xl:flex justify-between items-center py-5 ">
                            <div className="w-auto float-left relative">
                                <span className="float-left font-bold leading-10 mr-4 text-white">1).</span>
                                <select className=" w-48 h-10 px-4 outline-none rounded-md text-lg float-left relative ">
                                    <option value style={{display:"none"}}>Choose a shape</option>
                                    <option value="Square">Square</option>
                                    <option value="Circle" >Circle</option>
                                    <option value="Rectangle" >Rectangle</option>
                                    <option value="Oval" >Oval</option>
                                    <option value="Custom Shape" >Custom Shape</option>
                                </select>
                            </div>
                            <div className="w-auto float-left relative">
                                <span className="float-left font-bold leading-10 mr-4 text-white">2).</span>
                                <select className=" w-48 h-10 px-4 outline-none rounded-md text-lg float-left relative ">
                                    <option value style={{display:"none"}}>Choose a size</option>
                                    <option value="width=25&height=25">25*25mm</option>
                                    <option value="width=37&height=37">37*37mm</option>
                                    <option value="width=51&height=51">51*51mm</option>
                                    <option value="width=62&height=62">62*62mm</option>
                                </select>
                                <a className="text-white leading-10 text-xs">
                                    <span className="h-4 w-4 bg-[#1f5aff] font-bold leading-4 rounded-[50%] mx-1 px-1.5 ">i</span>
                                    size guide
                                </a>
                            </div>
                            <span className="w-auto text-white text-base font-bold">
                                <span className="mr-4">OR enter a custom size</span>
                                <select className="outline-none h-7 w-20 rounded-lg text-black font-normal ">
                                    <option>mm</option>
                                    <option>cm</option>
                                    <option>inch</option>
                                </select>
                            </span>
                            <div className="w-auto ">
                                <div className="mr-4 float-left relative pt-1">
                                    <span className="float-left leading-8 mr-3 text-white text-sm font-bold ">W:</span>
                                    <input className="float-left h-8 w-12 px-4 text-center text-lg outline-none rounded-lg "/>
                                </div>
                                <div className="mr-8 float-left relative pt-1">
                                    <span className="float-left leading-8 mr-3 text-white text-sm font-bold ">H:</span>
                                    <input className="float-left h-8 w-12 px-4 text-center text-lg outline-none rounded-lg "/>
                                </div>
                                <a href="/quote/" className="float-right h-10 bg-yellow-300 text-black rounded-md leading-10 font-bold uppercase relative px-4  ">Continue</a>
                            </div>
                        </div>
                        
                    </div>
                    <div className="block xl:hidden bg-[#00a0d2] w-[350px] h-[300px] items-center m-auto justify-between text-white">
                        <div className="w-full relative text-left float-left text-white bg-[#0186af] font-bold px-5 py-[14px] text-lg "><span>Start by getting a price here</span></div>              
                        <div className="p-5 ">
                            <div className="w-auto float-left relative my-5">
                                <span className="float-left font-bold leading-10 mr-4 text-white">1).</span>
                                <select className=" w-48 h-10 px-4 outline-none rounded-md text-lg float-left relative ">
                                    <option value style={{display:"none"}}>Choose a shape</option>
                                    <option value="Square">Square</option>
                                    <option value="Circle" >Circle</option>
                                    <option value="Rectangle" >Rectangle</option>
                                    <option value="Oval" >Oval</option>
                                    <option value="Custom Shape" >Custom Shape</option>
                                </select>
                            </div>
                            <div className="w-auto float-left relative mb-5">
                                <span className="float-left font-bold leading-10 mr-4 text-white">2).</span>
                                <select className=" w-48 h-10 px-4 outline-none rounded-md text-lg float-left relative ">
                                    <option value style={{display:"none"}}>Choose a size</option>
                                    <option value="width=25&height=25">25*25mm</option>
                                    <option value="width=37&height=37">37*37mm</option>
                                    <option value="width=51&height=51">51*51mm</option>
                                    <option value="width=62&height=62">62*62mm</option>
                                </select>
                                <a className="text-white leading-10 text-xs">
                                    <span className="h-4 w-4 bg-[#1f5aff] font-bold leading-4 rounded-[50%] mx-1 px-1.5 ">i</span>
                                    size guide
                                </a>
                            </div>
                            <span className="w-auto float-left text-white text-base font-bold mb-5">
                                <span className="float-left mr-4">OR enter a custom size</span>
                                <select className="outline-none float-left h-7 w-20 rounded-lg text-black font-normal ">
                                    <option>mm</option>
                                    <option>cm</option>
                                    <option>inch</option>
                                </select>
                            </span>
                            <div className="w-auto mt-5 ">
                                <div className="mr-4 float-left relative pt-1">
                                    <span className="float-left leading-8 mr-3 text-white text-sm font-bold ">W:</span>
                                    <input className="float-left h-8 w-12 px-4 text-center text-lg outline-none rounded-lg "/>
                                </div>
                                <div className="mr-3 float-left relative pt-1">
                                    <span className="float-left leading-8 mr-3 text-white text-sm font-bold ">H:</span>
                                    <input className="float-left h-8 w-12 px-4 text-center text-lg outline-none rounded-lg "/>
                                </div>
                                <a href="/quote/" className="float-right h-10 bg-yellow-300 text-black rounded-md leading-10 font-bold uppercase relative px-4  ">Continue</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-auto xl:w-[1200px] lg:w-[970px] md:w-[750px] mx-auto text-white">
                        <div className="my-8">
                            <h2 className=" text-[36px] items-center">Our five promises</h2>
                        </div>
                        <Promises1 title={promisesData[0].title} content={promisesData[0].content} image={promisesData[0].image} />
                        <Promises1 title={promisesData[1].title} content={promisesData[1].content} image={promisesData[1].image} />
                        <Promises1 title={promisesData[2].title} content={promisesData[2].content} image={promisesData[2].image} />
                        <Promises2 title={promisesData[3].title} content={promisesData[3].content} image={promisesData[3].image} />
                        <Promises2 title={promisesData[4].title} content={promisesData[4].content} image={promisesData[4].image} />                
                    </div>
                    <div className=" flex flex-col md:flex-row text-white">
                        <div className="w-full md:w-[50%] float-left relative px-[15px] ">
                            <div className="w-auto md:float-right float-none mx-auto inline-block relative">
                                <span className="block w-[55%] font-[100%] mb-2">
                                    <img className="w-full h-full " src={StarGreen} />
                                </span>
                                <span className="block mb-2 w-[94%] ">
                                    <img className="w-full h-full" src={StarRating} />
                                </span>
                                <span className=" text-sm leading-3 block  ">
                                <span id="reviews-summary" class="tp-widget-businessinfo">
                                    <span aria-hidden="true" class="tp-widget-businessinfo__trustscore">TrustScore <strong id="trust-score">4.8</strong> | </span>
                                    <span class="tp-widget-businessinfo__total"><strong id="businessEntity-numberOfReviews-total">2,512</strong> <span id="translations-reviews">reviews</span></span>
                                </span>
                                </span>
                            </div>
                        </div>                    
                        <div className="w-full md:w-[50%] mt-3 md:mt-0 relative float-left text-white ">
                            <div className="w-[90%] float-left px-3 rounded-xl mt-30 relative md:w-[300px] md:float-none md:table md:mt-5 md:mb-2 lg:w-[400px] lg:h-[95px] bg-[#d63892]">
                                <div className="w-[35%] md:w-[40%] lg:w-[35%] p-3 md:text-sm lg:text-base relative float-left ">
                                    <span>
                                        <b>VIDEO:</b>
                                        Watch how we make custom labels
                                    </span>
                                </div>
                                <div className="w-[40%] lg:w-[190px] relative float-left py-3 ">
                                    <img className="w-full h-full" src={VideoImage} />
                                </div>
                                <div className="w-20 h-20 bg-cover absolute right-[-40px] top-[50%] transform -translate-y-1/2 ">
                                    <img src={PlayButton} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#f5f4f5]">
                <div className="w-auto xl:w-[1200px] lg:w-[970px] md:w-[750px] mx-auto px-[10px] py-[15px] m-auto ">
                    <div className="w-full px-4 text-sm leading-5 text-[#5d5f61] text-left md:w-2/3 float-left relatvie">
                        <div className="">
                            <h3 className="text-lg lg:text-[36px] my-4 text-[#00a0d3] font-bold ">Fast labels - a label company trusted by clients across the UK</h3>
                        </div> 
                        <div className="">
                            <p className="my-5 text-base md:text-lg text-[#5d5f61] font-normal ">Choose ANY shape and enter your own measurements for printed labels which perfectly suit your needs. Every label will be printed with our state-of-the-art Xeikon printers and then custom cut for an exceptional finish. You'll also have direct access to UK customer support via phone, email and live chat every step of the way. </p>    
                        </div>                
                        <div className="">
                            <p className="my-5 text-base md:text-lg text-[#5d5f61] font-normal ">Our label printing covers a wide range of materials and finishes, including paper, waterproof polypropylene, gloss, matt, clear, metallic, textured paper and more. Plus they're all supplied on either rolls, sheets or as single labels.</p>    
                        </div>                
                        <div className="">
                            <p className="my-5 text-base md:text-lg text-[#5d5f61] font-normal ">It's why we're used by small businesses through to multinationals, including:</p>    
                        </div>
                        <div>
                            <div class="brand-trust hidden-xs my-3">        
                                <ul>
                                    <li className="inline-block p-3 relative float-left">
                                        <img className="h-[35px]" src={Klgs} />
                                    </li>
                                    <li className="inline-block p-3 relative float-left">
                                        <img className=" h-[28px] " src={Blk} />
                                    </li>
                                    <li className="inline-block p-3 relative float-left">
                                        <img className=" h-[28px] " src={Snsbr} />
                                    </li>
                                    <li className="inline-block p-3 relative float-left">
                                        <img className=" h-[35px] " src={Nt} />
                                    </li>
                                    <li className="inline-block p-3 relative float-left">
                                        <img className=" h-[35px] " src={Ymsu}/>
                                    </li>
                                </ul>
                            </div>             
                        </div>
                    </div>
                    <div className="hidden md:block w-1/3 relative float-left px-4">
                        <div className="w-full float-left mt-11">
                            <div className="float-left w-[calc(60%-15px)] mr-[15px]">
                                <img src={ISO9001} />
                                <div className="float-left w-full text-center my-4 ">
                                    Cert No. 20115 
                                    <b> ISO 9001 &amp; ISO 14001</b>
                                </div>
                            </div>
                            <div className="float-left w-[40%]">
                                <img src={LabelZero} />
                            </div>
                            <div className="float-left w-[calc(60%-15px)] mr-[15px]">
                                <img src={Xeikon} />
                            </div>
                            <div className="float-left w-[40%]">
                                <img src={Bpif}/>
                            </div>
                            <div className="trust-images">                               
                                
                            </div>
                        </div>                        
                    </div>
                    <div className="block md:hidden">
                        <div className="float-left relative w-full mt-[30px]">
                            <div className="h-[190px] w-1/2 float-left text-center px-[10px]">
                                        <img src={ISO9001}/>
                                        <div className="float-left w-full text-center my-[15px]">
                                            Cert No. 20115
                                            <b> ISO 9001 &amp; ISO 14001</b>
                                        </div>
                                    </div>
                            <div className="h-[190px] w-1/2 float-left text-center px-[10px]">
                                    <img src={LabelZero}/>
                                </div>
                            <div className="h-[190px] w-1/2 float-left text-center px-[10px]">
                                    <img src={Xeikon}/>
                                </div>
                            <div className="h-[320px] w-1/2 float-left text-center px-[10px]">
                                    <img src={Bpif}/>
                                </div>
                            
                        </div>
                    </div>
                </div> 
            </div>
            <div className="w-full bg-[#f5f4f5]">
                <div className="w-auto xl:w-[1200px] lg:w-[970px] md:w-[750px] mx-auto">
                    <div className="w-full relative float-left md:w-1/2 xl:w-[60%] md:px-0 px-4">
                        <div className="float-left w-full ">
                            <span className="bg-[#00a0d3] float-left text-white font-semibold text-center w-full py-4 mb-4">BEHIND THE SCENES: SEE THE PROCESS FROM START TO FINISH</span>
                            <div className="w-full h-72 relative float-left mb-8 bg-[#DDD]  ">

                            </div>
                        </div>
                    </div>
                    <div className="w-full relative float-left md:w-1/2 xl:w-[40%] px-4 ">
                        <div className="float-left w-full">
                            <span className="bg-[#d63892] float-left text-white font-semibold text-center w-full uppercase py-4 mb-4">latest customer comments</span>
                            <div className=" w-full relative float-left bg-white p-[10px] box-border ">
                                <div className="relative flex flex-col text-sm h-full mx-auto max-w-[750px]">
                                    <div className="py-5 flex-shrink-0 relative text-center">
                                        <div className=" inline-block mx-[6px] align-middle ">
                                            <h1 className=" text-2xl font-medium align-baseline ">Excellent</h1>
                                        </div>
                                        <div className="inline-block mx-[6px] align-middle ">
                                            <img className="w-full h-[25px] relative" src={StarRating} />
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <a className="text-sm inline-block mx-[3px] mb-[6px] align-bottom text-[#191919] text-center">
                                            <span className="relative float-left">Based on 2,512 reviews on </span>
                                            <img className="w-20 h-5 relative float-left" src={StarDrak} />
                                        </a>
                                    </div>
                                </div>
                                <div className="overflow-y-auto m-0 p-0 h-48">
                                    <div className="my-4 block text-[#727273] font-normal text-sm text-left">Showing our 5 star reviews</div>
                                    <div className="w-full flex flex-col text-left rounded-sm overflow-hidden p-4 relative break-words border-b-2 mb-4">
                                        <div>
                                            <img className="w-[100px] h-[20] relative float-left" src={StarRating} />
                                            <div className=" text-[#6c6c85]">
                                                <img className="w-[14px] h-[14px] relative float-left ml-2 mr-[3px] mt-1 " src={Tick}/>
                                                <span className="text-sm">Verified</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-row text-xs my-2 text-[#6c6c85]">
                                            <span className="font-extrabold text-ellipsis overflow-hidden whitespace-nowrap">Jake M,</span>
                                            <span>17 hours age</span>
                                        </div>
                                        <div className="text-[#191919] text-sm font-bold leading-5 mb-3">
                                            Very reliable and fast service
                                        </div>
                                        <div className="text-[#00b67a] cursor-pointer text-sm font-medium text-center">
                                            <span>Read More</span>
                                        </div>
                                    </div>
                                    <div className="w-full flex flex-col text-left rounded-sm overflow-hidden p-4 relative break-words border-b-2 mb-4">
                                        <div>
                                            <img className="w-[100px] h-[20] relative float-left" src={StarRating} />
                                            <div className=" text-[#6c6c85]">
                                                <img className="w-[14px] h-[14px] relative float-left ml-2 mr-[3px] mt-1 " src={Tick}/>
                                                <span className="text-sm">Verified</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-row text-xs my-2 text-[#6c6c85]">
                                            <span className="font-extrabold text-ellipsis overflow-hidden whitespace-nowrap">Jake M,</span>
                                            <span>17 hours age</span>
                                        </div>
                                        <div className="text-[#191919] text-sm font-bold leading-5 mb-3">
                                            Very reliable and fast service
                                        </div>
                                        <div className="text-[#00b67a] cursor-pointer text-sm font-medium text-center">
                                            <span>Read More</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="w-auto xl:w-[1200px] lg:w-[970px] md:w-[750px] mx-auto my-10">
                    <Tabs />
                    <IncOverview />
                </div>
                
            </div>
            <div className="w-full">
                <div className="w-auto xl:w-[1200px] lg:w-[970px] md:w-[750px] mx-auto my-10">
                    <LatestBlog />
                </div>
            </div>           
        </div>
    )
}

export default Dashboard;