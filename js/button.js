Vue.component('my-button', {
    template: `
        <button :type="button_type" class="btn btn-submit full-width">
            <slot></slot>
        </button>
    `,
    props: ['button_type'],
    data() {
        return {

        }
    }
})