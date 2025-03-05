'use client'

import { db } from "../../../firebaseConfig";
import { collection, addDoc} from 'firebase/firestore'
import React, { useState } from "react";
import LottieAnimation from "@/components/LottieAnimations";
import RiveAnimationMoon from "@/components/RiveAnimation";

async function addDataToFireStore(name,number,email,message) {
  try {
    const docRef = await addDoc(collection(db,"Contact-Information"),{
      name:name,
      number:number,
      email:email,
      message:message,
    });
    console.log("Document written with id : ",docRef.id);
    return true;
  }catch(error){
    console.error("Error adding the document",error)
    return false;
  }
}

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); 
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (validateForm()) {
  //     console.log("Form submitted:", formData);
  //     setStatus("Form submitted successfully!");

  //     setFormData({ name: "", phone: "", email: "", message: "" });

  //     setTimeout(() => setStatus(""), 3000);
  //   }
  // };



  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // if (validateForm()) {

    //   const added = await addDataToFireStore( name, number, email, message);
    //   if(added){

    //   }
      
    //   // try {
    //   //   const response = await fetch("/api/contact", {
    //   //     method: "POST",
    //   //     headers: {
    //   //       "Content-Type": "application/json",
    //   //     },
    //   //     body: JSON.stringify(formData),
    //   //   });
  
    //   //   const data = await response.json();
  
    //   //   if (response.ok) {
    //   //     alert("Form submitted successfully!");
    //   //     setFormData({ name: "", phone: "", email: "", message: "" });
    //   //   } else {
    //   //     alert("Error: " + data.error);
    //   //   }
    //   // } catch (error) {
    //   //   console.error("Error submitting form:", error);
    //   //   alert("Something went wrong. Please try again.");
    //   // }
    // }

    if (validateForm()) {
      // Extract the form data
      const { name, phone, email, message } = formData;
  
      // Call the Firestore function to add the data
      const added = await addDataToFireStore(name, phone, email, message);
  
      if (added) {
        setStatus("Form submitted successfully!");  
        setFormData({ name: "", phone: "", email: "", message: "" }); 
        setTimeout(() => setStatus(""), 3000);  
      } else {
        setStatus("Error submitting form. Please try again.");  
      }
    }
  };





 
  


  return (
    <section className="contact-page-section-wrapper">
      <div className="contact-page-title">
        <div className="container"></div>
      </div>

      <div className="contact-banner">
        <div className="contact-page-title-heading">
          <p>
            Contact Us for <span>Any</span> 
          </p>
        </div>
        <div className="contact-banner-image-overlay"></div>
      </div>

      <div className="contact-info-wrapper">
        <div className="container">
          <div className="contact-info-left">
            <div className="contact-info-animations">
              <LottieAnimation />
              <RiveAnimationMoon />
            </div>
            <div className="contact-info-form-title">
              <p>Questions?</p>
              <p>
                <span>We’ve Got Answers!</span>
              </p>
              <h3>Fill out the form, and our team will get in touch soon.</h3>
            </div>
          </div>

          <div className="contact-info-right">
            <div className="contact-info-form">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-row">
                  <label htmlFor="name">
                    Full Name<span>:</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  {errors.name && <p className="error-text">{errors.name}</p>}
                </div>

                <div className="contact-form-row">
                  <label htmlFor="phone">
                    Phone Number<span>:</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 "
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  {errors.phone && <p className="error-text">{errors.phone}</p>}
                </div>

                <div className="contact-form-row">
                  <label htmlFor="email">
                    Email Address <span>:</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    placeholder="abc@example.com"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && <p className="error-text">{errors.email}</p>}
                </div>

                <div className="contact-form-row">
                  <label htmlFor="message">
                    Your Message<span>:</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  {errors.message && <p className="error-text">{errors.message}</p>}
                </div>

                <div className="form-sbmt-btn-wrapper">
                  <button className="sbmt-btn" type="submit">
                    Get in Touch
                  </button>
                </div>
                {status && <p className="success-text">{status}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
