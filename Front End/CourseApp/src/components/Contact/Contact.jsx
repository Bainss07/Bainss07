function Contact() {
  const contacts = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
           className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
      title: "Chat to sales",
      description: "Speak to our friendly team.",
      contact: "hello@coursearena.com",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      ),
      title: "Chat to support",
      description: "We’re here to help.",
      contact: "Start new chat",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      ),
      title: "Visit us",
      description: "Visit our office HQ.",
      contact: "100 Smith Street Collingwood VIC 3066 AU",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
           className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
      title: "Call us",
      description: "Mon-Fri from 8am to 5pm.",
      contact: "+1 (555) 000-0000",
    },
  ];

  return (
    <section id="contact" className=" bg-gradient-to-b from-zinc-50 to-purple-300 ">
      <div className="container px-6 py-12 mx-auto">
        <div>
          <p className="text-4xl font-bold text-center">Contact us</p>
          <h1 className="mt-2 text-2xl font-semibold text-center text-gray-800 md:text-3xl">
            We’d love to hear from you
          </h1>
          <p className="mt-3 text-xl text-gray-500 text-center ">
            Our friendly team is always here to chat.
          </p>
        </div>

        <div className="grid grid-cols-1 max-w-7xl mx-auto gap-12 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {contacts.map((contact, index) => (
            <div key={index} className="p-4 rounded-lg  md:p-6  bg-gradient-to-t from-white to-purple-50">
              <span className="inline-block p-3 text-purple-900 rounded-lg bg-white">
                {contact.icon}
              </span>
              <h2 className="mt-4 text-2xl font-medium text-gray-800">
                {contact.title}
              </h2>
              <p className="mt-2 text-lg text-gray-500">
                {contact.description}
              </p>
              <p className="mt-2 text-md text-purple-900">
                {contact.contact}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
