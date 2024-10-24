
const Hero = () => {
  return (
    <>

      <div className="flex justify-center items-center h-[90vh]  bg-gradient-to-b from-zinc-50 to-purple-300"> 
        <div className="w-[50vw] flex p-12 flex-col gap-8 items-center">
          <h1 className="text-8xl font-bold text-center">Elevate Your Learning</h1>
          <p className="text-[22px] font-normal w-3/4 text-center">
            Unlock your potential with our comprehensive courses. Learn at your own pace, from industry experts, and gain the skills to succeed in the ever-evolving world of technology.
          </p>
          <a href="#courses" className="bg-gray-900 w-28 h-auto p-2 text-white text-center cursor-pointer rounded-lg hover:bg-gray-600">
            Learn More
          </a>
        </div>
        <img src="src/assets/rocket.png" className="w-[40%] relative" alt="Rocket representing growth and progress" />
      </div>
     
    </>
  );
};

export default Hero;
