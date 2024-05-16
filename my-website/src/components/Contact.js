// src/components/Contact.js
import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact">
      <h1>Contact</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message"></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
