import React, { useState, useEffect } from "react";

export default function EventListing() {
  const [events, setEvents] = useState(
    JSON.parse(localStorage.getItem("events")) || []
  );
  const [filter, setFilter] = useState("");

  // Update state when a new event is added
  useEffect(() => {
    setEvents(JSON.parse(localStorage.getItem("events")) || []);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const location = form.location.value;
    const category = form.category.value;
    const date = form.date.value;
    const description = form.description.value;
    const newEvent = { title, location, category, date, description };

    // Get existing events from localStorage or initialize an empty array
    const existingEvents = JSON.parse(localStorage.getItem("events")) || [];

    // Append new event
    const updatedEvents = [...existingEvents, newEvent];

    // Save back to localStorage
    localStorage.setItem("events", JSON.stringify(updatedEvents));

    // Update state to reflect new event
    setEvents(updatedEvents);

    // Reset form
    form.reset();
  };

  // Filter events based on selected category
  const filteredEvents = filter
    ? events.filter((event) => event.category === filter)
    : events;

  return (
    <div className="w-11/12 mx-auto mt-24">
      {/* Filter & Add Events */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        <div className="hidden lg:flex"></div>
        <form className="filter">
          <input
            className="btn btn-square"
            onClick={() => setFilter("")}
            type="reset"
            value="×"
          />
          <input
            className="btn"
            type="radio"
            name="frameworks"
            onClick={() => setFilter("religious")}
            aria-label="Religious"
          />
          <input
            className="btn"
            type="radio"
            name="frameworks"
            onClick={() => setFilter("social")}
            aria-label="Social"
          />
          <input
            className="btn"
            type="radio"
            name="frameworks"
            onClick={() => setFilter("charity")}
            aria-label="Charity"
          />
        </form>
        <div>
          {/* Open Modal */}
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Add Events
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <form
                onSubmit={handleSubmit}
                className="fieldset border border-base-300 p-4 rounded-box"
              >
                <legend className="text-center font-bold text-xl">
                  Add Your Event
                </legend>
                <div>
                  <label className="fieldset-label">Title</label>
                  <input
                    type="text"
                    className="input w-full"
                    name="title"
                    required
                  />
                </div>
                <div>
                  <label className="fieldset-label">Date</label>
                  <input
                    type="date"
                    className="input w-full"
                    name="date"
                    required
                  />
                </div>
                <div>
                  <label className="fieldset-label">Category</label>
                  <select name="category" className="select w-full" required>
                    <option value="">Select a Category</option>
                    <option value="religious">Religious</option>
                    <option value="social">Social</option>
                    <option value="charity">Charity</option>
                  </select>
                </div>
                <div>
                  <label className="fieldset-label">Location</label>
                  <input
                    type="text"
                    name="location"
                    className="input w-full"
                    required
                  />
                </div>
                <div>
                  <label className="fieldset-label">Description</label>
                  <textarea
                    name="description"
                    className="textarea w-full"
                    required
                  ></textarea>
                </div>
                <button className="btn btn-neutral mt-4">Add Event</button>
              </form>
            </div>
          </dialog>
        </div>
      </div>

      {/* Event Listings */}
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, idx) => (
            <div key={idx} className="card bg-base-100 border p-4 shadow-lg">
              <div className="card-body">
                <h2 className="card-title">{event.title}</h2>
                <p className="text-sm text-gray-600">
                  <strong>Category:</strong> {event.category}
                </p>
                <p>
                  <strong>Date:</strong> {event.date}
                </p>
                <p>
                  <strong>Location:</strong> {event.location}
                </p>
                <p className="text-gray-700">{event.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-3">No events available</p>
        )}
      </div>
    </div>
  );
}
