const PageTitle = ({title, mini_icon}) => {
    return (
        <h2 className="flex items-center mb-2">
            <span className="text-[32px] xl:text-[36px] font-bold">{title}</span>
            <span className="ml-2 ">
                <img src={mini_icon} className="xl:w-[13px] xl:h-[13px] inline-block" />
            </span>
        </h2>
    )
}

export default PageTitle;