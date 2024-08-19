const Sell = ({title, content, image}) => {
    return(
        <div className="flex flex-row xl:w-1/3 items-center text-left gap-4">
            <div className="relative w-[50px] h-[50px]">
                <img src={image} className="w-[50px] h-[50px]"/>
            </div>
            <div className="w-10/12 relative float-left">
                <h3 className="text-xl">{title}</h3>
                <p className="text-lg">{content}</p>
            </div>
        </div>
    )
}

export default Sell;