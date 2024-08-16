import Phone from "../../assets/images/phone.svg";

const CallPhone = (props) => {
    return(
        <div className="w-12 float-left h-8 inline-block relative ml-0  md:w-auto lg:w-56 ">
            <a className="hidden md:block">
                <img className="md:float-left" src={Phone} />
                <div className="relative float-left ml-2">
                    <span className="font-sans font-semibold text-white inline-block leading-5 text-lg">
                        {props.mediumText}&nbsp;
                        <span className="font-sans font-semibold text-white hidden leading-5 text-lg lg:inline-block">{props.phoneNumber}</span>
                    </span>
                </div>
            </a>
            <a className="md:hidden items-center cursor-pointer inline-block">
                <img className="items-center ml-3" src={Phone} />
                <div className="inline-block">
                    <span className="text-[#00a3d7]">{props.smallText}</span>
                </div>
            </a>
        </div>
    )
}    

export default CallPhone;