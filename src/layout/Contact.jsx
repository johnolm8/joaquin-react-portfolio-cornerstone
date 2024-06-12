import React from 'react'
import ScrollComponent from '../modules/ScrollComponent'
import ContactForm from '../modules/ContactForm.js'

const gradientStyle = {
  background: 'linear-gradient(45deg, #ff9a9e 0%, #fecfef 30%, #fed6e3 70%, #f6d365 100%)',
};

export default props => (
  <section className="section" id="contact" style={gradientStyle}>
    <ScrollComponent className="container">
      <div className="section-heading has-text-centered">
        <h3 className="title has-text-black-darker">Get in touch</h3>
      </div>

      <div className="columns">
        <div className="column is-6 is-offset-3">
          <div className="box">
            <ContactForm />
          </div>
        </div>
      </div>
    </ScrollComponent>
  </section>
);
