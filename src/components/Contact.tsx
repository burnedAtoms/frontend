import Footer from './Footer'

const Contact = () => {
    return (
        <div id="contact-container" className="w-full">
            <div id="contact-wrapper" className="bg-white lg:w-full border-none rounded-lg flex justify-center p-8 pt-[5rem]">
                <div id="contact-content" className="w-fit flex flex-col items-center">
                    <h1 className="text-primary text-[8.5vw] font-extrabold font-[font-family: poppins]">Get<span>.</span> In<span>.</span> Touch<span>.</span></h1>
                    <div className="max-md:text-sm max-md:w-fit w-2/3 mb-4 px-6 py-3 border-l-4 border-yellow-500 text-yellow-700 bg-yellow-100 rounded text-wrap">
                        <strong>Notice:</strong> The backend for this site is currently under development. Form submissions are not being processed at this time. Please contact zenroychance@gmail.com
                    </div>
                    <form id="contact-form" action="send-message" method="post" className="flex flex-col w-full gap-12 items-center">
                        <div className="w-full flex flex-row max-md:flex-col gap-8 max-md:flex-wrap">
                            <div className="w-full md:w-1/2 flex flex-col flex-1 justify-start">
                                <div>
                                    <label htmlFor="" className="text-start">Full name</label>
                                    <input placeholder="Jane Doe" type="text" required />
                                </div>
                                <div>
                                    <label htmlFor="" className="text-start">Email</label>
                                    <input placeholder="janedoe@mail.com" type="email" required />
                                </div>
                            </div>
                            <div className="w-full flex flex-col md:w-1/2">
                                <label htmlFor="" className="text-start">Message</label>
                                <textarea placeholder="Dear Mr. Chance," name="" id="" className="px-3 py-2 flex flex-grow text-start text-primary text-wrap bg-white outline-none border-2 border-gray-500/40 rounded-lg focus:border-green-600" required />
                            </div>
                        </div>
                        <button type="submit" className="w-fit block bg-primary border-2 border-primary/30 rounded-full px-8 py-4 text-white hover:text-white hover:bg-green-600 font-bold text-lg tracking-wider uppercase transition-transform">Send</button>
                    </form>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Contact