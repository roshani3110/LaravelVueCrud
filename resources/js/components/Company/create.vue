<template>
    <b-container>
        <h1 class="text-center">Create Company</h1>
        <b-row>
            <b-col sm="3" class="mt-1">
                <b-form-group label="Name" class="bold" label-class="m-0 p-0" >
                    <b-form-input type="text"
                        class=" "
                        name="name"
                        @input="updateName"
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
                <b-form-group label="Website" class="bold" label-class="m-0 p-0" >
                    <b-form-input type="text"
                        class=" "
                        name="website"
                        @input="updateWebsite"
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
        <b-button size="sm" class="text-center" variant="success" @click="submitForm">Save</b-button>
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
            console.log('update logo', e.target)
            // for (let i in e.target.files) {
            //     let file = e.target.files[i];
            //     if (typeof logo === "object") {
            //         this.logo.push(file);
            //     }
            // }
            this.logo = e.target.value[i]
        },
        submitForm() {
            this.axios
                .post('http://laravelvuecrud.test/api/companies', {
                    name: this.name,
                    email: this.email,
                    // logo: this.logo,
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
