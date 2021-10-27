import React, { useState } from "react";
import C3 from "../images/C3.jpg"


const Contact = () => {
 

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };





  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email, message } = userData;

    if (firstName && lastName && phone && email  && message) {
      const res = fetch(
        "https://optimal-deadc-default-rtdb.firebaseio.com/OptimalContactUsersDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
            message,
          }),
        }
      );

      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
         
          message: "",
        });
        alert("Data Stored");
      } else {
        alert("plz fill the data");
      }
    } 
  };







    return (
        <>
        <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5  text-center">
                  <h1 className="main-heading fw-bold ">
                    Connect With Us
                  </h1>
                  
                  <figure>                    
                    <img src={ C3 } alt="contatUsImg" className="img-fluid" />                                      
                  </figure>
                  
                 <div> 
                    <i class="fas fa-phone-alt myicon-contact text-secondary"> 7982607940</i>             
                    <i class="fa fa-envelope myicon-contact text-secondary"> PutYourMailId@mail.com</i>     
                </div>
          
                
                </div>

                {/* right side contact form  */}
                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="firstName"
                          id=""
                          className="form-control"
                          placeholder="First Name"
                          value={userData.firstName}
                          onChange={postUserData}
                         
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="lastName"
                          id=""
                          className="form-control"
                          placeholder="Last Name"
                          value={userData.lastName}
                          onChange={postUserData}
                          />
                          
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="phone"
                          id=""
                          className="form-control"
                          placeholder="Phone Number "
                         
                          value={userData.phone}
                          onChange={postUserData}
                          />

                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="email"
                          id=""
                          className="form-control"
                          placeholder="Business Email ID"
                          value={userData.email}
                          onChange={postUserData}
                         
                          
                        />
                      </div>
                    </div>
                   
                    <div className="row">
                      <div className="col-12 ">
                        <textarea
                          type="text"
                          name="message"
                          id=""
                          className="form-control"
                          placeholder="Enter Your Message"
                          value={userData.message}
                          onChange={postUserData}
                          
                          
                        />
                      </div>
                    </div>
                    <div class="form-check form-checkbox-style ">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label class="form-check-label" className="paraStyle">
                        I agree that the Optimal may contact me.
                      </label>
                    </div>

                    <button type="submit" className="btn btn-style w-100" onClick={submitData}>
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
        </>
    );
};
export default Contact