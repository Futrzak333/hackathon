import { useState } from 'react';
 
export default function Form() {
 
  // States for registration
  const [fname, setfName] = useState('');
  const [lname, setlName] = useState('');
  const [email, setEmail] = useState('');
  const [place, setPlace] = useState(''); 
  const [number, setNumber] = useState(''); 
  const [age, setAge] = useState('');
 
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
  // Handling the name change
  const handlefName = (e) => {
    setfName(e.target.value);
    setSubmitted(false);
  };
  const handlelName = (e) => {
    setlName(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
  const handlePlace = (e) => {
    setPlace(e.target.value);
    setSubmitted(false);
  };
  const handleNumber = (e) => {
    setNumber(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the password change
  const handleAge = (e) => {
    setAge(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
      setSubmitted(true);
      setError(false);
  };
 
  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User successfully registered!!</h1>
      </div>
    );
  };
 
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };
 
  return (
    <div className="form">
      <div>
        <h1>Fill out Form</h1>
      </div>
 
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
 
      <form>
        {/* Labels and inputs for form data */}
        <label className="label">First Name</label>
        <input onChange={handlefName} className="input"
          value={fname} type="text" />
            <label className="label">Last Name</label>
        <input onChange={handlelName} className="input"
          value={lname} type="text" />
 
        <label className="label">Email</label>
        <input onChange={handleEmail} className="input"
          value={email} type="email" /> 

        <label className="label">Place</label>
        <input onChange={handlePlace} className="input"
          value={place} type="text" />

        <label className="label">Number</label>
        <input onChange={handleNumber} className="input"
          value={number} type="text" />
 
        <label className="label">Age</label>
        <input onChange={handleAge} className="input"
          value={age} type="text" />
 
        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}