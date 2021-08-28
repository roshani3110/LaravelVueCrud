<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">Laravel</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item :to="{ name: 'company'}">Company</b-nav-item>
                    <b-nav-item :to="{ name: 'employee'}">Employee</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    
}
</script>
