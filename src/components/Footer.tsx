import logo from "../assets/logo.png"
import { TiSocialFacebookCircular, TiSocialInstagram } from 'react-icons/ti'
import { RiLinkedinBoxLine } from 'react-icons/ri'
const Footer = () => {

    return (
        <footer className="text-white pt-[20%] md:pt-[10%] pb-8 relative px-sm md:px-md lg:px-lg">
            <section className="bg-[#8b6743] relative rounded-3xl pb-4 flex flex-col items-center">
                {/* Newsletter Section */}
                <div className="translate-y-[-30%] w-[80%] max-w-4xl mx-auto p-6 bg-white border border-[#8b6743] rounded-2xl flex flex-col md:flex-row items-center justify-between text-black space-y-4 md:space-y-0 md:space-x-6">
                    <h2 className="text-xl md:text-2xl lg:text-3xl max-w-96 font-extrabold text-center text-[#8b6743]">
                        STAY UP TO DATE ABOUT OUR LATEST OFFERS
                    </h2>
                    <div className="flex flex-col items-center space-y-2 w-full md:w-auto text-center">
                        <input
                            type="email"
                            placeholder="Enter email address"
                            className="px-4 py-2 border border-gray-700 rounded-full focus:outline-none min-w-64 text-center"
                        />
                        <button className="border-[2px] border-[#8b6743] text-black px-6 py-2 rounded-full min-w-64 font-medium">
                            Subscribe to our Newsletter
                        </button>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                    {/* Logo & Description */}
                    <div className="flex flex-col items-center justify-end">
                        <img src={logo} alt="logo" className="w-[80%]"/>
                        <p className="text-sm opacity-90 font-medium">"Your Gateway to <br/> Unforgettable Events"</p>
                    </div>

                    {/* Company Section */}
                    <div className="flex flex-col gap-2 items-center">
                        <h3 className="text-lg font-bold">Company</h3>
                        <ul className="space-y-1 text-sm opacity-90 text-left font-medium">
                            <li>About Us</li>
                            <li>Find Events</li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                    {/* Help Section */}
                    <div className="flex flex-col gap-2 items-center">
                        <h3 className="text-lg font-bold">HELP</h3>
                        <ul className="space-y-1 text-sm opacity-90 text-left font-medium">
                            <li>Customer Support</li>
                            <li>Terms and Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>

                    {/* FAQ Section */}
                    <div className="flex flex-col gap-2 items-center">
                        <h3 className="text-lg font-bold">FAQ</h3>
                        <ul className="space-y-1 text-sm opacity-90 text-left font-medium">
                            <li>Accounts</li>
                            <li>Orders</li>
                            <li>Privacy</li>
                        </ul>
                    </div>
                </div>
                {/* <hr className="w-[90%] mt-20" /> */}
                <div className=" mt-20 border-t border-white pt-4 flex flex-wrap justify-center gap-3 gap-x-6 md:justify-between w-[90%] mx-auto font-medium"
                    style={{ borderImageSource: "linear-gradient(to left, rgba(102, 102, 102, 0.05), #FFFFFF, rgba(102, 102, 102, 0.05))", borderImageSlice: "1 0 1 0", borderImageRepeat: "stretch", borderTop: "2px solid" }}>
                    <p className="text-center text-sm">MyAjo © 2025. All Rights Reserved.</p>
                    {/* Social Media Links */}
                    <div className="flex gap-4 text-white">
                        <p>Connect with Us</p>
                        <a href="#facebook" className="hover:scale-110 transition">
                            <TiSocialFacebookCircular size="24" />
                        </a>
                        <a href="#twitter" className="hover:scale-110 transition">
                            <TiSocialInstagram size="24" />
                        </a>
                        <a href="#linkedin" className="hover:scale-110 transition">
                            <RiLinkedinBoxLine size="24" />
                        </a>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
