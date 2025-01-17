<template>
  <div class="flex w-full h-full justify-center " id="app">

    <div>
      <form @submit.prevent="submitForm">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="form.name" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>
        <div>
          <label for="message">Message:</label>
          <textarea id="message" v-model="form.message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
      <div class="w-full h-full relative">
        <div class="absolute flex-col md:top-1/4 flex md:justify-center md:flex-row flex-nowrap w-full px-10">
          <hgroup class="max-md:pt-20 sm:text-3xl text-xl text-white" style=" text-shadow: 2px 2px 2px black;">
            <h1 class="max-sm:text-3xl text-5xl">Hoi dit is een klein voorbeeldje voor u. </h1>
            <h2 class="text-animaton max-sm:text-3xl text-5xl">gemaakt door <span>Julian</span>,</h2>
            <h3 class="max-sm:text-2xl text-3xl">nog een beetje tekst</h3>
          </hgroup>

          <div style="" class="cat-responsive absolute right-0 top-1/2">

          </div>
        </div>

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Create the message object
      const messageModel = {
        name: this.form.name,
        email: this.form.email,
        message: this.form.message
      };

      // Call a method to send it to the backend
      this.saveToDatabase(messageModel);
    },
    saveToDatabase(data) {
      // Replace with your backend API endpoint
      fetch('https://your-api-endpoint.com/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            alert('Message sent successfully!');
          })
          .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
          });
    }
  }
};
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
