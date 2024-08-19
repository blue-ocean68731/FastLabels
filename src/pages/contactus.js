import PageTitle from "../components/global.js/Page_Titile";
import mini_icon from "../assets/images/arrow-down-pink.svg";
import comments from "../assets/images/comments-white.svg";

const Contactus = () => {
    return(
        <div className="w-full bg-white">
            <div className="w-auto xl:w-[1200px] lg:w-[970px] md:w-[750px] px-4 mx-auto mt-2 xl:pt-16">
                <PageTitle title="Contact Us" mini_icon={mini_icon}/>
                <div className="text-left w-full text-gray-700 mb-8">
                    <p className="text-base my-4">
                        Here at FastLabels, our expert customer service team are more than happy to help you with any queries you have, whether it be a quotation request, a query about material options or to request one of our free sample packs. We're on hand to provide a smooth, stress-free experience from start to finish.
                    </p>
                    <p className="text-base font-bold">
                        Contact us using the form below or give us a call to speak to our customer service team.
                    </p>
                </div>
                <div className="w-full flex flex-col md:flex-row justify-between">
                    <div className="w-full flex flex-col md:w-1/3 mb-8 gap-4">
                        <h3 className="text-[#00a0d3] text-2xl font-semibold">Interested in placing an order?</h3>
                        <p className="text-xl">Call our <span className="font-bold">sales</span> team on</p>
                        <p className="text-2xl font-semibold underline">01302 288 199</p>
                        <p className="text-xl">for a free quote in minutes</p>
                    </div>
                    <div className="w-full flex flex-col md:w-1/3 mb-8 gap-4">
                        <h3 className="text-[#00a0d3] text-2xl font-semibold">Already have an order with us?</h3>
                        <p className="text-xl">Call our <span className="font-bold">support</span> team on</p>
                        <p className="text-2xl font-semibold underline">01302 499 079</p>
                        <p className="text-xl">for any order change, update or issue</p>
                    </div>
                    <div className="w-full xl:w-[350px] flex flex-row justify-center md:w-1/3 mb-8 gap-4 rounded-md bg-[#d3298a] p-4">
                        <div className="w-[350px] flex flex-row md:flex-col items-center justify-center gap-3">
                            <div className="flex flex-row items-center gap-2">
                                <img src={comments} className="w-8" alt="comments" />
                                <span className="text-white text-xl font-medium w-[150px]">Talk to us online on live chat too</span>
                            </div>                        
                            <div className="flex flex-col xl:gap-3 md:gap-6">
                                <button className="bg-pink-700 text-black px-4 py-2 rounded-md font-medium ">Launch</button>
                                <p className="text-white text-xs">(Mon-Fri 9am-5pm)</p>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
                <div className="w-full flex flex-col text-[#333] text-left items-start px-5">
                    <p className="text-2xl font-extrabold leading-9 py-8">Or send us an email below:</p>
                    <p className="text-base w-full border-b border-gray-400">Help & Support</p>
                    <form className="w-full flex flex-col gap-4 mt-5">
                        <input type="email" className="w-full border border-gray-400 py-1 px-4 outline-none rounded-md placeholder:text-sm" placeholder="Email Address" />
                        <textarea className="w-full border border-gray-400 py-2 px-4 outline-none rounded-md" placeholder="Message" />
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-medium">Business/Company Name</label>
                            <input type="text" className="w-full border border-gray-400 py-1 px-4 outline-none rounded-md"  />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-medium">Customer name</label>
                            <input type="text" className="w-full border border-gray-400 py-1 px-4 outline-none rounded-md"  />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-medium">Phone Number</label>
                            <input type="text" className="w-full border border-gray-400 py-1 px-4 outline-none rounded-md"  />
                        </div>
                        <div className="flex justify-end">
                            <button className="bg-pink-700 text-white w-[200px] px-4 py-2 rounded-md font-medium">Send Message</button>
                        </div>
                    </form>
                </div>
                <div className="w-full flex flex-col text-[#474747] text-left items-start gap-4 mt-5 px-4">
                    <div>
                        <p className="text-xl leading-9"><span className="font-bold">Sales:</span>01302 288 199</p>
                        <p className="text-xl leading-9"><span className="font-bold">Support:</span>01302 499 079</p>
                    </div>
                    <div>
                        <p className="text-xl leading-9"><span className="font-bold">Fastlabels</span></p>
                        <p className="text-xl leading-9">Unit 8 Network Centre, Doncaster Rd,</p>
                        <p className="text-xl leading-9">Doncaster, South YorkShire,</p>
                        <p className="text-xl leading-9"><span className="font-bold">Postcode</span> - DN3 1HP</p>
                        <p className="text-xl leading-9"><span className="font-bold">Sat Nav Code</span> - DN3 1GZ</p>
                    </div>
                        <p className="text-xl leading-9">Company registered in England.</p>
                        <p className="text-xl leading-9"><span className="font-bold">VAAT number:</span> GB 116 8565 00</p>
                        <p className="text-xl leading-9"><span className="font-bold">Opening Times:</span>Monday-Friday 9am-5px</p>
                </div>
                <div className="w-full h-[500px] bg-gray-400 mx-10 my-4">
                    <p>Google Map</p>
                </div>
            </div>
        </div>
    )
}

export default Contactus;