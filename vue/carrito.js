Vue.createApp({
    data(){
        return {
            producto: '',
            carrito: [
                'cebolla',
                'Tomate',
                'pollo'
            ]
        }
    },
    methods:{ 
        agregar(){
            this.carrito.push(this.producto)
            this.producto = '';
        }
    }
}).mount('#app')