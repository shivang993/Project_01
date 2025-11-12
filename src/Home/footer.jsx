let Foot = function (){
    return( 
    <div className="grid grid-cols-3 gap-10 pb-20 pl-40 bg-orange-300">
        <div className="flex gap-4">
            <div>
            <img src="/cat.gif" alt="cat" className="w-24 h-24 mt-10 rounded-lg " />
            </div>
            <div>
        <p className="mt-8 text-2xl font-bold ">BookLearn</p>
        {/* <p>Empowering learners worldwide</p> */}
        <p className="text-[16px]">© 2025 BookLearn. All rights reserved.</p>
        </div>
        </div>
         <div>
        <p className="pt-8 mb-4 text-xl font-semibold">Products</p>
        <li>
        <p>Web Developemnt</p></li>
        <li> <p>Backend Developemnt</p></li> 
         <li><p>Python Developemnt</p> </li> 
          <li><p>Trading</p></li> 
           
        </div>
           <div>
       <p className="pt-8 text-xl font-semibold"> Contact</p>
Email: hello@booklearn.com <br />
Phone: +91 12345 67890
        </div>
    </div>
    )
}
export default Foot;