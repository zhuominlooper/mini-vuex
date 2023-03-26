let Vue; //用于缓存Vue的类

class Store {
  constructor(options) {
    this._vm = new Vue({
      data: {
        $$state: options.state,
      },
    });
    this._mutations = options.mutations;
    this._actions = options.actions;
    this.commit = this.commit.bind(this);
    this.dispatch = this.dispatch.bind(this);
    this.getters = {};

    if (options.getters && Object.keys(options.getters).length) {
      this.handleGetters(options.getters);
    }
  }
  get state() {
    return this._vm._data.$$state;
  }
  commit(type, payload) {
    const fun = this._mutations[type];
    if (fun) {
      return fun(this.state, payload);
    }
    throw "没找到该类型的mutation";
  }
  dispatch(type, payload) {
    const fun = this._actions[type];
    if (fun) {
      return fun(this, payload);
    }
    throw "没找到该类型的action";
  }

  //对配置项getters里的属性进行代理get方法，当调用具体的gets时，就触发该代理
  handleGetters(getters) {
    Object.keys(getters).map((key) => {
      Object.defineProperty(this.getters, key, {
        get: () => getters[key](this.state),
      });
    });
  }
}

const install = (_Vue) => {
  //把store挂载在vue上，方便实例去访问
  Vue = _Vue;
  Vue.mixin({
    beforeCreate() {
      //在main.js中的new Vue加上了配置
      if (this.$options && this.$options.store) {
        Vue.prototype.$store = this.$options.store;
      }
    },
  });
};

export default { Store, install };
