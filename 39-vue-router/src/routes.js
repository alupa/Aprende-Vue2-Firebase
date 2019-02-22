import Home from './components/Home'
import Contacto from './components/Contacto'
import Usuario from './components/Usuario'
import Equipo from './components/Equipo'
import Miembro from './components/Miembro'
import MiembroFotos from './components/MiembroFotos'
import MiembroBio from './components/MiembroBio'
//import Article from './components/Article'
import NotFound from './components/NotFound'
import {store} from './store'

const Article = resolve => {
    require.ensure('./components/Article', () => {
        resolve(require('./components/Article'))
    })
}

export const routes = [
    {path: '/', component: Home, name: 'home'},
    {path: '/article', component: Article},
    {path: '/prueba', alias: '/otraprueba', redirect: {name: 'home'}, component: Home},
    // {path: '/contacto/:newsletter', component: Contacto, name: 'contacto', props: true},
    {   beforeEnter: (to, from, next) => {
            console.log('acceso a ruta contacto')
            next(store.state.auth)
    },
        path: '/contacto/', meta: {privado: true},  component: Contacto, name: 'contacto', props: {newsletter: true}},
    {path: '/usuario/:id/post/:post_id', component: Usuario},
    {path: '/equipo/:id', component: Equipo, children: [
        // {path: '', component: Miembro, name: 'equipo', children: [
        //     {path: 'fotos', component: MiembroFotos, name: 'fotos'},
        //     {path: 'bio', component: MiembroBio, name: 'bio'},   
        // ]},
        {path: '', components: {
            default: Miembro,
            bio: MiembroBio,
            fotos: MiembroFotos,
        }, name: 'equipo'},
    ]},
    {path: '*', component: NotFound},
]
