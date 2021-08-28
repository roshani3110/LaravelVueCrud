<template>
    <b-container>
        <h1 class="text-center">Companies</h1>
        <router-link :to="{ name: 'create-company' }">
            <b-button class="float-right" variant="primary" size="sm">Create</b-button>
        </router-link>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="company in companies" :key="company.id">
                    <td>{{ company.id }}</td>
                    <td>{{ company.name }}</td>
                    <td>{{ company.email }}</td>
                    <td>{{ company.website }}</td>
                    <td>
                        <div>
                            <router-link :to="{name: 'show-company', params: { id: company.id }}">
                                <b-button class="" variant="success" size="sm">Show</b-button>
                            </router-link>
                            <router-link :to="{name: 'edit-company', params: { id: company.id }}">
                                <b-button variant="success" size="sm">Edit</b-button>
                            </router-link>
                            <b-button class="" variant="danger" size="sm" @click="deleteCompany(company.id)">Delete</b-button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="text-center">
            <pagination :items="companies" @changePage="onChangePage" :labels="customLabels"></pagination>
        </div>
    </b-container>
</template>
<script>
export default {
    data () {
        return {
            companies: [],
            pageOfItems: [],
            customLabels: {
                first: '<<',
                last: '>>',
                previous: '<',
                next: '>'
            }
        }
    },
    created() {
        this.axios
            .get('http://laravelvuecrud.test/api/companies')
            .then(response => {
                this.companies = response.data.data;
            });
    },
    methods: {
        deleteCompany(id) {
            this.axios
                .delete(`http://laravelvuecrud.test/api/companies/${id}`)
                .then(response => {
                    let i = this.companies.map(item => item.id).indexOf(id); // find index of your object
                    this.companies.splice(i, 1)
                });
        },
        onChangePage(pageOfItems) {
            this.pageOfItems = pageOfItems;
        }
    }
}
</script>
