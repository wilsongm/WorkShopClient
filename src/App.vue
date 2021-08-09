
<template>
  <div id="app">
      <b-navbar>
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://flowcdn.azureedge.net/mediahandler/partnersv2/partnerfiles/solvex-dominicana-srl/powerapps-flow-directory/es-es/ec65714e2705e61858dbbe9eca38dc9e2aebf90ac7c810c0a303b0bad4dd21cf.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item >
               <router-link to="/">Home</router-link> 
            </b-navbar-item>
            <b-navbar-item >
               <router-link to="/users">Users</router-link> 
            </b-navbar-item>
            <b-navbar-dropdown label="Info">
                <b-navbar-item >
                  <router-link to="/about">About</router-link>
                </b-navbar-item>
                <b-navbar-item >
                    <router-link to="contact" >Contact</router-link>
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <b-button tag="router-link"
                        to="/signup"
                        type="is-link">
                        Sign Up
                    </b-button>
                     <b-button tag="router-link"
                        to="/login"
                        type="is-link is-light">
                        Login
                    </b-button>

                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
    <router-view/>
  </div>
</template>


