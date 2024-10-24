import PropTypes from 'prop-types';

const ContactForm = ({ contactMessage, setContactMessage, handleSubmitContact }) => {
  return (
    <div className="my-5" id="contact">
      <h2 className="text-2xl my-4 font-semibold text-gray-800">Contact Admin</h2>
      <form onSubmit={handleSubmitContact} className="mt-2">
        <textarea
          rows="3"
          value={contactMessage}
          onChange={(e) => setContactMessage(e.target.value)}
          placeholder="Type your message here..."
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg transition duration-300 hover:bg-blue-400">Send Message</button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  contactMessage: PropTypes.string.isRequired,
  setContactMessage: PropTypes.func.isRequired,
  handleSubmitContact: PropTypes.func.isRequired,
};

export default ContactForm;
