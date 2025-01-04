import React from 'react';

const EventCard = ({ event }) => (
  <div className="p-4 bg-white shadow-md rounded-lg">
    <img src={event.image} alt={event.title} className="w-full h-48 object-cover rounded-md" />
    <h3 className="text-xl font-bold mt-2">{event.title}</h3>
    <p className="text-gray-600">{event.description}</p>
    <p className="text-blue-500 mt-2">${event.price}</p>
    <button className="bg-blue-500 text-white py-2 px-4 mt-4">View Details</button>
  </div>
);

export default EventCard;
