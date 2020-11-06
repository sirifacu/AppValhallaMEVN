<template>
    <div>

        <!-- Header -->
        <div v-if="addForm == 0" class="my-3">
            <div class="row">
                <div class="col-sm-3 col-md-3 col-lg-3">
                    <input type="date" v-model="fechaFiltro" class="form-control mr-auto text-uppercase">
                </div>
                <div class="col-sm-6 col-md-6 col-lg-6">
                    <h4 class="text-center font-weight-bold">Contador de Burgers: {{ totalBurgers }}</h4>
                </div>
                <div class="col-sm-3 col-md-3 col-lg-3">
                    <button @click="mostrarForm()" class="btn btn-light border border-dark d-flex ml-auto">Nuevo</button>
                </div> 
            </div>
        </div>

        <!-- Request Box -->
        <div v-if="addForm == 0" class="row justify-content-center">
            <div class="col-12 col-sm-12 col-md-6 col-lg-6" v-for="ped in fechaPedidos" :key="ped._id">
                <div class="card mb-3 rounded shadow" :class="{'border-danger': !ped.estado, 'border-success': ped.estado}" style="max-width: 540px;">

                    <div class="row row-cols-2">

                        <!-- Left column data -->
                        <div class="col my-auto pt-4 justify-content-left">
                            <h6 class="pl-3 text-left">Nombre: <span :class="{'text-danger': !ped.estado, 'text-success': ped.estado}">{{ ped.nombre }}</span></h6>
                            <h6 class="pl-3 text-left">Dirección: <span :class="{'text-danger': !ped.estado, 'text-success': ped.estado}">{{ ped.direccion }}</span></h6>
                            <h6 class="pl-3 text-left">Hora de salida: <span :class="{'text-danger': !ped.estado, 'text-success': ped.estado}">{{ ped.hora }}</span></h6>
                            <h6 class="pl-3 text-left">Notas: <span :class="{'text-danger': !ped.estado, 'text-success': ped.estado}">{{ ped.notas }}</span></h6>
                            <h6 class="pl-3 text-left">Envío: <span :class="{'text-danger': !ped.estado, 'text-success': ped.estado}">{{ ped.envio }}</span></h6>
                        </div>
                        
                        <!-- Right column data -->
                        <div class="col pt-4 my-auto">
                            <div class="card-body">
                                <ul class="list-group list-group-flush">
                                    <li class="text-left px-0 list-group-item" v-for="item in ped.detalles" :key="item._id">
                                        <span class="py-0" :class="{'text-danger': !ped.estado, 'text-success': ped.estado}">{{ item.cantidad }}</span><span class="py-0"> - {{ item.producto }}</span><br>
                                        <span :class="{'text-danger': !ped.estado, 'text-success': ped.estado}"><small>{{ item.nota }}</small></span></li>
                                        <li class="list-group-item h3 text-center" :class="{'text-danger': !ped.estado, 'text-success': ped.estado}">${{ped.total}}</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                
                    <!-- Buttons -->
                    <div class="d-flex justify-content-center">
                        <button @click="preparado(ped)" class="ml-2 mb-2" :class="{'btn btn-secondary': !ped.estado, 'btn btn-success': ped.estado}">Preparado</button>
                        <button @click="editItem(ped)" class="btn btn-primary ml-2 mb-2">Editar</button>
                        <button @click="abrirDel(ped)" class="btn btn-danger ml-2 mb-2">Eliminar</button>
                    </div>
                    
                </div>
            </div>
        </div>

        <!-- Add Products Form -->
        <div v-if="addForm" class="mt-4 mb-3">
            <h4 class="font-weight-bold mb-3">{{formTitle}}</h4>
            <div class="container-fluid">
                <div class="row">
                    <div class="mb-2 col-12 col-sm-12 col-md-4 col-lg-4">
                        <label class="mr-auto">Nombre</label>
                        <input type="text" v-model="nombre" class="form-control">
                    </div>
                    <div class="mb-2 col-12 col-sm-12 col-md-4 col-lg-4">
                        <label class="mr-auto">Hora de entrega</label>
                        <input type="time" v-model="hora" class="form-control">
                    </div>
                    <div class="mb-2 col-12 col-sm-12 col-md-4 col-lg-4">
                        <label class="mr-auto">Envío</label>
                        <select v-model="envio" class="form-control">
                            <option selected disabled value="">Elegir</option>
                            <option value="Lucas">Lucas</option>
                            <option value="Iván">Iván</option>
                            <option value="Delivery">Delivery</option>
                            <option value="Busca">Busca</option>
                        </select>
                    </div>
                    <div class="mb-2 col-12 col-sm-12 col-md-6 col-lg-6">
                        <label>Dirección</label>
                        <input type="text" v-model="direccion" class="form-control">
                    </div>
                    <div class="mb-2 col-12 col-sm-12 col-md-6 col-lg-6">
                        <label>Notas</label>
                        <input type="text" v-model="notas" class="form-control">
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                        <div class="text-danger" v-for="v in validaMensaje" :key="v" v-text="v"></div>
                    </div>
                </div>
                
                <!-- Add Product Button -->
                <div class="d-flex justify-content-center ">
                    <button @click="addBurger()" class="btn btn-light border border-primary my-3">Agregar Burger</button>
                </div>

                <!-- Tabla de Productos -->
                <table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">Borrar</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Nota</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="det in detalles" :key="det._id">
                    <th scope="row">   
                        <span @click="removeBurger(detalles, det)" class="d-inline"><i class="far fa-trash-alt"></i></span>
                    </th>
                    <td>{{det.producto}}</td>
                    <td><input type="text" v-model="det.nota" class="form-control"></td>
                    <td><input type="number" v-model="det.cantidad" class="form-control"></td>
                    <td><input type="number" v-model="det.precio" class="form-control"></td>
                    <td>$ {{det.cantidad * det.precio}}</td>
                    </tr>
                </tbody>
                </table>

                <p class="text-right"><span class="font-weight-bold"> Precio Total: </span>  $ {{total = calcularTotal}}</p>
                  
            </div>
            <button type="button" class="mx-2 btn btn-secondary" @click="cerrarForm()">Cerrar</button>
            <button type="button" class="mx-2 btn btn-success" @click="guardar()">{{buttonSaveEdit}}</button>
        </div>
        
        <!-- Burgers Modal -->
        <div v-if="burgerModal">
            <transition name="modal">
            <div class="modal-mask">
                <div class="modal-wrapper">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Seleccioná un producto</h5>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="mb-2 col-12 col-sm-12 col-md-12 col-lg-12">
                                    <label class="mr-auto text-left">Buscar</label>
                                    <input type="text" @keyup.enter="listarBurgers()" v-model="texto" class="form-control">
                                </div>
                            </div>

                            <div class="table-responsive mt-3">
                                <table class="table">
                                    <thead class="thead-dark">
                                        <tr>
                                        <th scope="col">Agregar</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Precio</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="prod in productos" :key="prod._id">
                                        <th scope="row">   
                                            <span @click="agregarDetalle(prod)" class="d-inline my-auto"><i class="fas fa-plus"></i></span>          
                                        </th>
                                        <td>{{prod.nombre}}</td>
                                        <td>$ {{prod.precio_venta}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" @click="cerrarBurger()">Cerrar</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </transition>
        </div>

        <!-- Delete Requests Modal -->
        <div v-if="delModal">
            <transition name="modal">
            <div class="modal-mask">
                <div class="modal-wrapper">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Eliminar Pedido</h5>
                    </div>
                    <div class="modal-body">
                        <h6>Seguro seguro segurísimo que querés eliminar el pedido de {{delNombre}}?</h6>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" @click="cerrarDel()">Cerrar</button>
                        <button type="button" class="btn btn-danger" @click="remove()">Elminar</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </transition>
        </div>
                
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            pedidos: [],
            addForm: 0,
            burgerModal: 0,
            delModal: 0,
            _id: '',
            nombre: '',
            direccion: '',
            notas: '',
            envio: '',
            total: '',
            hora: '',
            detalles: [],
            productos: [],
            valida: 0,
            validaMensaje: [],
            texto: '',
            delNombre: '',
            delId: '',
            editedIndex: -1,
            fechaFiltro: ''
        }
    },
    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'Nuevo Pedido' : 'Editar Pedido'
        },
        buttonSaveEdit() {
            return this.editedIndex === -1 ? 'Guardar' : 'Editar'
        },
        calcularTotal(){
            let resultado = 0;
            for(var i = 0; i < this.detalles.length; i++){
                resultado = resultado + (this.detalles[i].cantidad * this.detalles[i].precio);
            }
            return resultado;
        },
        fechaPedidos(){
            let filt = this.pedidos.filter((ped) => ped.createdAt.includes(this.fechaFiltro))
            return filt
        },
        totalBurgers(){
            let sum = 0;
            for(let i = 0; i < this.fechaPedidos.length; i++){
                let item = this.fechaPedidos[i].detalles
                for(let x = 0; x < item.length; x++){
                sum += (parseFloat(item[x].cantidad));
                }
            }

            return sum
        }
    },
    created(){
        this.listar();
        this.interval = setInterval(() => this.listar(), 5000);
    },
    methods: {
        listar(){
            let me = this;
            axios.get('pedido/list').then( function(response){
                me.pedidos = response.data;
            }).catch( function(error){
                console.log(error)
            });  
        },
        mostrarForm(){
            this.addForm = 1
        },
        cerrarForm(){
            this.addForm = 0
            this.limpiar()
        },
        addBurger(){
            this.burgerModal = 1;
        },
        cerrarBurger(){
            this.burgerModal = 0;
        },
        abrirDel(item){
            this.delModal = 1;
            this.delNombre = item.nombre;
            this.delId = item._id;
        },
        cerrarDel(){
            this.delModal = 0;
            this.delNombre = '';
            this.delId = '';
        },
        limpiar(){
            this._id = '';
            this.nombre = '';
            this.direccion = '';
            this.notas = '';
            this.total = '';
            this.envio = '';
            this.hora = '';
            this.detalles = [];
            this.editedIndex = -1;
        },
        validar(){
            this.valida = 0;
            this.validaMensaje = [];
            if(this.nombre.length < 1 || this.nombre.length > 50){
                this.validaMensaje.push('El nombre debe tener entre 1 a 50 caracteres.')
            }
            if(this.direccion.length < 1 || this.nombre.length > 80){
                this.validaMensaje.push('La dirección debe tener entre 1 a 80 caracteres.')
            }
            if(!this.hora){
                this.validaMensaje.push('Indicá un horario de entrega.')
            }
            if(this.detalles.length === 0){
                this.validaMensaje.push('Agregá productos al pedido.')
            }
            if(this.validaMensaje.length){
                this.valida = 1
            }
            return this.valida;
        },
        guardar(){
            let me = this;
            let date = new Date();
            date.now;
            date.setHours(0, 0, 0, 0)
            if(this.validar()){
                return
            }
            if(this.editedIndex > -1){
                // Edit code
                axios.put('pedido/update', {
                    '_id': this._id,
                    'nombre': this.nombre, 
                    'direccion': this.direccion, 
                    'notas': this.notas, 
                    'total': this.total, 
                    'envio': this.envio, 
                    'hora': this.hora, 
                    'createdAt': date,
                    'detalles': this.detalles})
                .then(function(response){
                    me.limpiar();
                    me.cerrarForm();
                    me.listar();
                })
                .catch(function(error){
                    console.log(error);
                });
            } else {
                // Save code
                axios.post('pedido/add', {
                    'nombre': this.nombre, 
                    'direccion': this.direccion, 
                    'notas': this.notas, 
                    'total': this.total, 
                    'envio': this.envio, 
                    'hora': this.hora,
                    'createdAt': date,
                    'detalles': this.detalles})
                .then(function(response){
                    me.limpiar();
                    me.cerrarForm();
                    me.listar();
                })
                .catch(function(error){
                    console.log(error);
                });
            }
        },
        editItem(item){
            this._id = item._id;
            this.nombre = item.nombre;
            this.direccion = item.direccion;
            this.notas = item.notas;
            this.total = item.total;
            this.envio = item.envio;
            this.hora = item.hora;
            this.detalles = item.detalles;
            this.addForm = 1;
            this.editedIndex = 1;
        },
        remove(){
            let me = this;
            axios.delete('pedido/remove?_id='+me.delId).then(function(response){
                me.listar();
                me.delNombre = '';
                me.delId = '';
            }).catch( function(error){
                console.log(error)
            }); 
                this.delModal = 0;
        },
        removeBurger(arr, item){
            let i = arr.indexOf(item)
                if(i != -1){
                    arr.splice(i, 1);
                }
        },
        listarBurgers(){
            let me = this;
            axios.get('producto/list?valor='+this.texto).then( function(response){
                me.productos = response.data;
            }).catch( function(error){
                console.log(error)
            });  
        },
        agregarDetalle(data){
            this.detalles.push(
                {
                    _id: data._id,
                    producto: data.nombre,
                    nota: data.nota,
                    cantidad: 1,
                    precio: data.precio_venta

                });
        },
        preparado(item){
            if(item.estado == 0){
                let me = this;
                axios.put('pedido/activate', {'_id': item._id})
                    .then(function(response){
                        me.listar();
                    })
                    .catch(function(error){
                        console.log(error);
                    });
            } else if(item.estado == 1){
                let me = this;
                axios.put('pedido/deactivate', {'_id': item._id})
                    .then(function(response){
                        me.listar();
                    })
                    .catch(function(error){
                        console.log(error);
                    });
            }
        }
    }
}
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>