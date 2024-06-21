import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <footer>
            <div className="footer-columns">
                <div className="footer-column">
                    <h3>Categories</h3>
                    <ul>
                        <li>User Interface</li>
                        <li>User Experience</li>
                        <li>Digital Media</li>
                        <li>Lifestyle</li>
                        <li>Programming</li>
                        <li>Animation</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Product</h3>
                    <ul>
                        <li>Pricing</li>
                        <li>Overview</li>
                        <li>Browse</li>
                        <li>Accessibility</li>
                        <li>Five</li>
                        <li>Changelog</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Solutions</h3>
                    <ul>
                        <li>Brainstorming</li>
                        <li>Ideation</li>
                        <li>Wireframing</li>
                        <li>Research</li>
                        <li>Design</li>
                        <li>Concept</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Resources</h3>
                    <ul>
                        <li>Help Center</li>
                        <li>Blog</li>
                        <li>Tutorials</li>
                        <li>FAQs</li>
                        <li>Community</li>
                        <li>Events</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Support</h3>
                    <ul>
                        <li>Contact Us</li>
                        <li>Developers</li>
                        <li>Documentation</li>
                        <li>Integrations</li>
                        <li>Reports</li>
                        <li>Webinar</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Company</h3>
                    <ul>
                        <li>About</li>
                        <li>Press</li>
                        <li>Events</li>
                        <li>Careers</li>
                        <li>Customers</li>
                        <li>Partners</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2023 Xinder, Inc. All rights reserved.</p>
                <p className="legal-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </p>
            </div>
        </footer>
    )
}

export default Footer
