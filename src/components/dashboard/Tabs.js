import { useState } from "react";

const tabData = [
    { 
        name: 'Customisation',
        title: 'What kind of printed labels can we make for you?',
        content: 'It is essential that you have label printing with every possible customisation option. This is why we aim to give you all the choice you need from a wide range. Choose any shape, finish, measurement, material and supply, and your custom labels or stickers will be made to your exact requirements for the perfect fit. You can also upload your own artwork and enter the precise quantity you need, and with our FDA-approved food safe toner, and polypropylene or paper material, they can be cost effective, waterproof and food-safe as well. This is, of course, critical to an impressive result. When you have labels printed, your business has a brand where certain colours, shapes and materials will suit it best. Gloss, for example, can be better suited for brighter designs than a matt finish because it accentuates colour. You also need labels that tailor to the usage of your product. Paper can be more cost-effective and eco-friendly, whereas polypropylene vinyl is waterproof if the surface of the packaging labels will come into contact with liquid. Plus, custom sizing is critical for a perfect fit that looks professional. Finally, there is supply to consider. Labels on sheets work well for many labelling and distribution cases, whereas rolls are often preferred by our customers for larger-scale labelling, especially when application machines or devices are used.With this huge range available, we aim to be your one stop label shop, supporting you reliably as your business grows.', 
        href: '#', 
        current: false 
    },
    { 
        name: 'Quality',
        title: 'Quality to enhance your products',
        content: "We are one of the few UK label printers with the ability to invest in a world-leading print press: the HP Indigo. Simply put, it is a remarkable piece of technology, with up to 1200dpi printing at 16 metres per minute for unparalleled speed, colour and detail.This technology, which involves thermal offset transfer with ElecroInk particles, allows for one of the industry's largest colour gamut and super sharp detail. This is combined with highly efficient print speeds which allow high quality labels at lower costs. With this, we print labels on rolls and manufacture labels with quality that rivals the world’s biggest brands for a price our customers can afford, whether they are small batches or larger scale production runs.Other aspects of quality can be equally important too. We use strong adhesive, thick label polypropylene, vinyl or paper, and have invested in precise auto-alignment tools to make sure everything, including material, detail and cut lines, will impress you and the customers who buy your labelled products.",
        href: '#', 
        current: false 
    },
    { 
        name: 'Price',
        title:'',
        content:"As a label company, we understand that even the best looking labels still need to be margin-friendly. That’s why we offer some of the UK’s lowest prices for small, medium and large orders, with different options to suit different budgets and needs.We achieve this with efficiencies at every stage of label printing and sticker printing. At the start of the process, we have a custom platform for any setup and proofing work required that makes communication a breeze. Following on from that, we use the latest press and cutting technology that is purpose-built for premium quality at high speed output on commercial scales.This is all backed by proprietary workflows that allow us to squeeze out further efficiencies in trimming, laminating and cutting to keep our prices low without sacrificing any quality or service.We even offer one-click reorders to make future label purchases incredibly quick with the use of previous designs that we can store (and even edit) for you. And our sales and support teams are easily reached via phone, email and live chat for any queries.Our Pro offering via the calculator above is by far the most popular choice for our customers, but if you require particularly cheap printed labels, we also offer Basic starting from only £5.85.Enter your specifications to get an instant quote and see how affordable your labels can be. Plus, you’ll have fast turnaround and FREE next-day UK delivery as standard, with our usual order-to-arrival turnaround time only 2-3 working days.",
        href: '#', 
        current: true 
    },
];


const Tabs = () => {
    
    const [activeTab, setActiveTab] = useState(0);

    console.log(activeTab);

    return (
        <div className="w-full h-auto float-left my-4 md:h-[530px] lg:h-[450px] xl:h-[400px]">
            <ul id="tabs" name="tabs" defaultValue={tabData[activeTab].name} className="m-0 p-0 ">
                {tabData.map((tab, index) => (
                    <li className={`m-0 p-0 list-none font-semibold relative float-left w-full md:float-none leading-6 text-lg text-left ${activeTab===index?"h-fit md:h-auto":""} `} key={index} value={tab.name} >
                        <a className={`relative float-left text-sm md:text-lg w-full md:w-auto border-b-2 font-bold px-4 capitalize cursor-pointer ${index === activeTab ? " border-[#00a0d3] text-[#00a0d3] " : "border-[#333] md:border-none"}`} onClick={()=>setActiveTab(index)}>{tab.name}</a>
                        <div className={`w-full relative float-left md:absolute md:float-left md:top-9 ${activeTab===index ? "block" : "hidden" }`}>
                            <div className={`px-3 py-6 `}> {tab.title} </div>
                            <div className={`px-3 py-6 font-normal`}> {tab.content} </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Tabs;