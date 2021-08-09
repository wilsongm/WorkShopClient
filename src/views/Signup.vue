<template>
  <form action="">
    <div class="modal-card" style="width: 300px">
      <section>
        <b-field label="Name">
          <b-input v-model="name"></b-input>
        </b-field>

        <b-field label="Email" type="is-danger" message="This email is invalid">
          <b-input type="email" value="john@" maxlength="30"> </b-input>
        </b-field>

        <b-field
          label="Username"
          type="is-success"
          message="This username is available"
        >
          <b-input value="johnsilver" maxlength="30"></b-input>
        </b-field>

        <b-field label="Password">
          <b-input type="password" value="iwantmytreasure" password-reveal>
          </b-input>
        </b-field>

        <b-button 
          tag="router-link" 
          to="/login" 
          type="is-primary">
             Login
        </b-button>
      </section>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "John Silver",
    };
  },
};
</script>