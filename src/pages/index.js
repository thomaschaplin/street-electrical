import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import pic01 from '../assets/images/pic01.jpg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value,
    })
  }

  render() {
    return (
      <Layout>
        <Helmet title="Street Electrical" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>About</h2>
                </header>
                <p>
                  Hello my name is Philip Street and I'm your local electrician.
                  Give me a call today for a quote or send me an email using the
                  below contact form.
                </p>
              </div>
              {/* <span className="image">
                <img src={pic01} alt="" />
              </span> */}
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Domestic Services</h2>
              <p>
                We cover all aspects of Domestic Electrical Work across Essex.
              </p>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-code-fork"></span>
                <h3>Rewiring</h3>
                <p>
                  Need a full rewire? We can do the job no matter if it's a
                  small annex or a whole house.
                </p>
              </li>
              <li>
                <span className="icon major style3 fa-lightbulb-o"></span>
                <h3>Lighting</h3>
                <p>
                  We specialise in fitting spot lights as well as covering all
                  other fittings including LED and filament.
                </p>
              </li>
              <li>
                <span className="icon major style4 fa-warning"></span>
                <h3>Diagnostics & Fault Finding</h3>
                <p>
                  Wall socket stopped working? We can diagnose the issue in no
                  time and give you a detailed report.
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-cutlery"></span>
                <h3>Kitchen & Bathroom Electrics</h3>
                <p>
                  Bought a new power shower? Need a shaving point fitted? No
                  worries - we can do the job!
                </p>
              </li>
              <li>
                <span className="icon major style1 fa-plug"></span>
                <h3>Sockets</h3>
                <p>
                  Want a USB port in your bedroom? Swapping out old sockets for
                  new ones? Not a problem.
                </p>
              </li>
              <li>
                <span className="icon major style2 fa-bolt"></span>
                <h3>Everything Else</h3>
                <p>
                  Any other electrical works can be carried out by our qualified
                  team
                </p>
              </li>
            </ul>
            <footer className="major"></footer>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Commercial Services</h2>
              <p>
                We cover all aspects of Commercial Electrical Work across Essex.
              </p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-code-fork"></span>
                <strong>Installation</strong>
              </li>
              <li className="style2">
                <span className="icon fa-folder-open-o"></span>
                <strong>Maintenance</strong>
              </li>
              <li className="style3">
                <span className="icon fa-signal"></span>
                <strong>Inspection</strong> & Testing
              </li>
              <li className="style4">
                <span className="icon fa-laptop"></span>
                <strong>Lighting</strong>
              </li>
            </ul>
            <footer className="major"></footer>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Contact</h2>
              <p>We're available for a free no obligation quote!</p>
            </header>

            <section class="main special">
              <h2>Contact Form</h2>
              <form
                action="https://formspree.io/phil@street-electrical.co.uk"
                method="POST"
              >
                <div>
                  <div>
                    <input
                      required
                      type="text"
                      name="name"
                      id="name"
                      value={this.state.name}
                      placeholder="Your Name"
                      onChange={this.handleChange('name')}
                    />
                  </div>
                  <br />
                  <div>
                    <input
                      required
                      type="email"
                      name="email"
                      id="email"
                      value={this.state.email}
                      placeholder="Your Email"
                      onChange={this.handleChange('email')}
                    />
                  </div>
                  <br />
                  <div>
                    <select
                      name="category"
                      id="category"
                      required
                      onChange={this.handleChange('option')}
                    >
                      <option value={this.state.option}>
                        - Pick a category -
                      </option>
                      <option value="Lighting">Lighting</option>
                      <option value="Re-wiring">Re-wiring</option>
                      <option value="Sockets">Sockets</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <br />
                  <div>
                    <textarea
                      required
                      name="message"
                      id="message"
                      placeholder="Enter your message"
                      rows="6"
                      onChange={this.handleChange('message')}
                    ></textarea>
                  </div>
                  <br />
                  <div>
                    <ul class="actions">
                      <li>
                        <input
                          type="submit"
                          value="Send Message"
                          class="primary"
                        />
                      </li>
                      {/* <li><input type="reset" value="Reset" onSubmit={this.resetValues()}/></li> */}
                    </ul>
                  </div>
                </div>
              </form>
            </section>

            <footer className="major">
              <ul class="icons">
                <h2>
                  Call Street Electrical on{' '}
                  <a href="tel:07896748201">07896748201</a>
                </h2>
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
