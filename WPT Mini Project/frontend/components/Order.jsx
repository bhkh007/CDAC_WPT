import  { useState } from 'react';
import axios from 'axios';
import "../cssfiles/Order.css";

const Order = () => {
  const [formState, setFormState] = useState(false);
  const [errors, setErrors] = useState({});
  const initialFormData = {
    name: '',
    phoneNumber: '',
    email: '',
    location: ''
  };

  const showForm = () => {
    setFormState(true);
  };

  const closeForm = () => {
    setFormState(false);
  };

  const [formData, setFormData] = useState(initialFormData);

  const validate = (name, value) => {
    let error;
    switch (name) {
      case 'name':
        error = /^[A-Za-z\s]+$/.test(value) ? '' : 'Name must contain only letters and spaces';
        break;
      case 'phoneNumber':
        error = /^[0-9]{10}$/.test(value) ? '' : 'Phone number must be 10 digits';
        break;
      case 'email':
        error = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Email is not valid';
        break;
      case 'location':
        error = /^[A-Za-z\s]+$/.test(value) ? '' : 'Location must contain only letters and spaces';
        break;
      default:
        error = '';
        break;
    }
    setErrors({
      ...errors,
      [name]: error
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    validate(name, value);
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(errors).every(error => error === '') && Object.values(formData).every(value => value !== '')) {
      try {
        const response = await axios.post('http://localhost:5566/api/request/addData', formData);
        console.log('Form submitted successfully:', response.data);
        alert("Data added successfully");
        setFormData(initialFormData);
        closeForm();
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    } else {
      alert("Please fix the errors in the form before submitting");
    }
  };

  return (
    <div className="form-container">
      {formState && (
        <div className="formdiv">
          <div className="close">
            <h2>Request Callback</h2>
            <button className="close-btn" onClick={closeForm}>✖</button>
          </div>
          <p>We will call you back shortly to take details.</p>
          <form className="formbody" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="error">{errors.name}</p>}
            <input
              type="text"
              name="phoneNumber"
              placeholder="Enter Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
            <input
              type="text"
              name="location"
              placeholder="Enter Location"
              value={formData.location}
              onChange={handleChange}
              required
            />
            {errors.location && <p className="error">{errors.location}</p>}
            <button className="formbtn1" type="submit">Submit</button>
          </form>
        </div>
      )}
      <button className="call" onClick={showForm}>Request Callback</button>
    </div>
  );
}

export default Order;