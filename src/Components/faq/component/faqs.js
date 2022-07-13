import React, { useState } from 'react';
import { Data } from './data';
import "./faq.css";
import { MDBCol } from 'mdb-react-ui-kit';
import imgfaq from './Picturee.png';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';



const Faqs = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };




  return (



    <IconContext.Provider value={{ color: 'black', size: '30px' }}>
      <div className="Faqsection">
        <div className="Faq_headii">


          <h1>FAQ</h1>
          <br />
          <h2>Landing Page</h2>
          <br />
          <button className="Buttonii">Ask a Question</button>
          <br />
          <p>Have questions?</p>
          <p>we are here to help </p>

          <div><MDBCol md="6">
            <input className="Searchii" type="text" placeholder="Search for a question" aria-label="Searchii" />
          </MDBCol></div>







        </div>
        <div className="Faqimg">
          <img className="Faqimage" src={imgfaq} alt="" />
        </div>
      </div>
      
      <div className="AccordionSectionii">


        <div className="Containerii">
          {Data.map((item, index) => {
            return (
              <>
                <div className="Wrapii" onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                

                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </div>
                {clicked === index ? (
                  <div className="Dropdownii">
                    <p>{item.answer}</p>
                  </div>

                ) : null}
              </>
            );
          })}
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Faqs;