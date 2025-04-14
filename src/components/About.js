import React from 'react';

export default function About() {
  return (
    <div className="container my-4">
      <h2 className="mb-3">About Us</h2>
      <div className="card p-4 shadow-sm">
        <p>
          Welcome to <strong>MyApp</strong> – your handy tool for quickly analyzing and editing text!
          Whether you're writing an email, preparing a report, or just checking grammar, MyApp is designed
          to make your text work easier.
        </p>
        <p>
          This app allows you to manipulate your text with features like word count, character count,
          removing extra spaces, and much more. It’s lightweight, easy to use, and fully responsive.
        </p>
        <p>
          Our mission is to help users focus on their content by offering a simple, efficient, and elegant platform.
          Created by passionate developers who believe in clean design, productivity, and performance.
        </p>
      </div>
    </div>
  );
}
