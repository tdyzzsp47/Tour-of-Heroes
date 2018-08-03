import Root from './page/Root'
import Heroes from './page/Heroes'
import Detail from './page/Detail'

export default {
  mode: 'history',
  routes: [
    {
      path: '/', component: Root, name: 'root'
    },
    {
      path: '/heroes', component: Heroes, name: 'heroes'
    },
    {
      path: '/detail/:id', component: Detail, name: 'detail'
    }
  ]
}
