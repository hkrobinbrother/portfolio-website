import React from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Message Sent Successfully 🚀");
    reset();
  };

  return (
    <section id="contact" className="min-h-screen text-white px-6 py-20">
      
      {/* Title */}
      <h2 className="text-4xl md:text-7xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Contact Me
      </h2>

      <div className="max-w-3xl mx-auto bg-gray-900 p-10 rounded-xl shadow-lg">

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          {/* Name */}
          <div>
            <label className="block mb-2 text-sm">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-sm">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              {...register("message", { required: "Message is required" })}
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500"
            ></textarea>
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}