
const Footer = () => {
    return (
        <div>
           <div className="w-11/12 mx-auto mt-40 pb-5 bg-[#06091A] text-white relative">
           <div className='w-3/5 h-52 mx-auto text-center pt-6 space-y-5 rounded-3xl bg-neutral-300 absolute -top-24 left-64 text-black'>
           <h1 className='text-[2rem] font-bold'>Subscribe to Our Newsletter</h1>
            <h3>Get the latest updates and news right in your inbox!</h3>
            <input type="text" placeholder='Enter Your Email' className='p-3 rounded-2xl mr-4' />
            <button className=' bg-yellow-300 p-3 rounded-2xl'>Subscribe</button>
           </div>
           <div>
           <img className='pl-[500px]  mb-10 pt-44' src="./src/assets/asset/logo-footer.png" alt="" />
           <div className='flex justify-around'>
                <div>
                
                    <h3 className='font-bold'>About Us</h3>
                    <p>We are a passionate team dedicated to providing <br /> the best  services to our customers.</p>
                </div>
                <div>
                    <h3 className='font-bold'>Quick links</h3>
                    <ul className='list-disc'>
                        <li>Home</li>
                        <li>Service</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <h3 className='font-bold'>Subscribe</h3>
                    <p>Subscribe to our newsletter for the latest updates.</p>
                   <input type="text" placeholder='Enter Your Email' className='p-3 rounded-2xl mr-4' />
                   <button className=' bg-yellow-300 p-3 rounded-2xl'>Subscribe</button>
                    
                </div>
            </div>
           </div>
          
           </div>
          
        </div>
    );
};

export default Footer;