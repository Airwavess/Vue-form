new Vue({
    el: "#app",
    data: {
        isSubmitAllowed: true
    },
    methods: {
        /**
         * After the user click the submit button, check whether the all the
         * value that user input is valid. If any value is invalid or empty, 
         * it shows the error message under input line. 
         */
        validate() {
            this.isSubmitAllowed = true

            Object.keys(this.$children).map((index) => {
                if (typeof this.$children[index].invalid != 'undefined') {
                    if (this.$children[index].invalid) {
                        this.isSubmitAllowed = false
                    } else if (this.$children[index].user_input.length == 0)  {
                        this.$children[index].invalid = true
                        this.isSubmitAllowed = false
                    }
                }
            })
        },
        /**
         * Prevent event, if the submit is not allowed, otherwsie, output 'OK' in console. 
         */
        onSubmit() {
            this.validate()
            if (!this.isSubmitAllowed) {
                event.preventDefault();
            } else {
                console.log('OK')
            }
        }
    }
})