
const testimonials = [
    {
      name: 'Robert',
      position: 'CTO at CodeMaster Academy',
      image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      quote: '“This course transformed how I approach coding challenges. The hands-on projects and clear guidance helped me become a better developer. Highly recommended for anyone serious about learning.”',
    },
    {
      name: 'Jeny Doe',
      position: 'Founder of Jeny Digital',
      image: 'https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      quote: '“The marketing course provided me with invaluable insights into building effective digital strategies. The support from instructors was top-notch, and the community is incredible.”',
    },
    {
      name: 'Ema Watson',
      position: 'Marketing Manager at Stech Solutions',
      image: 'https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      quote: '“I was skeptical at first, but this course exceeded my expectations. The interactive lessons and real-world case studies made complex concepts easy to understand and apply in my work.”',
    },
  ];
  

const Testimonials = () => {
  return (
    <section className="bg-white ">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-4xl font-semibold text-center text-gray-800 capitalize lg:text-4xl">
          What our <span className="text-purple-800">clients</span> say
        </h1>

       
        <section className="grid grid-cols-1 gap-8 mt-8 max-w-7xl mx-auto xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 border rounded-lg">
              <p className="leading-loose text-gray-900 text-xl">{testimonial.quote}</p>
              <div className="flex items-center mt-8 -mx-2">
                <img
                  className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 "
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="mx-2">
                  <h1 className="font-semibold text-2xl text-gray-800 ">{testimonial.name}</h1>
                  <span className="text-md text-gray-500">{testimonial.position}</span>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export default Testimonials;
