import { ReactComponent as mini_icon} from "../assets/images/arrow-down-pink.svg";
import Main1 from "../assets/aboutus/264-8-about-main-image-01.jpg";
import Main2 from "../assets/aboutus/266-Team_Image.jpg";

import IntroTeam from "../components/aboutus/IntroTeam";
import Team from "../components/aboutus/Team_Members";

import team_info from "../assets/aboutus/data/team_info";
import PageTitle from "../components/global.js/Page_Titile";

const componentData = [
    {
        image:Main1,
        title:"How do we achieve great Labels?",
        content:"With our Xeikon 3030 Plus press and state-of-the-art ancillary machinery, your labels can be printed with 1200dpi resolution in any custom shape or size. This technology also offers class-leading speed and efficiency, so simply put, your labels will have the highest standard of colour and detail available in the UK today, but with a rapid turnaround and very competitive price.",
    },
    {
        image:Main2,
        title:"Who makes it possible?",
        content:"Our team consists of 35 hand-picked print and design technicians. With a deep understanding of our machinery and label printing as a whole, your order will always be in the safest possible pair of hands. Each member of staff will ensure that your labels are printed with a meticulous finish, matched to your specifications exactly, and then dispatched without delay by free next-day UK delivery. ",
    },
]

const Aboutus = () => {
    return (
        <div className="flex flex-col bg-white">
            <div className="w-auto xl:w-[1200px] lg:w-[970px] md:w-[750px] px-4 mx-auto my-10">
                <div className="py-4">
                    <PageTitle title="About Us" mini_icon={mini_icon} />
                    <p className="text-base text-left">
                        Established in 2009 and based in Doncaster, Fast Labels is one of the UK’s leading label printers. We pride ourselves in having some of the most technologically advanced equipment in the country. This includes our world-class press, the Xeikon 3030 Plus, which prints labels with unmatched speed, quality and price. Backed by a team with a real passion for all things label, we've provided thousands of medium-to-large orders in a wide range of fields, including retail, food & drink, manufacturing and pharmaceutical industries. 
                    </p>
                </div>
                <div className="flex flex-col xl:flex-row">
                    <div className="w-full xl:w-1/2 xl:pr-2">
                        <IntroTeam image={componentData[0].image} title={componentData[0].title} content={componentData[0].content} />
                    </div>
                    <div className="w-full xl:w-1/2 xl:pl-2">
                        <IntroTeam image={componentData[1].image} title={componentData[1].title} content={componentData[1].content} />
                    </div>
                </div>
                <div className="border-y-2 my-6 py-6">
                    <span className="text-lg italic block w-full xl:w-[80%] xl:text-2xl m-0 xl:m-auto">
                        That's enough about us. Why not check out our extensive range of <a className="text-[#00a3d7]">custom printed labels</a> and feel free to <a className="text-[#00a3d7]">contact us</a> for a chat about custom label printing?
                    </span>                            
                </div>
                {
                    team_info.map((item, index) => {
                        return (
                            <div className="relative float-left w-full md:w-1/3 px-3 pt-6">
                                <Team key={index} image={require(`../assets/aboutus/team_members/${item.name}.jpg`)} title={item.name} content={item.role} />
                            </div> 
                        )
                    })
                }
            </div>            
        </div>
    )
}

export default Aboutus;