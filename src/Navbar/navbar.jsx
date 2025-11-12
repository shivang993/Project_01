// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";




let Navbar = function (){  
    //    const navigate = useNavigate();
      return (
    <div>
      <div className="flex items-center justify-between h-16 text-black bg-white shadow-lg">
     
 <div >
 {/* <p className="text-lg font-semibold px-28">BL</p> */}
 <p className="text-lg font-semibold px-28">BookLearn</p>
 <p className="pl-28 text-[16px] text-gray-600">Learning • Courses • Certification
</p>


</div>


<div className="flex items-center gap-4 pr-24 font-semibold">
 <Link to="/" className="hover:text-red-400 ">Home</Link>
  <Link to="/course" className="hover:text-red-400 ">Course</Link>
 <Link to="/contact" className="hover:text-red-400 ">Contact</Link>
 <Link to="/about" className="hover:text-red-400 ">About</Link>
  <button className="pb-1 pt-1 pl-6 pr-6   border-2 rounded-lg  text-white bg-[rgb(10,133,255)] hover:text-amber-600" >Login </button>
  

</div>

 </div>
 </div>
 )
 } 
 export default Navbar;
 