import Xeikon from "../../assets/images/xeikon.jpg";
import Team from "../../assets/images/team.jpg";
import Abg from "../../assets/images/abg.jpg";

const IncOverview = () => {
    return(
        <div className="w-full">
            <div className="">
                <img className="w-full h-[802px]  md:w-[379px] md:h-[440px] lg:h-[440px] xl:w-[480px] xl:h-[429px] 2xl:h-[500px] relative float-left mr-8 my-8  bg-cover" src={Xeikon} />
                <div className=" w-[630px] h-[240px] mb-[30px] p-[30px] xl:my-8 2xl:h-[250px] 2xl:pt-10 2xl:px-10 bg-[#00a0d3] hidden xl:block text-white text-base text-left leading-6 relative float-left">
                    <p className="mb-4">Serving the UK for over 12 years, we've built a team of print experts backed by the latest printing technology in our factory here in Doncaster. It allows us to meet orders of any size with the highest standards of professional printing.</p>
                    <p className="mb-4">We have ISO accreditations (Cert No. 20115 - ISO 9001 & ISO 14001), are a British Printing Industries Federation (BPIF) platinum member, and won the Medium Business of the Year award at the 2023 Doncaster Business Awards.</p>
                </div>
                <img className="w-full h-[205px] hidden md:my-8 xl:mt-0 md:block md:w-[281px] lg:w-[501px] lg:-[205px] xl:w-[300px] xl:h-[159px] 2xl:h-[220px] relative float-left bg-cover lg:mr-8  " src={Team} />
                <img className="w-full h-[205px] hidden md:mb-8 md:block md:w-[281px] lg:w-[501px] lg:h-[205px] xl:w-[300px] xl:h-[159px] 2xl:h-[220px] relative float-left bg-cover " src={Abg} />
            </div>
            <div className=" w-full p-4 bg-[#00a0d3] block xl:hidden text-white text-base text-left leading-6 relative float-left">
                <p className="mb-4">Serving the UK for over 12 years, we've built a team of print experts backed by the latest printing technology in our factory here in Doncaster. It allows us to meet orders of any size with the highest standards of professional printing.</p>
                <p className="mb-4">We have ISO accreditations (Cert No. 20115 - ISO 9001 & ISO 14001), are a British Printing Industries Federation (BPIF) platinum member, and won the Medium Business of the Year award at the 2023 Doncaster Business Awards.</p>
            </div>
        </div>
    )
}

export default IncOverview;

