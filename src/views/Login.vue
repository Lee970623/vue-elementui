<template>
  <div>
    <el-form ref="form" :rules="rules" :model="form" label-width="80px" class="login-box">
      <h3 class="login-title">Sign in with your account!</h3>
      <el-form-item label="username" prop="username">
        <el-input v-model="form.username" placeholder="Username" />
      </el-form-item>
      <el-form-item label="password" prop="password">
        <el-input type="password" v-model="form.password" placeholder="Password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">SIGN IN</el-button>
        <el-button @click="resetForm('form')">reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "please fill username field!",
            trigger: "change",
          },
        ],
        password: [
          {
            required: true,
            message: "password cannot leave empty!",
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // this.$router.push({name: 'Main', params: {username: this.form.username}});
          sessionStorage.setItem("isLogin", "true");
          this.$store.dispatch("asyncUpdateUser", {
            username: this.form.username,
            password: this.form.password,
          });
          this.$router.push("/main");
        } else {
          this.$message.error("error submit");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style>
.login-box {
  background: white;
  width: 600px;
  margin: 20px auto;
  border: 1px solid #409eff;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 10px 5px 10px darkgrey;
  animation-name: fadeIn;
  animation-duration: 1.5s;
}

.login-title {
  text-align: center;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(5em);
  }
  100% {
    opacity: 1;
    transform: translateY(0em);
  }
}
</style>