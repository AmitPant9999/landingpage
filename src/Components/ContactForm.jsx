import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const onSubmit = (data) => {
    setIsSubmitting(true); // Show loading state
    setTimeout(() => {
      // Simulate API call
      console.log(data);
      setIsSubmitting(false); // Hide loading state
      setShowPopup(true); // Show success popup
      reset(); // Clear the input fields
      setTimeout(() => setShowPopup(false), 800); // Hide the popup after 800mili seconds
    }, 2000); // Simulate a 2-second delay
  };

  return (
    <div className="md:p-24 sm:p-12 bg-gray-50 ">
      <section className=" mx-auto bg-white  p-8 rounded-lg shadow-lg w-full lg:p-24">
        <h2 className="text-center text-3xl font-semibold mb-6 text-gray-800">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          {/* Email Input */}
          <input
            type="text"
            placeholder="Your Name"
            {...register("text", { required: "Name is required" })}
            className={`w-full p-3 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
          <input
            type="email"
            placeholder="Your email"
            {...register("email", { required: "Email is required" })}
            className={`w-full p-3 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          {/* Message Textarea */}
          <textarea
            placeholder="Your message"
            {...register("message", { required: "Message is required" })}
            className={`w-full p-3 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none h-40 ${
              errors.message ? "border-red-500" : ""
            }`}
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting} // Disable button while submitting
            className={`w-full py-3 ${
              isSubmitting ? "bg-gray-400" : "bg-blue-600"
            } text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400`}
          >
            {isSubmitting ? (
              <span className="flex justify-center items-center">
                <svg
                  className="animate-spin w-5 h-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    d="M4 12a8 8 0 0 1 16 0"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                </svg>
                Sending...
              </span>
            ) : (
              "Send"
            )}
          </button>
        </form>
      </section>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
            <h3 className="text-center text-green-600 font-semibold text-xl">
              Message Sent!
            </h3>
            <p className="text-center mt-2 text-gray-600">
              Thank you for reaching out. We will get back to you soon.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
