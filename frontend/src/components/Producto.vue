<template>
    <div>
        <button @click="mostrarModal()" class="btn btn-light mt-3 border border-dark d-flex ml-auto">Nuevo</button>

        <!-- Products Table -->
        <div class="table-responsive mt-3">
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">Opciones</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Código</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="prod in productos" :key="prod._id">
                    <th scope="row">   
                        <span @click="remove(prod)" class="d-inline"><i class="far fa-trash-alt"></i></span>
                        <span @click="editItem(prod)" class="d-inline mx-3"><i class="far fa-edit"></i></span>
                        <span @click="activarDesactivar(prod)" class="d-inline" v-if="prod.estado"><i class="fas fa-ban"></i></span>
                        <span @click="activarDesactivar(prod)" class="d-inline" v-else><i class="fas fa-check"></i></span>            
                    </th>
                    <td>{{prod.nombre}}</td>
                    <td>{{prod.descripcion}}</td>
                    <td>$ {{prod.precio_venta}}</td>
                    <td>{{prod.codigo}}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Add Products Modal -->
        <div v-if="modalNuevo">
            <transition name="modal">
            <div class="modal-mask">
                <div class="modal-wrapper">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{{formTitle}}</h5>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="mb-2 col-12 col-sm-12 col-md-6 col-lg-6">
                                    <label class="mr-auto">Nombre</label>
                                    <input type="text" v-model="nombre" class="form-control">
                                </div>
                                <div class="mb-2 col-12 col-sm-12 col-md-6 col-lg-6">
                                    <label>Precio</label>
                                    <input type="number" v-model="precio_venta" class="form-control">
                                </div>
                                <div class="mb-2 col-12 col-sm-12 col-md-12 col-lg-12">
                                    <label>Descripción</label>
                                    <input type="text" v-model="descripcion" class="form-control">
                                </div>
                                <div class="mb-2 col-12 col-sm-12 col-md-6 col-lg-6">
                                    <label class="mr-auto">Código</label>
                                    <input type="text" v-model="codigo" class="form-control">
                                </div>
                                <div class="mb-2 col-12 col-sm-12 col-md-6 col-lg-6">
                                    <label>Orden</label>
                                    <input type="number" v-model="ordenNum" class="form-control">
                                </div>
                                <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                                    <div class="text-danger" v-for="v in validaMensaje" :key="v" v-text="v"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" @click="cerrarModal()">Cerrar</button>
                        <button type="button" class="btn btn-success" @click="guardar()">{{buttonSaveEdit}}</button>
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
            productos: [],
            modalNuevo: 0,
            _id: '',
            nombre: '',
            precio_venta: '',
            descripcion: '',
            codigo: '',
            ordenNum: '',
            valida: 0,
            validaMensaje: [],
            editedIndex: -1
        }
    },
    computed: {
        formTitle() {
        return this.editedIndex === -1 ? 'Nuevo Producto' : 'Editar Producto'
        },
        buttonSaveEdit() {
        return this.editedIndex === -1 ? 'Guardar' : 'Editar'
        }
    },
    created(){
        this.listar();
        this.interval = setInterval(() => this.listar(), 1000);
    },
    methods: {
        listar(){
            let me = this;
            axios.get('producto/list').then( function(response){
                me.productos = response.data;
            }).catch( function(error){
                console.log(error)
            });  
        },
        mostrarModal(){
            this.modalNuevo = 1
        },
        cerrarModal(){
            this.modalNuevo = 0
            this.limpiar()
        },
        limpiar(){
            this._id = '';
            this.nombre = '';
            this.precio_venta = 0;
            this.descripcion = '';
            this.codigo = '';
            this.ordenNum = 0;
            this.editedIndex = -1;
        },
        validar(){
            this.valida = 0;
            this.validaMensaje = [];
            if(this.nombre.length < 1 || this.nombre.length > 50){
                this.validaMensaje.push('El nombre debe tener entre 1 a 50 caracteres.')
            }
            if(this.precio_venta < 0 || this.precio_venta == ''){
                this.validaMensaje.push('El precio debe ser un valor mayor a 0.')
            }
            if(this.descripcion.length > 255){
                this.validaMensaje.push('La descripción no debe tener más de 255 caracteres.')
            }
            if(this.nombre.length < 1 || this.nombre.length > 64){
                this.validaMensaje.push('El código debe tener entre 1 a 64 caracteres.')
            }
            if(this.ordenNum < 0 || this.ordenNum == ''){
                this.validaMensaje.push('El número de orden debe ser un valor mayor a 0.')
            }
            if(this.validaMensaje.length){
                this.valida = 1
            }
            return this.valida;
        },
        guardar(){
            let me = this;
            if(this.validar()){
                return
            }
            if(this.editedIndex > -1){
                // Edit code
                axios.put('producto/update', {
                    '_id': this._id,
                    'nombre': this.nombre, 
                    'precio_venta': this.precio_venta, 
                    'descripcion': this.descripcion, 
                    'codigo': this.codigo, 
                    'ordenNum': this.ordenNum})
                .then(function(response){
                    me.limpiar();
                    me.cerrarModal();
                    me.listar();
                })
                .catch(function(error){
                    console.log(error);
                });
            } else {
                // Save code
                axios.post('producto/add', {
                    'nombre': this.nombre, 
                    'precio_venta': this.precio_venta, 
                    'descripcion': this.descripcion, 
                    'codigo': this.codigo, 
                    'ordenNum': this.ordenNum})
                .then(function(response){
                    me.limpiar();
                    me.cerrarModal();
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
            this.precio_venta = item.precio_venta;
            this.descripcion = item.descripcion;
            this.codigo = item.codigo;
            this.ordenNum = item.ordenNum
            this.modalNuevo = 1;
            this.editedIndex = 1;
        },
        remove(item){
            let me = this;
            axios.delete('producto/remove?_id='+item._id).then(function(response){
                me.listar()
            }).catch( function(error){
                console.log(error)
            }); 
        },
        activarDesactivar(item){
            let me = this;
            if(item.estado){
                // Deactivate Code
                axios.put('producto/deactivate', {'_id': item._id})
                    .then(function(response){
                        me.listar();
                    })
                    .catch(function(error){
                        console.log(error);
                    });
            } else if(item.estado == 0) {
                // Activate Code
                axios.put('producto/activate', {'_id': item._id})
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