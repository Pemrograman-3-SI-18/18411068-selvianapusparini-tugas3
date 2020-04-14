<template>
  <q-layout class="bg-blue-grey-1" view="hHh Lpr lFf">
    <q-page-container>
      <q-page padding class="row items-lg-center justify-center">
        <div class="row full-width">
          <div class="col-md-8 offset-md-2 col-xs-12 q-pl-md 1-pr-md q-pt-sm">
            <q-card flat class="bg-white text-black">
              <div class="row">
                <q-card-section class="text-blue-grey-14">
                  <div class="text-h4">Regiatrasi</div>
                </q-card-section>
                <div class="col-md-12 col-xs-12 q-pt-md"></div>
                <div class="q-pa-md">

                  <q-form
                    @submit="onSubmit"
                    @reset="onReset"
                    class="q-gutter-md"
                  >
                    <q-input
                      filled
                      v-model="username"
                      label="Username *"
                      hint="Username"
                      lazy-rules
                      :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
                    />

                    <q-input
                      filled
                      v-model="email"
                      label="email *"
                      hint="email"
                      lazy-rules
                      :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
                    />

                    <q-input
                      filled
                      v-model="nohp"
                      label="no. hp *"
                      hint="no. hp"
                      lazy-rules
                      :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
                    />

                    <q-input
                      filled
                      type="password"
                      v-model="password"
                      label="password *"
                      hint="password"
                      lazy-rules
                      :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
                    />

                    <div>
                      <q-btn label="Registrasi" type="submit" color="primary"/>
                      <q-btn label="Login" to="/auth/Login" color="primary" flat class="q-ml-sm" />
                    </div>
                  </q-form>

                </div>
              </div>
            </q-card>
          </div>
        </div>

      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'Registrasi',
  data () {
    return {
      username: null,
      email: null,
      nohp: null,
      password: null,

      accept: false
    }
  },

  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
}
</script>

<style scoped>

</style>
