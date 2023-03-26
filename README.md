# mini-vuex
## 这是一个实现vuex核心的项目 

**VUEX的构成**
vuex是由两部分构成，分别是Store类和install方法  
1.Store类:
   - 是vuex的核心，通过传入的vuex基本的配置项(state,mutation...)进行初始化  
  
   - 其中传入的state调用了new Vue里的data配置项，让state的数据和模板进行了双向绑定  
  
   - 由于state和视图进行了绑定，依赖；所以vuex的数据变化时，对应的视图数据也发生改变  
  
  
2.install方法:
   - 该方法里调用了mixin的混入，在beforeCreate中把store的实例挂载在Vue的原型上，所以vue的实例能访问(this.$store.xxx)
  


