import React, { useState } from "react";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields");
      return;
    }

    console.log(formData);

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <section id="contact" style={{ padding: "50px", textAlign: "center" }}>
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "auto" }}>
        
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ ...inputStyle, height: "120px" }}
        />

        <button type="submit" style={buttonStyle}>
          Send Message
        </button>

      </form>
    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  margin: "10px 0",
  borderRadius: "5px",
  border: "1px solid #ccc"
};

const buttonStyle = {
  padding: "12px 25px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};

export default Contact;
