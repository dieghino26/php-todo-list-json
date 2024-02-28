const { createApp } = Vue;
const apiUri = "http://localhost/php-todo-list-json/api/tasks/";

const app = createApp({
    data: () => ({
        tasks: []
    }),
    created() {
        axios.get(apiUri).then(res => {
            this.tasks = res.data
        })
    }

})
app.mount("#app");