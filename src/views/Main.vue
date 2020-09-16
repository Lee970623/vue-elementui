<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu :default-openeds="['1']">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>Tutors
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <!-- <router-link to="/tutor/rank/1">Tutor rank</router-link>  -->
                <router-link :to="{name: 'TutorRank', params: {id:3}}">Tutor rank</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link to="/tutor/list">Tutor list</router-link>
              </el-menu-item>
              <el-menu-item index="1-3">
                <router-link to="/goMain">Main page</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>Courses
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">Major</el-menu-item>
              <el-menu-item index="2-2">Course list</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>view</el-dropdown-item>
              <el-dropdown-item>add</el-dropdown-item>
              <el-dropdown-item>delete</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <!-- <span>{{$route.params.username}}</span> -->
          <span>{{$store.getters.getUser.username}}</span>
        </el-header>

        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Main",
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>