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
            press: false
        }
    },
    mounted() {
    },
    computed: {
        show() {
            var re = new RegExp("^" + this.pattern + "$");
            return this.invalid + " " + re.test(this.user_input)
        },
        has_press() {
            if (this.user_input.length > 0) {
                this.press = true
            }
            return this.press
        }
    },
    watch: {
        user_input(val) {
            var re = new RegExp("^" + this.pattern + "$");
            if (this.user_input.length > 0) {
                this.invalid = !re.test(this.user_input)
            } else {
                this.invalid = false
            }
        },
    }
})