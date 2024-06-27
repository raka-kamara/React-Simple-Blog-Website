import Hero from "../compnents/Hero";
import img from "../../public/wave.svg"


const Home = () => {
    return (
        <div className='flex relative flex-col justify-center items-center min-h-[calc(100vh-116px)]'>
            <Hero/>
            <img className=" absolute bottom-0 w-full" src={img} alt="" />      
        </div>
    );
}   ;

export default Home;