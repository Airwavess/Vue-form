new Vue({
    el: "#app",
    data: {
        isSubmitAllowed: true
    },
    methods: {
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