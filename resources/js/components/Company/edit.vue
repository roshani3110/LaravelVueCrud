<template>
    <b-container>
        <h1 class="text-center">Edit Company</h1>
        <b-row>
            <b-col sm="3" class="mt-1">
                <b-form-group label="Name" class="bold" label-class="m-0 p-0" >
                    <b-form-input type="text"
                        class=" "
                        name="name"
                        :value="name"
                        @input="updateName"
                    />
                </b-form-group>
            </b-col>
            <b-col sm="3" class="mt-1">
                <b-form-group label="Email" class="bold" label-class="m-0 p-0" >
                    <b-form-input type="email"
                        class=" "
                        name="email"
                        :value="email"
                        @input="updateEmail"
                    />
                </b-form-group>
            </b-col>
            <b-col sm="3" class="mt-1">
                <b-form-group label="Website" class="bold" label-class="m-0 p-0" >
                    <b-form-input type="text"
                        class=" "
                        name="website"
                        @input="updateWebsite"
                        :value="website"
                    />
                </b-form-group>
            </b-col>
            <b-col sm="3" class="mt-1">
                <b-form-group label="Logo" class="bold" label-class="m-0 p-0" >
                    <!-- <b-form-file
                        type="file"
                        placeholder="Choose a file or drop it here..."
                        drop-placeholder="Drop file here..."
                        @change="updateLogo"
                    ></b-form-file> -->
                </b-form-group>
            </b-col>
        </b-row>
        <b-button size="sm" class="text-center" variant="success" @click="submitForm">Update</b-button>
    </b-container>
</template>
<script>
export default {
    data () {
        return {
            name: null,
            email: null,
            website: null,
            logo: []
        }
    },
    created() {
        this.axios
            .get(`http://laravelvuecrud.test/api/companies/${this.$route.params.id}`)
            .then(response => {
                console.log(response.data)
                this.name = response.data.name
                this.email = response.data.email
                this.website = response.data.website
            });
    },
    methods: {
        updateName (value) {
            this.name = value
        },
        updateEmail (value) {
            this.email = value
        },
        updateWebsite (value) {
            this.website = value
        },
        updateLogo (e) {
            console.log(e)
            for (let i in e.target.files) {
                let logo = e.target.files[i];
                if (typeof logo === "object") {
                    this.logo.push(logo);
                }
            }
        },
        submitForm() {
            this.axios
                .post(`http://laravelvuecrud.test/api/companies/${this.$route.params.id}`, {
                    name: this.name,
                    email: this.email,
                    website: this.website
                })
                .then(response => {
                    console.log(response)
                    this.$router.push({name: 'company'})
                })
                .catch(error => 
                    console.log(error)
                )
        }
    }
}
</script>
