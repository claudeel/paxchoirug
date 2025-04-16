// src/components/FloatingNotes.jsx
import React from 'react';

const FloatingNotes = () => {
    const notes = ["🎵", "🎶", "🎼", "🎷", "🎺", "🎸"];

    return (
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
            {Array.from({ length: 15 }).map((_, i) => {
                const emoji = notes[i % notes.length];
                const left = Math.random() * 100;

                return (
                    <div
                        key={i}
                        className="absolute text-2xl md:text-4xl animate-floatNote"
                        style={{
                            left: `${left}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    >
                        {emoji}
                    </div>
                );
            })}
        </div>
    );
};

export default FloatingNotes;
