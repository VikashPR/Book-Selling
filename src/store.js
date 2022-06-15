import Vue from 'vue';
import Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    infoPage:[],
    cartItems:[],
    items: [
      {
        id:0,
        img: require('@/assets/1.jpg'),
        title: 'Mathematical statistics',
        price: 559,
        color: 'yellow',
        type: 'sofa'
      }, {
        id:1,
        img: require('@/assets/2.jpg'),
        title: 'Discrete mathematics',
        price: 759,
        color: 'yellow',
        type: 'lamp'
      }, {
        id:2,
        img: require('@/assets/3.jpg'),
        title: 'Probability and statistics',
        price: 779,
        color: 'yellow',
        type: 'chair'
      }, {
        id:3,
        img: require('@/assets/4.jpg'),
        title: 'software engineering',
        price: 889,
        color: 'red',
        type: 'chair'
      }, {
        id:4,
        img: require('@/assets/5.jpg'),
        title: 'Software project management',
        price: 1199,
        color: 'white',
        type: 'sofa'
      }, {
        id:5,
        img: require('@/assets/6.jpg'),
        title: 'Data structures',
        price: 889,
        color: 'white',
        type: 'chair'
      }, {
        id:6,
        img: require('@/assets/7.jpg'),
        title: 'Introduction to algorithms',
        price: 789,
        color: 'blue',
        type: 'chair'
      }, {
        id:7,
        img: require('@/assets/8.jpg'),
        title: 'operating systems',
        price: 959,
        color: 'red',
        type: 'table'
      },
      {
        id:8,
        img: require('@/assets/9.jpg'),
        title: 'Modern operating systems',
        price: 799,
        color: 'white',
        type: 'table'
      },
      {
        id:9,
        img: require('@/assets/10.jpg'),
        title: 'Expert python programming',
        price: 756,
        color: 'yellow',
        type: 'chair'
      },
      {
        id:10,
        img: require('@/assets/11.jpg'),
        title: 'Python programming',
        price: 978,
        color: 'white',
        type: 'chair'
      },
      {
        id:11,
        img: require('@/assets/12.jpg'),
        title: 'Data structures',
        price: 675,
        color: 'red',
        type: 'lamp'
      },
      {
        id:12,
        img: require('@/assets/13.jpg'),
        title: 'Data and computer communication',
        price: 756,
        color: 'blue',
        type: 'lamp'
      },
      {
        id:13,
        img: require('@/assets/14.jpg'),
        title: 'Analog and digital electronics',
        price: 889,
        color: 'white',
        type: 'chair'
      },
      {
        id:14,
        img: require('@/assets/table-1.jpg'),
        title: 'Environmental engineering',
        price: 756,
        color: 'white',
        type: 'table'
      }
    ]
  },
  // plugins: [createPersistedState()],
  getters: {
    itemsNumber(state){  // Cart Component
      return state.cartItems.length
    },
    totalPrice(state) { // Cart Component
      if (state.cartItems.length != 0){
       return state.cartItems.reduce((a, b) => {
         return (b.price == null ) ? a : a + b.price
       }, 0)
      }
    },
    infoLength(state) { // Info Component
      if(state.infoPage.length > 0) {
        return state.infoPage.splice(0, 1)
      }
    }
  },
  mutations: {
    inCart(state, n) { // Cart Component
      return state.cartItems.push(n)
    },
    outCart(state, n) { // Cart Component
      let index = state.cartItems.findIndex(x => x.id === n)
      return state.cartItems.splice(index, 1)
    },
    addtoInfo(state, n) { // Info Component
       return state.infoPage.push(n)
    }
  },
})
