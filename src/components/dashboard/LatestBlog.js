import BlogImage from "../../assets/images/blog-image.png";
import Arrow from "../../assets/images/arrow-down-pink.svg";

const LatestBlog = () => {
    return (
        <div className="w-full md:w-1/2 px-3">
            <div className="w-full text-left text-2xl xl:text-[36px] font-bold mb-2">
                <h1 className="flex items-center">
                    <span>Latest From Our Blog</span>
                    <span className="ml-2">
                        <img src={Arrow} alt="Arrow" className="inline-block" />
                    </span>
                </h1>
            </div>
            <div className="w-full h-[162px] float-left xl:w-[162px] relative overflow-hidden">
                <img className="w-full relative float-left bg-cover" src={BlogImage} />
            </div>
            <div className="text-left relative float-none xl:float-left xl:w-[calc(100%-162px)] xl:pl-4">
                <span className="block text-lg font-bold mt-2 xl:mt-0 text-[#00a3d7] ">13 Best Practises For Label Design</span>
                <span className="block text-base my-2">Product labelling isn't just about creating something pretty. It's about creating something that stands out on the shelf, oozes your brand values, and attracts ...</span>
                <div className="bg-[#d63892] rounded-md text-center text-base w-32 p-3 text-white"> Read more</div>
            </div>
            
        </div>
    )
}

export default LatestBlog;