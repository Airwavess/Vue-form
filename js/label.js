Vue.component('my-label', {
    template: `
        <div>
            <label for="exampleInputEmail1">
                <slot></slot>
            </label>
        </div>
    `
})