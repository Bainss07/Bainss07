const About = () => {
    return (
<section id="about" className="py-24 relative">
    
  <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
    
    <div className="w-full justify-start items-center gap-16 grid lg:grid-cols-2 grid-cols-1">
    <img
        className="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
        src="https://pagedone.io/asset/uploads/1717751272.png"
        alt="Course Overview image"
      />
      <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
        <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
          <h2 className="text-gray-900 text-5xl font-bold font-manrope leading-normal lg:text-start text-center">
            Empowering Learning Through Collaboration and Engagement
          </h2>
          <p className="text-gray-500 text-xl font-normal leading-relaxed lg:text-start text-center">
            Our courses foster a collaborative learning environment where diverse ideas and perspectives enrich the experience. We believe in empowering students by providing opportunities to engage actively, share insights, and grow both personally and academically.
          </p>
        </div>
      </div>
     
    </div>
  </div>
</section>

    );
  };
  
  export default About;
  