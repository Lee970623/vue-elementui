<template>
  <div>
      TutorRank ID={{id}}
  </div>
</template>

<script>
export default {
    name: 'TutorRank',
    props: ['id'],

    // before entering route
    beforeRouteEnter: (to, from, next) => {
        console.log(to);
        console.log(from);
        console.log('enter tutor rank');

        // params: url
        // false: render to original page
        // vm: render to component called vm
        next(vm => {
            vm.getData();
        });
    },

    // before leaving route
    beforeRouteLeave: (to, from, next) => {
        console.log(to);
        console.log(from);
        console.log('leave tutor rank');

        next()
    },

    methods: {
        getData: function() {
            this.axios({
                method: 'get',
                url: 'http://127.0.0.1:5500/BasicVue/data.json',
            }).then(function (repos) {
                console.log(repos.data);
            }).catch(function (err) {
                console.log(err);
            })
        }
    }
}
</script>

<style>

</style>