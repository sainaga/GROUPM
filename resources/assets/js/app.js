
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import swal from 'sweetalert'
window.Vue = require('vue'); 

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('browse', require('./components/browse.vue'));
Vue.component('booked-alert', require('./components/booked-alert.vue'));

import VeeValidate from 'vee-validate';
import moment from 'moment';
import { Validator } from 'vee-validate';

Validator.installDateTimeValidators(moment);

Vue.use(VeeValidate);

const app = new Vue({
    el: '#app',
    data: {
    	 email: '',
    	 name: '',
         firstname: '',
         lastname: '',
    	 password: '',
         confirm_password: '',
         password_match: '',
    	 username: '',
    	 type: 'Card',
         card: '',
    	 car: '',
         ccv: '',
         no_tickets: '1',
    	 total_tickets: '',
         selected_date: '',
         after_field: '',
         description: '',
         today: ''
    },
    mounted() {
        this.total_tickets = 12 * this.no_tickets
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();
        if(dd<10){
            dd='0'+dd;
        } 
        if(mm<10){
            mm='0'+mm;
        } 
        //today = dd+'/'+mm+'/'+yyyy;
        this.today = today = yyyy+'-'+mm+'-'+dd
    //    document.getElementById("DATE").value = today;
       // alert(this.today);
    },
     watch: {
        no_tickets: function (val) {
          this.total_tickets = 12 * this.no_tickets
        }
      },
     methods: {
        validateBeforeSubmit(e) {
            this.$validator.validateAll();
            if (!this.errors.any()) {
             //   this.submitForm()
             $( "#login-form" ).submit();
             
            }
          },
        validateCreateEventBeforeSubmit(e) {
            this.$validator.validateAll();
            if (!this.errors.any()) {
             //   this.submitForm()
             $( "#create-event-form" ).submit();
             
            }
          },
        validateBookCardSubmit(e) {
            this.$validator.validateAll();
            if (!this.errors.any()) {
             //   this.submitForm()
             $( "#booking-card-form" ).submit();
             
            }
          },
        validateBookPaypalSubmit(e) {
            this.$validator.validateAll();

       //     if (!this.errors.any()) {
             //   this.submitForm()
             $( "#booking-paypal-form" ).submit();
             
       //     }
          },
        validateRegisterSubmit(e) {
	        this.$validator.validateAll();
            if(this.password == this.confirm_password){
    	        if (!this.errors.any()) {
    	         //   this.submitForm()
    	         $( "#register-form" ).submit();
    	         
    	        }else{
                    alert('Please Fix Errors!');
                }
            }else{
                this.password_match = 'Passwords do not match!'
            }
	      },
          keyup() {
            if(this.password == this.confirm_password){
                this.password_match = ''
            }else{
                this.password_match = 'Passwords do not match!'
            }
          }
	  }
});
