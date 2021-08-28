<template>
    <b-container>
        <h1 class="text-center">Employees</h1>
        <router-link :to="{ name: 'create-employee' }">
            <b-button class="float-right" variant="primary" size="sm">Create</b-button>
        </router-link>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <template v-if="employees">
                    <tr v-for="employee in employees" :key="employee.id">
                        <td>{{ employee.id }}</td>
                        <td>{{ employee.first_name }}</td>
                        <td>{{ employee.last_name }}</td>
                        <td>{{ employee.email }}</td>
                        <td>{{ employee.phone }}</td>
                        <td>
                            <div>
                                <router-link :to="{name: 'show-employee', params: { id: employee.id }}">
                                    <b-button class="" variant="success" size="sm">Show</b-button>
                                </router-link>
                                <router-link :to="{name: 'edit-employee', params: { id: employee.id }}">
                                    <b-button variant="success" size="sm">Edit</b-button>
                                </router-link>
                                <b-button class="" variant="danger" size="sm" @click="deleteEmployee(employee.id)">Delete</b-button>
                            </div>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
        <div class="text-center">
            <pagination :items="employees" @changePage="onChangePage" :labels="customLabels"></pagination>
        </div>
    </b-container>
</template>
<script>
export default {
    data () {
        return {
            employees: [],
            customLabels: {
                first: '<<',
                last: '>>',
                previous: '<',
                next: '>'
            },
            pageOfItems: []
        }
    },
    created() {
        this.axios
            .get('http://laravelvuecrud.test/api/employees')
            .then(response => {
                this.employees = response.data.data;
            });
    },
    methods: {
        deleteEmployee(id) {
            this.axios
                .delete(`http://laravelvuecrud.test/api/employees/${id}`)
                .then(response => {
                    let i = this.employees.map(item => item.id).indexOf(id); // find index of your object
                    this.employees.splice(i, 1)
                });
        },
        onChangePage(pageOfItems) {
            this.pageOfItems = pageOfItems;
        }
    }
}
</script>
