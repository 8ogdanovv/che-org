<template>
  <footer>
    <div class="form">
      <h2 id="contact">Hire Me For Your Next Amazing Project</h2>
      <div class="top">
        <div class="text">
          <p>
            Let’s make something new, different, and more meaningful or make things
            more visual or conceptual? Just say hello!
          </p>
          <div class="address">
            <div>
              <div class="dash"></div>
              <div class="p">+380 505 444 199</div>
            </div>
            <div>
              <div class="dash"></div>
              <div class="p">vadym4che@gmail.com</div>
            </div>
            <div>
              <div class="dash"></div>
              <div class="p">
                19/5, Dekabrystiv St, Boyarka, 08150
                <br />
                Kyivs'ka oblast, Ukraine
              </div>
            </div>
          </div>
        </div>
        <div class="theform">
          <form class="fields" @submit.prevent="submitForm">
            <div class="inputs">
              <input v-model="name" type="text" placeholder="Your name">
              <input v-model="email" type="email" placeholder="Your email address">
              <input v-model="budget" type="number" placeholder="Your budget (Optionally)">
              <input v-model="description" class="desc" type="text" placeholder="Your project description">
            </div>
            <button type="submit">SEND</button>
          </form>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="media">
        <a href="https://www.facebook.com/vadym4che/" target="_blank" rel="noopener noreferrer">
          <img src="../assets/fb.png" alt="media1">
        </a>
        <a href="https://www.linkedin.com/in/vadym4che/" target="_blank" rel="noopener noreferrer">
          <img src="../assets/in.png" alt="media2">
        </a>
        <a href="https://github.com/vadym4che" target="_blank" rel="noopener noreferrer">
          <img src="../assets/gh.png" alt="media3">
        </a>
        <a href="https://www.codewars.com/users/vadym4che" target="_blank" rel="noopener noreferrer">
          <img src="../assets/cw.png" alt="media4">
        </a>
        <a href="https://t.me/vadym4che" target="_blank" rel="noopener noreferrer">
          <img src="../assets/tg.png" alt="media5">
        </a>
      </div>
      <span class="copy">&copy; 2022 Vadym4Čhe Portfolio Template</span>
    </div>
  </footer>
</template>

<script>

import emailjs from 'emailjs-com';


// Your script code here

export default {
  name: 'FooterView',
  data() {
    return {
      name: '',
      email: '',
      budget: '',
      description: '',
    };
  },
  methods: {
    submitForm() {
      const message = `
        Name: ${this.name}
        Email: ${this.email}
        Budget: ${this.budget}
        Description: ${this.description}
      `;

      const templateParams = {
        name: this.name,
        email: this.email,
        budget: this.budget,
        description: this.description,
        message: message.trim(), // Include all form field values in the message property
      };

      emailjs
        .send('vadym4che_email7js', 'template_email7js', templateParams, 'DrJDQf3M1hyPj0_40')
        .then((response) => {
          console.log('Email sent successfully!', response.status, response.text);
          // Perform any additional actions upon successful email sending
        })
        .catch((error) => {
          console.error('Error sending email:', error);
          // Handle any error that occurred during email sending
        });

      // Perform your form submission logic here
      console.log('Form submitted successfully!');
      console.log('Name:', this.name);
      console.log('Email:', this.email);
      console.log('Budget:', this.budget);
      console.log('Description:', this.description);

      // Clear form inputs
      this.name = '';
      this.email = '';
      this.budget = '';
      this.description = '';
    },
  },
};
</script>
