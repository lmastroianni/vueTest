<script type="module">
  import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'
</script>

let vue_VM = new vue_VM({
    data: {
        message: "Hello from Vue!",

        collection: [
            {name: "joe", role: "Prof"}
            {name: "bill", role: "Prof"}
            {name: "bob", role: "Prof"}
        ]
    },

    methods: {
        logClicked() {
            console.log('clicked on an element!');
        }
    }

}).$mount("#app");
})();