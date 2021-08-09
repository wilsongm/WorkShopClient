<template>
  <form action="">
         <b-navbar-item style="left: 53%">
             <router-link to="signup" >Sign Up</router-link>
        </b-navbar-item>
    <div class="modal-card" style="width: 300px">
      <section class="modal-card-body">
     
        <b-field label="Email">

          <b-input type="email"
           placeholder="Your email" 
           required> </b-input>

        </b-field>
        <b-field label="Password">
          <b-input
            type="password"
            password-reveal
            placeholder="Your password"
            required
          >
          </b-input>
        </b-field>

        <b-checkbox>Remember me</b-checkbox>
      </section>
      <footer class="modal-card-foot">
        <b-button label="Login" type="is-primary" />
         
       
      </footer>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      hasError: true,
    };
  },
};
</script>