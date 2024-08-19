import PageTitle from "../components/global.js/Page_Titile";
import mini_icon from "../assets/images/arrow-down-blue.svg";
import buttonIcon from "../assets/images/arrow-right-circle.svg";

const Requestsample = () => {
    return(
        <div className="w-full bg-white">
            <div className="w-auto xl:w-[1200px] lg:w-[970px] md:w-[750px] px-4 mx-auto mt-2 xl:pt-16 ">
                <div className="w-full px-[15px] text-[#333]">
                    <PageTitle title="Request Sample Pack" mini_icon={mini_icon}/>
                    <div className="flex flex-col md:flex-row">
                        <div className="flex flex-col md:w-1/2">
                            <p className="text-xl font-semibold text-left xl:py-4 xl:text-[26px]">Your Details</p>
                            <form action="" className="flex flex-col">
                                <div className="flex flex-col xl:flex-row mt-4">
                                    <label htmlFor="first_name" className="text-base text-left xl:text-right xl:w-1/3 xl:mr-3 ">Name: *</label>
                                    <input type="text" id="first_name" className="w-full border md:w-[280px] border-gray-300 py-2 px-4 mt-2 outline-none placeholder:text-gray-400" placeholder="(Required)" />
                                </div>
                                <div className="flex flex-col xl:flex-row mt-4">
                                    <label htmlFor="first_name" className="text-base text-left xl:text-right xl:w-1/3 xl:mr-3 ">How will you be using the labels:</label>
                                    <input type="text" id="first_name" className="w-full border md:w-[280px] border-gray-300 py-2 px-4 mt-2 outline-none placeholder:text-gray-400" placeholder="(Required)" />
                                </div>
                                <div className="flex flex-col xl:flex-row mt-4">
                                    <label htmlFor="first_name" className="text-base text-left xl:text-right xl:w-1/3 xl:mr-3 ">Email Address: *</label>
                                    <input type="text" id="first_name" className="w-full border md:w-[280px] border-gray-300 py-2 px-4 mt-2 outline-none placeholder:text-gray-400" placeholder="(Required)" />
                                </div>
                                <div className="flex flex-col xl:flex-row mt-4">
                                    <label htmlFor="first_name" className="text-base text-left xl:text-right xl:w-1/3 xl:mr-3 ">Telephone No: *</label>
                                    <input type="text" id="first_name" className="w-full border md:w-[280px] border-gray-300 py-2 px-4 mt-2 outline-none placeholder:text-gray-400" placeholder="(Required)" />
                                </div>
                                <div className="flex flex-col xl:flex-row mt-4">
                                    <label htmlFor="first_name" className="text-base text-left xl:text-right xl:w-1/3 xl:mr-3 ">Company Name:</label>
                                    <input type="text" id="first_name" className="w-full border md:w-[280px] border-gray-300 py-2 px-4 mt-2 outline-none placeholder:text-gray-400"/>
                                </div>
                                <div className="flex flex-col xl:flex-row mt-4">
                                    <label htmlFor="first_name" className="text-base text-left xl:text-right xl:w-1/3 xl:mr-3 ">Address:</label>
                                    <textarea type="text" id="first_name" className="w-full min-h-[178px] border md:w-[280px] border-gray-300 py-2 px-4 mt-2 outline-none placeholder:text-gray-400" placeholder="(Required)" />
                                </div>
                                <div className="flex flex-col xl:flex-row mt-4">
                                    <label htmlFor="first_name" className="text-base text-left xl:text-right xl:w-1/3 xl:mr-3 ">Postcode: *</label>
                                    <input type="text" id="first_name" className="w-full  border md:w-[280px] border-gray-300 py-2 px-4 mt-2 outline-none placeholder:text-gray-400" placeholder="(Required)" />
                                </div>
                                <div className="flex flex-col xl:flex-row mt-4">
                                    <label htmlFor="first_name" className="text-base text-left xl:text-right xl:w-1/3 xl:mr-3 ">Comments: *</label>
                                    <textarea type="text" id="first_name" className="w-full min-h-[178px] border md:w-[280px] border-gray-300 py-2 px-4 mt-2 outline-none placeholder:text-gray-400" placeholder="(Required)" />
                                </div>
                                <div className="flex flex-col w-full md:w-[280px] xl:mx-auto bg-[#fbd532] rounded text-lg py-2 mt-4">
                                    <p>
                                        <span>Submit</span>
                                        <span>
                                            <img src={buttonIcon} className="inline-block ml-2"/>
                                        </span>
                                    </p>
                                </div>
                            </form>
                        </div>
                        <div className="flex flex-col md:w-1/2 mt-10 md:mt-0">
                            <h3 className="text-xl font-semibold text-left xl:py-6 xl:text-[26px]">What's Inside?</h3>
                            <p className="text-base text-left my-6 xl:my-2">Our sample packs provide a small sample of EVERY product we offer, including all the different finishes for each product, so if you are still a little unsure of which material you would prefer simply enter your details now to receive a free sample pack. Please enter into the comments box if there is a specific material you would like to testdrive so we can ensure that you definitely receive it!</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Requestsample;