<template>
    <b-container>
        <h1 class="text-center">Show Employee</h1>
        <table class="table table-bordered">
            <tbody v-if="employee">
                <tr>
                    <th>ID</th>
                    <td>{{ employee.id }}</td>
                </tr>
                <tr>
                    <th>First Name</th>
                    <td>{{ employee.first_name }}</td>
                </tr>
                <tr>
                    <th>Last Name</th>
                    <td>{{ employee.last_name }}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{{ employee.email }}</td>
                </tr>
                <tr>
                    <th>Phone</th>
                    <td>{{ employee.phone }}</td>
                </tr>
            </tbody>
        </table>
    </b-container>
</template>
<script>
export default {
    data () {
        return {
            employee: null
        }
    },
    created() {
        this.axios
            .get(`http://laravelvuecrud.test/api/employees/${this.$route.params.id}`)
            .then(response => {
                console.log(response.data)
                this.employee = response.data;
            });
    }
}
</script>
