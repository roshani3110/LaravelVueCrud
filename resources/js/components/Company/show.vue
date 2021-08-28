<template>
    <b-container>
        <h1 class="text-center">Show Company</h1>
        <table class="table table-bordered">
            <tbody v-if="company">
                <tr>
                    <th>ID</th>
                    <td>{{ company.id }}</td>
                </tr>
                <tr>
                    <th>Name</th>
                    <td>{{ company.name }}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{{ company.email }}</td>
                </tr>
                <tr>
                    <th>Website</th>
                    <td>{{ company.website }}</td>
                </tr>
            </tbody>
        </table>
    </b-container>
</template>
<script>
export default {
    data () {
        return {
            company: null
        }
    },
    created() {
        this.axios
            .get(`http://laravelvuecrud.test/api/companies/${this.$route.params.id}`)
            .then(response => {
                console.log(response.data)
                this.company = response.data;
            });
    }
}
</script>
