// Contact section component
export class ContactComponent {
  constructor() {
    this.container = document.getElementById('contact');
  }

  render() {
    this.container.innerHTML = `
      <div class="contact-section">
        <div class="contact-container">
          <h2 class="contact-title fade-in">Contact Us</h2>
          
          <div class="contact-content">
            <div class="contact-form-container fade-in">
              <h3 class="contact-form-title">Get In Touch</h3>
              <form id="contactForm" method="POST"
                action="https://script.google.com/macros/s/AKfycbzN8QSQeJRv1f8UzUBm7wOhMkvJwA0gIv4n0UC_g_BOhvcztftBHKqh1JNBx6hqFgP5YA/exec">
                <div class="form-group">
                  <label for="nameInput" class="form-label">Full Name</label>
                  <input type="text" name="Name" class="form-control" id="nameInput" required>
                </div>

                <div class="form-group">
                  <label for="emailInput" class="form-label">Email Address</label>
                  <input type="email" name="Email" class="form-control" id="emailInput" required>
                </div>

                <div class="form-group">
                  <label for="phoneInput" class="form-label">Phone Number</label>
                  <input type="tel" name="Number" class="form-control" id="phoneInput" required>
                </div>

                <div class="form-group">
                  <label for="requirementsInput" class="form-label">Your Requirements</label>
                  <textarea name="Requirements" class="form-control" id="requirementsInput" rows="4" required placeholder="Please describe your requirements in detail..."></textarea>
                </div>

                <button type="submit" class="btn-primary-custom">Send Message</button>
              </form>
            </div>

            <div class="contact-info-container slide-in-right">
              <h3 class="contact-info-title">Contact Information</h3>
              
              <div class="contact-info-item">
                <div class="contact-info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                    class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                  </svg>
                </div>
                <div class="contact-info-content">
                  <a href="https://maps.app.goo.gl/m55JmXxTUM46Z5XQ6" target="_blank">
                    <p>Chasten Rubber Product<br>
                      Ashtavinayak Ind. Estate, <br>
                      Gala No. 111/ 113/ 114<br>
                      Vasai Phata, Vasai-401208, MH, India.</p>
                  </a>
                </div>
              </div>
              
              <hr class="contact-divider">
              
              <div class="contact-info-item">
                <div class="contact-info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telephone"
                    viewBox="0 0 16 16">
                    <path
                      d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                  </svg>
                </div>
                <div class="contact-info-content">
                  <a href="tel:+919820568558">
                    <p>+91 9820568558</p>
                  </a>
                  <a href="tel:+919619917558">
                    <p>+91 9619917558</p>
                  </a>
                </div>
              </div>

              <hr class="contact-divider">
              
              <div class="contact-info-item">
                <div class="contact-info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope"
                    viewBox="0 0 16 16">
                    <path
                      d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                  </svg>
                </div>
                <div class="contact-info-content">
                  <a href="mailto:chastenrubber_plastic_pro@yahoo.co.in">
                    <p>chastenrubber_plastic_pro@yahoo.co.in</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div class="copyright-section fade-in">
            <p class="copyright-text">© 2024 Chasten Rubber Product. All rights reserved.</p>
          </div>
        </div>
      </div>
    `;
  }
}