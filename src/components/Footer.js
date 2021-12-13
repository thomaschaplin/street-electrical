import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Opening Hours</h2>
      <a>Monday 08:00 - 17:30</a>
      <br />
      <a>Tuesday 08:00 - 17:30</a>
      <br />
      <a>Wednesday 08:00 - 17:30</a>
      <br />
      <a>Thursday 08:00 - 17:30</a>
      <br />
      <a>Friday 08:00 - 17:30</a>
      <br />
      <a>Saturday 08:00 - 15:30</a>
      <br />
      <a>Sunday Closed</a>
      <br />
      {/* <ul className="actions">
        <li>
          <Link to="/generic" className="button">
            Learn More
          </Link>
        </li>
      </ul> */}
    </section>
    <section>
      <h2>Contact Details</h2>
      <dl className="alt">
        <dt>Phone</dt>
        <dd>
          <a href="tel:07896748201">07896748201</a>
        </dd>
        <dt>Email</dt>
        <dd>
          <a href="mailto:phil@street-electrical.co.uk">
            phil@street-electrical.co.uk
          </a>
        </dd>
      </dl>
      {/* <ul className="icons">
        <li>
          <a
            href="https://twitter.com/huntaroSan"
            className="icon fa-twitter alt"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
      </ul> */}
    </section>
    <p className="copyright">
      &copy; Street Electrical. Design:{' '}
      <a href="https://html5up.net">HTML5 UP</a>.
    </p>
  </footer>
)

export default Footer
