import PageTitle from "../components/global.js/Page_Titile";
import mini_icon from "../assets/images/arrow-down-pink.svg";
import stars from "../assets/images/starrating.svg";
import star from "../assets/images/tp-logo_star_dark.svg";
import reviewData from "../assets/reviews/ReviewData";
import Taskreview from "../components/reviews/Taskreivew";

const Reviews = () => {
    return(
        <div className="w-full bg-white">
            <div className="w-auto xl:w-[1200px] lg:w-[970px] md:w-[750px] px-4 mx-auto mt-2 xl:pt-16 text-[#333]">
                <PageTitle title="Testimonials" mini_icon={mini_icon}/>
                <div className="flex flex-col mt-4">
                    <p className="hidden md:block w-full">We strive to ensure all of our customers are happy with the products & service received, and it makes us even happier when they tell us about it. So don’t just take our word for it, here is what our customers have to say about FastLabels...</p>
                    <div className="mb-8">
                        <div className="my-10">
                            <div className="">
                                <span className="text-2xl font-medium">Excellent</span>
                                <img src={stars} className="inline-block ml-2 w-[140px] h-auto "/>
                            </div>
                            <div>
                                <span>Rated 4.8/5 based on </span>
                                <span>2,513 reviews </span>
                                <span>on</span>
                                <span>
                                    <img src={star} className="w-20 h-auto inline-block"/>
                                </span>
                                
                            </div>
                        </div>
                        <div className="flex flex-wrap max-h-[1300px] overflow-y-auto">
                            {
                                reviewData.map((review, index) => {
                                    return(
                                        <div key={index} className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 border-b-[1px] border-[#e5e5e5] p-4">
                                            <Taskreview image={review.image} user={review.user} title={review.title} date={review.date} content={review.content} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews;