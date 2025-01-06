import About from "./components/About";
import Hero from "./components/Hero";
import NewArrival from "./components/NewArrival";
import ExploreMore from "./components/ExploreMore";
import Testing from "./components/Testing";




export default function Home() {
  return (
    <div className="">
      
      <Hero/> 
      <About/>
      <NewArrival/>
      <ExploreMore/>
      {/* <Testing/> */}
      
    </div>
  );
}
