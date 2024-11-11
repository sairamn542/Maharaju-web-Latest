import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./contactsection.css";

export default function ContactSection() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  // State to handle form data and errors
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    select: "",
    message: ""
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    // Full name validation
    if (!formData.fullName) {
      newErrors.fullName = "Full Name is required.";
    } else if (!/^[A-Za-z\s]+$/.test(formData.fullName)) {
      newErrors.fullName = "Full Name must contain only letters and spaces.";
    }
    
    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }

    // Mobile number validation
    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required.";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must start with 6, 7, 8, or 9 and be 10 digits.";
    }

    // Dropdown select validation
    if (!formData.select) newErrors.select = "Please select an option.";

    // Message validation
    if (!formData.message) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted");
      console.log("Form submitted", formData);
    }
  };

  return (
    <div className="container">
      <div className="content-grid">
        {/* Left Section - Form */}
        <div className="form-section" data-aos="fade-up">
          <h2 className="form-heading">Get in touch</h2>
          <h1 className="form-subheading">For Software Related Queries</h1>

          <form className="form" onSubmit={handleSubmit}>
            <label>Full Name *</label>
            <input
              type="text"
              className="input-field"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <span className="error-message">{errors.fullName}</span>}

            <label>Email *</label>
            <input
              type="email"
              className="input-field"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}

            <label>Mobile *</label>
            <input
              type="number"
              className="input-field"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
            {errors.mobile && <span className="error-message">{errors.mobile}</span>}

            <label>Select *</label>
            <select
              className="input-field"
              name="select"
              value={formData.select}
              onChange={handleChange}
            >
              <option value="">Select an option</option>
              <option value="sales">Sales</option>
              <option value="hr">HR</option>
            </select>
            {errors.select && <span className="error-message">{errors.select}</span>}

            <label>Message *</label>
            <textarea
              rows="4"
              className="textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <span className="error-message">{errors.message}</span>}

            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>

        {/* Right Section - Cards */}
        <div className="card-section" data-aos="fade-up">
          <div className="card">
            <h3 className="card-title">Sales: +917799988139</h3>
            <h3 className="card-title">HR: +91834153460, +918687678678</h3>
          </div>

          <a href="tel:+1234567890" className="call-link" data-aos="fade-up">
            <h3>Call Now</h3>
            <span>→</span>
          </a>

          <div className="card">
            <h3 className="card-title">E-Mail</h3>
            <p className="card-text">Sales@maharajuhealthcaretechnology.com</p>
            <p className="card-text">info@maharajutechnology@gmail.com</p>
          </div>

          <div className="card">
            <h3 className="card-title">Address</h3>
            <p className="card-text">
              Aditya Trade Center, 6th Floor, 604C, Hyderabad, Telangana 500016
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
