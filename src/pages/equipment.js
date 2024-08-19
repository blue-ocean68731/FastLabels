import PageTitle from '../components/global.js/Page_Titile';
import mini_icon from "../assets/images/arrow-down-pink.svg";
import IntroEquipment from '../components/aboutus/IntroEquipmet';

import EquipmentData from '../assets/aboutus/data/EquipmentData';

const Equipment = () => {
    return (
        <div className="w-full bg-white">
            <div className="w-auto xl:w-[1200px] lg:w-[970px] md:w-[750px] px-4 mx-auto mt-2 xl:pt-16">
                <PageTitle title="Request Sample Pack" mini_icon={mini_icon}/>
                <div className='flex flex-col xl:flex-row w-full gap-8 mt-6'>
                    <div className='w-full xl:w-1/2'>
                        <IntroEquipment title={EquipmentData[0].title} content={EquipmentData[0].content} image={EquipmentData[0].image} />
                    </div>
                    <div className='w-full xl:w-1/2'>
                        <IntroEquipment title={EquipmentData[1].title} content={EquipmentData[1].content} image={EquipmentData[1].image} />
                    </div>
                </div>                
                <div className='flex flex-col xl:flex-row w-full gap-8'>
                    <div className='w-full xl:w-1/2'>
                        <IntroEquipment title={EquipmentData[2].title} content={EquipmentData[2].content} image={EquipmentData[2].image} />
                    </div>
                    <div className='w-full xl:w-1/2'>
                        <IntroEquipment title={EquipmentData[3].title} content={EquipmentData[3].content} image={EquipmentData[3].image} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Equipment;