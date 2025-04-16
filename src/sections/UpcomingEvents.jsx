import React from 'react';

const events = [
    {
        date: 'Apr 28, 2025',
        title: 'Sunday Worship Performance',
        location: 'Christ the King Parish, Accra',
        time: '9:00 AM',
    },
    {
        date: 'May 12, 2025',
        title: 'Choral Evening Concert',
        location: 'National Theatre',
        time: '6:30 PM',
    },
    {
        date: 'Jun 3, 2025',
        title: 'Outreach Program',
        location: 'Korle Bu Children’s Ward',
        time: '10:00 AM',
    },
];

const UpcomingEvents = () => {
    return (
        <section className="bg-white py-16 px-6 md:px-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12">Upcoming Events</h2>

            <div className="grid gap-8 md:grid-cols-3">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className="p-6 bg-blue-50 rounded-xl shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-xl animate-fadeInUp"
                        data-aos="fade-up"
                    >
                        <p className="text-sm text-blue-600 font-semibold">{event.date}</p>
                        <h3 className="text-xl font-bold text-gray-800 mt-2 mb-1">{event.title}</h3>
                        <p className="text-gray-600">{event.location}</p>
                        <p className="text-sm text-gray-500 mt-1">{event.time}</p>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-10">
                <a
                    href="#all-events"
                    className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition"
                >
                    View All Events
                </a>
            </div>
        </section>
    );
};

export default UpcomingEvents;
