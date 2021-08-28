<template>
    <b-container>
        <h1 class="text-center">Create Employee</h1>
        <b-row>
            <b-col sm="3" class="mt-1">
                <b-form-group label="First Name" class="bold" label-class="m-0 p-0" >
                    <b-form-input type="text"
                        class=" "
                        name="first_name"
                        @input="updateFirstName"
                    />
                </b-form-group>
            </b-col>
            <b-col sm="3" class="mt-1">
                <b-form-group label="Last Name" class="bold" label-class="m-0 p-0" >
                    <b-form-input type="text"
                        class=" "
                        name="last_name"
                        @input="updateLastName"
                    />
                </b-form-group>
            </b-col>
            <b-col sm="3" class="mt-1">
                <b-form-group label="Email" class="bold" label-class="m-0 p-0" >
                    <b-form-input type="email"
                        class=" "
                        name="email"
                        @input="updateEmail"
                    />
                </b-form-group>
            </b-col>
            <b-col sm="3" class="mt-1">
                <b-form-group label="Phone" class="bold" label-class="m-0 p-0" >
                    <b-form-input type="text"
                        class=" "
                        name="phone"
                        @input="updatePhone"
                    />
                </b-form-group>
            </b-col>
            <b-col sm="3" class="mt-1">
                <b-form-group label="Company" class="bold" label-class="m-0 p-0" >
                    <b-form-select
                        :options="companies"
                        text-field="name"
                        value-field="id"
                        @change="updateCompany"
                    ></b-form-select>
                </b-form-group>
            </b-col>
        </b-row>
        <b-button size="sm" class="text-center" variant="success" @click="submitForm">Save</b-button>
    </b-container>
</template>
<script>
export default {
    data () {
        return {
            first_name: null,
            last_name: null,
            email: null,
            phone: null,
            company_id: null,
            companies: []
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
        updateFirstName (value) {
            this.first_name = value
        },
        updateLastName (value) {
            this.last_name = value
        },
        updateEmail (value) {
            this.email = value
        },
        updatePhone (value) {
            this.phone = value
        },
        updateCompany (value) {
            this.company_id = value
        },
        submitForm() {
            this.axios
                .post('http://laravelvuecrud.test/api/employees', {
                    first_name: this.first_name,
                    last_name: this.last_name,
                    email: this.email,
                    phone: this.phone,
                    company_id: this.company_id
                })
                .then(response => {
                    console.log(response)
                    this.$router.push({name: 'employee'})
                })
                .catch(error => 
                    console.log(error)
                )
        }
    }
}
</script>
