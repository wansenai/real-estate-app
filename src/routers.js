//1.导入VueRouter
import Vue from "vue";
import VueRouter from 'vue-router'
import HelloWord from "./components/chooseWords.vue";
import edit from "./page/edit.vue";
//2.使用路由
Vue.use(VueRouter);
//3.创建VueRouter的实例
const router = new VueRouter({
    //tips:不想要 #（锚点）就添加下面代码
     mode:'hash', 
    //4.配置路由的path和组件
    routes :[
        {
          path: "/",
          name:'home',
          component: HelloWord,
        },
        {
          path: "/page/edit",
          name:'edit12433',
          component: edit
        },
      ]
})
//5.导入路由实例
export default router

