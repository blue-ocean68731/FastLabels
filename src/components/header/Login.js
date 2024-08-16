import imgAccount from "../../assets/images/account.svg";

const Account = (props) => {
    return(
        <div className="w-12 float-left h-8 inline-block relative lg:ml-4 md:w-auto lg:w-auto ">
            <a className="hidden md:block">
                <img className="md:float-left" src={imgAccount} />
                <div className="relative float-left ml-2">
                    <span className="font-sans font-semibold text-white inline-block leading-5 text-lg">
                        {props.mediumText}&nbsp;
                    </span>
                </div>
            </a>
            <a className="md:hidden items-center cursor-pointer inline-block">
                <img className="items-center" src={imgAccount} />
            </a>
        </div>
    )
}    

export default Account;