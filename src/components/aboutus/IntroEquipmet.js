const IntroEquipment = ({title, content, image}) => {
    return (
        <div>
            <div className="flex flex-col gap-4 text-left text-[#333]">
                <img src={image} alt="image" className="w-full md:max-w-fit"/>
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="text-base ">{content}</p>
            </div>
        </div>
    )
}

export default IntroEquipment;