<template>
    <div class="container">
       <h1 class="d-none">Email Sent to you</h1>
    </div>
</template>

<script>
    export default {
        mounted() {
          //  console.log('Component mounted.')
          //  swal("Hello world!")
            swal({
              icon: "success",
              text: "An Email Receipt Has Been Sent To You",
              button: {
                  text: "Okay",
                  value: true,
                  visible: true,
                  className: "bg-primary",
                  closeModal: true,
                }
            });
            setTimeout(function(){ 
                location.href=`/home`
            }, 3000);
        }
    }
</script>
