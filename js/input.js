Vue.component('my-input', {
    template: `
        <div>
            <input :type="input_type" class="form-control" :placeholder="input_placeholder" v-model="user_input" >
            <slot name="icon"></slot>
            <div v-if="invalid">
                <slot></slot>
            </div>
        </div>
    `,
    props: ['input_type', 'input_placeholder', 'pattern'],
    data() {
        return {
            user_input: '',
            invalid: false,
        }
    },
    watch: {
        /**
         * Using regex to confirm whether the value that the 
         * use input match the pattern.
         * @param {String} val the value of user input
         */
        user_input(val) {
            var re = new RegExp("^" + this.pattern + "$");
            if (val.length > 0) {
                this.invalid = !re.test(val)
            } else {
                this.invalid = false
            }
        },
    }
})