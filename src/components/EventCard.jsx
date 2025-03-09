import React from "react";
import { motion } from "framer-motion";

export default function EventCard({ event }) {
  return (
    <motion.div
      className="border-4 card shadow-sm border-solid"
      animate={{
        borderColor: ["#002ABB", "#0289F5", "#01AFEF"], // Colors transitioning
      }}
      transition={{
        duration: 3, // Duration of the animation
        repeat: Infinity, // Make the animation repeat forever
        repeatType: "loop", // The animation will loop
      }}
    >
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{event.title}</h2>
          <div className="badge badge-info text-white">{event?.category}</div>
        </div>
        <p className="text-gray-700">{event.description}</p>
        <p>
          <strong>Date:</strong> {event.date}
        </p>
        <p>
          <strong>Location:</strong> {event.location}
        </p>
      </div>
    </motion.div>
  );
}
