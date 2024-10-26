import { FaCogs, FaShieldAlt, FaLightbulb, FaAccessibleIcon, FaExpandAlt, FaChalkboardTeacher } from 'react-icons/fa';
import PropTypes from "prop-types";

const featuresData = [
  {
    icon: <FaCogs className="w-16 h-16 bg-purple-100 p-3 rounded-lg text-black" />,
    title: "Customization",
    description: "Tailor our product to suit your needs. Expand your reach with our global network."
  },
  {
    icon: <FaShieldAlt className="w-16 h-16 bg-purple-100 p-3 rounded-lg text-black" />,
    title: "Security",
    description: "Your data is protected by the latest security measures."
  },
  {
    icon: <FaLightbulb className="w-16 h-16 bg-purple-100 p-3 rounded-lg text-black" />,
    title: "Innovation",
    description: "Stay ahead with our innovative solutions and cutting-edge technology."
  },
  {
    icon: <FaAccessibleIcon className="w-16 h-16 bg-purple-100 p-3 rounded-lg text-black" />,
    title: "Accessibility",
    description: "Access your courses anytime, anywhere, from any device."
  },
  {
    icon: <FaExpandAlt className="w-16 h-16 bg-purple-100 p-3 rounded-lg text-black" />,
    title: "Scalability",
    description: "Grow your platform effortlessly as your user base expands."
  },
  {
    icon: <FaChalkboardTeacher className="w-16 h-16 bg-purple-100 p-3 rounded-lg text-black" />,
    title: "Interactive Learning",
    description: "Engage with your students through quizzes, polls, and discussions."
  },
];

const Features = () => {
  return (
    <div className="mx-auto font-[sans-serif] mt-4 h-auto py-20 bg-gradient-to-b from-zinc-50 to-purple-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-gray-800 text-5xl font-bold text-center mb-16">
          Discover Our Exclusive Features
        </h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 max-md:max-w-lg mx-auto gap-12">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
    return (
      <div className="p-8 bg-white rounded-xl shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl">
        {icon}
        <h3 className="text-2xl font-bold text-gray-800 mt-4">{title}</h3>
        <p className="text-gray-600 text-[19px] text-center mt-2">{description}</p>
      </div>
    );
  };
  

FeatureCard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Features;
