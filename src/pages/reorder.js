import badgeData from "../assets/reorder/badgeData";
import Badge from "../components/reorder/Badge";

const Reorder = () => {
    return(
        <div className="w-full bg-white">
            <div className="w-auto xl:w-[1200px] lg:w-[970px] md:w-[750px] px-4 mx-auto mt-2 xl:pt-16 text-[#333]">
                <div>
                    <h1 className="text-center font-black text-3xl xl:text-4xl lg:text-4xl md:text-4xl">Ordered Before?</h1>
                    <p className="text-center font-extrabold text-lg xl:text-xl lg:text-xl md:text-xl my-4">Sign in using the email address you used to palce your previous order</p>
                    <p className="text-base mb-6">If you haven't created a password previously, or you've forgotten what it is, click "Reset your password" to reset it.</p>
                </div>
                <div className="flex flex-col md:flex-row-reverse border border-gray-300 xl:px-3 xl:py-6">
                    <div className="w-full md:w-1/2 pb-0 md:pb-24">
                        <form className="flex flex-col w-full items-start px-6 py-2 lg:p-12">
                            <h1 className="text-3xl font-bold pb-2">Sign In</h1>
                            <p className="text-sm">For existing customer ro account holders</p>
                            <div className="w-full text-left mt-3 md:mt-6">
                                <label className="block text-base mb-2" for="email">Email Address:</label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="<EMAIL>" />
                            </div>
                            <div className="w-full text-left mt-3 md:mt-6">
                                <label className="block text-base mb-2" for="password">Password:</label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="password" placeholder="<Password>" />
                            </div>
                            <div className="w-full bg-yellow-400 hover:bg-yellow-500 text-black text-xl font-bold rounded py-3 focus:outline-none focus:shadow-outline my-6 cursor-pointer">
                                Sign In
                            </div>
                            <p className="text-[#00a3d7] hover:underline cursor-pointer text-sm ">Reset your password</p>
                        </form>
                    </div>
                    <div className="w-full md:w-1/2 bg-[#f1f1f1] px-4 py-8 items-center flex flex-col">
                        <div className="w-full flex flex-col justify-center items-center">
                            <h1 className="text-3xl font-bold pb-2">Create An Account</h1>
                            <p className="my-10 font-bold md:my-16">for user who haven't ordered before</p>
                        </div>
                        <div className="w-full bg-sky-500 hover:bg-blue-500 text-white text-xl font-bold rounded py-3 focus:outline-none focus:shadow-outline my-6 md:my-10 cursor-pointer lg:w-[160px]">
                            Cretae Account
                        </div>
                    </div>
                </div>
                <div className="w-full flex-col justify-center items-center hidden lg:flex">
                    <p className="px-56 mt-[150px] mb-[50px] text-2xl font-semibold">Thousands of customers trust us every year because we deliver great products. Here's why they trust us and keep coming back.</p>
                    <div className="w-full flex justify-betweeen">
                        {
                            badgeData.map((item) => {
                                return(
                                    <Badge key={item.id} title={item.title} content={item.content} image={item.image} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reorder;