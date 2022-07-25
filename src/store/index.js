import {createStore} from 'vuex'

export default createStore({
    state: {
        mejoresvinos: [],
        tiposvino: [],

        productos: [],
        promocion: [],
        accesorios: [],

        carroProductos: [],
        carroPromociones: [],
        carroAccesorios: [],
        carroFinal: [],

        totalProductos: 0,
        totalDescuentoProductos: 0,
        totalFinalProductos: 0,

        totalPromociones: 0,
        totalDescuentoPromociones: 0,
        totalFinalPromociones: 0,

        totalAccesorios: 0,
        totalDescuentoAccesorios: 0,
        totalFinalAccesorios: 0,

        total: 0,
        totalDescuentos: 0,
        totalAPagar: 0,

        isLoadingVinosHome: false,
        isLoadingProductos: false,
        isLoadingPromocion: false,
        isLoadingAccesorios: false,
    },
    getters: {},
    mutations: {
        addCarro(state, payload) {
            // console.log(payload[0])
            // console.log(payload[1])
            let id = payload[0]
            let tipo = payload[1]
            // el tipo puede ser: 'producto', 'promocion' o 'accesorio'
            if (tipo === 'producto') {
                const productoAgregado = state.productos.find(i => i.id === id)
                state.carroProductos.push(productoAgregado)
                state.totalProductos += parseInt(productoAgregado.precio_promo)
                if (state.totalProductos < 100000) {
                    state.totalDescuentoProductos = parseInt(state.totalProductos * 0.05)
                } else {
                    state.totalDescuentoProductos = parseInt(state.totalProductos * 0.11)
                }
                state.totalFinalProductos = state.totalProductos - state.totalDescuentoProductos
            }
            if (tipo === 'promocion') {
                const productoAgregado = state.promocion.find(i => i.id === id)
                state.carroPromociones.push(productoAgregado)
                state.totalPromociones += productoAgregado.precio_promo
                if (state.totalPromociones < 100000) {
                    state.totalDescuentoPromociones = parseInt(state.totalPromociones * 0.05)
                } else {
                    state.totalDescuentoPromociones = parseInt(state.totalPromociones * 0.11)
                }
                state.totalFinalPromociones = state.totalPromociones - state.totalDescuentoPromociones
            }
            if (tipo === 'accesorio') {
                const productoAgregado = state.accesorios.find(i => i.id === id)
                state.carroAccesorios.push(productoAgregado)
                state.totalAccesorios += productoAgregado.precio_promo
                if (state.totalAccesorios < 100000) {
                    state.totalDescuentoAccesorios = parseInt(state.totalAccesorios * 0.05)
                } else {
                    state.totalDescuentoAccesorios = parseInt(state.totalAccesorios * 0.11)
                }
                state.totalFinalAccesorios = state.totalAccesorios - state.totalDescuentoAccesorios
            }
        },
        removeCarro(state, payload) {
            let id = payload[0]
            let tipo = payload[1]
            // el tipo puede ser: 'producto', 'promocion' o 'accesorio'
            if (tipo === 'producto') {
                const productoEliminado = state.productos.find(i => i.id === id) //busca el producto a eliminar
                state.totalProductos -= parseInt(productoEliminado.precio_promo) //resto el valor prod eliminado

                const eliminar = state.carroProductos.findIndex(p=> p === productoEliminado)
                state.carroProductos.splice(eliminar,1)

                // state.carroProductos = state.carroProductos.filter(i => i.id !== id) //no sirve, elimina todos los prod c/ese id
                if (state.totalProductos < 100000) {
                    state.totalDescuentoProductos = parseInt(state.totalProductos * 0.05)
                } else {
                    state.totalDescuentoProductos = parseInt(state.totalProductos * 0.11)
                }
                state.totalFinalProductos = state.totalProductos - state.totalDescuentoProductos
            }
            if (tipo === 'promocion') {
                const productoEliminado = state.promocion.find(i => i.id === id) //busca el producto a eliminar
                state.totalPromociones -= parseInt(productoEliminado.precio_promo) //resto el valor prod eliminado

                const eliminar = state.carroPromociones.findIndex(p=> p === productoEliminado)
                state.carroPromociones.splice(eliminar,1)

                // state.carroPromociones = state.carroPromociones.filter(i => i.id !== id) //no sirve, elimina todos los prod c/ese id
                if (state.totalPromociones < 100000) {
                    state.totalDescuentoPromociones = parseInt(state.totalPromociones * 0.05)
                } else {
                    state.totalDescuentoPromociones = parseInt(state.totalPromociones * 0.11)
                }
                state.totalFinalPromociones = state.totalPromociones - state.totalDescuentoPromociones
            }
            if (tipo === 'accesorio') {
                const productoEliminado = state.accesorios.find(i => i.id === id) //busca el producto a eliminar
                state.totalAccesorios -= parseInt(productoEliminado.precio_promo) //resto el valor prod eliminado

                const eliminar = state.carroAccesorios.findIndex(p=> p === productoEliminado)
                state.carroAccesorios.splice(eliminar,1)

                // state.carroAccesorios = state.carroAccesorios.filter(i => i.id !== id) //no sirve, elimina todos los prod c/ese id
                if (state.totalAccesorios < 100000) {
                    state.totalDescuentoAccesorios = parseInt(state.totalAccesorios * 0.05)
                } else {
                    state.totalDescuentoAccesorios = parseInt(state.totalAccesorios * 0.11)
                }
                state.totalFinalAccesorios = state.totalAccesorios - state.totalDescuentoAccesorios
            }
        },
        removeCarroFinal(state, payload){
            const productoEliminado = state.productos.find(i => i.id === payload) //busca el producto a eliminar
            const promocionEliminado = state.promocion.find(i => i.id === payload) //busca el promocion a eliminar
            const accesorioEliminado = state.accesorios.find(i => i.id === payload) //busca el accesorio a eliminar
            if(productoEliminado){
                state.totalProductos -= parseInt(productoEliminado.precio_promo) //resto el valor prod eliminado
                const eliminar = state.carroProductos.findIndex(p=> p === productoEliminado)
                state.carroProductos.splice(eliminar,1)
                if (state.totalProductos < 100000) {
                    state.totalDescuentoProductos = parseInt(state.totalProductos * 0.05)
                } else {
                    state.totalDescuentoProductos = parseInt(state.totalProductos * 0.11)
                }
                state.totalFinalProductos = state.totalProductos - state.totalDescuentoProductos
            }else if (promocionEliminado){
                let productoEliminado = promocionEliminado
                state.totalPromociones -= parseInt(productoEliminado.precio_promo) //resto el valor prod eliminado
                const eliminar = state.carroPromociones.findIndex(p=> p === productoEliminado)
                state.carroPromociones.splice(eliminar,1)
                if (state.totalPromociones < 100000) {
                    state.totalDescuentoPromociones = parseInt(state.totalPromociones * 0.05)
                } else {
                    state.totalDescuentoPromociones = parseInt(state.totalPromociones * 0.11)
                }
                state.totalFinalPromociones = state.totalPromociones - state.totalDescuentoPromociones
            }else if(accesorioEliminado){
                let productoEliminado = accesorioEliminado
                state.totalAccesorios -= parseInt(productoEliminado.precio_promo) //resto el valor prod eliminado
                const eliminar = state.carroAccesorios.findIndex(p=> p === productoEliminado)
                state.carroAccesorios.splice(eliminar,1)
                if (state.totalAccesorios < 100000) {
                    state.totalDescuentoAccesorios = parseInt(state.totalAccesorios * 0.05)
                } else {
                    state.totalDescuentoAccesorios = parseInt(state.totalAccesorios * 0.11)
                }
                state.totalFinalAccesorios = state.totalAccesorios - state.totalDescuentoAccesorios
            }
        },
        pagar(state) {
            state.carroFinal = []
            state.total = state.totalProductos + state.totalPromociones + state.totalAccesorios
            state.totalDescuentos = state.totalDescuentoProductos + state.totalDescuentoPromociones + state.totalDescuentoAccesorios
            state.totalAPagar = state.totalFinalProductos + state.totalFinalPromociones + state.totalFinalAccesorios
            for (let i of state.carroProductos) {
                state.carroFinal.push(i)
            }
            for (let j of state.carroPromociones) {
                state.carroFinal.push(j)
            }
            for (let k of state.carroAccesorios) {
                state.carroFinal.push(k)
            }
            // console.log(state.carroFinal)
            // console.log(state.total)
            // console.log(state.totalDescuentos)
            // console.log(state.totalAPagar)
        },
        setDataVinosHome(state, dataVinosHome) {
            state.mejoresvinos = dataVinosHome['mejoresvinos']
            state.tiposvino = dataVinosHome['tiposvino']
        },
        setDataPromocion(state, dataPromocion) {
            state.promocion = dataPromocion['productos']
        },
        setDataProductos(state, dataProductos) {
            state.productos = dataProductos['productos']
        },
        setDataAccesorios(state, dataAccesorios) {
            state.accesorios = dataAccesorios['productos']
        },

        limpiarDatos(state) {
            state.carroProductos = []
            state.carroPromociones = []
            state.carroAccesorios = []
            state.carroFinal = []

            state.totalProductos = 0
            state.totalDescuentoProductos = 0
            state.totalFinalProductos = 0

            state.totalPromociones = 0
            state.totalDescuentoPromociones = 0
            state.totalFinalPromociones = 0

            state.totalAccesorios = 0
            state.totalDescuentoAccesorios = 0
            state.totalFinalAccesorios = 0

            state.total = 0
            state.totalDescuentos = 0
            state.totalAPagar = 0
        }
    },
    actions: {
        async fetchVinosHome({commit}) {
            this.isLoadingVinosHome = true
            try {
                const res = await fetch('home.json')
                const dataVinosHome = await res.json()
                commit('setDataVinosHome', dataVinosHome)
                this.isLoadingVinosHome = false
            } catch (error) {
                console.log(error)
            }
        },
        async fetchPromocion({commit}) {
            this.isLoadingPromocion = true
            try {
                const res = await fetch('promocion.json')
                const dataPromocion = await res.json()
                commit('setDataPromocion', dataPromocion)
                this.isLoadingPromocion = false
            } catch (error) {
                console.log(error)
            }
        },
        async fetchProductos({commit}) {
            this.isLoadingProductos = true
            try {
                const res = await fetch('productos.json')
                const dataProductos = await res.json()
                commit('setDataProductos', dataProductos)
                this.isLoadingProductos = false
            } catch (error) {
                console.log(error)
            }
        },
        async fetchAccesorios({commit}) {
            this.isLoadingAccesorios = true
            try {
                const res = await fetch('accesorios.json')
                const dataAccesorios = await res.json()
                commit('setDataAccesorios', dataAccesorios)
                this.isLoadingAccesorios = false
            } catch (error) {
                console.log(error)
            }
        }
    },
    modules: {}
})
