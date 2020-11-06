<template>
  <div id="app">

    <!-- Top Navbar -->
    <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <router-link class="navbar-brand py-2 font-weight-bold ml-auto px-3" to="/">Valhalla App</router-link>
    </nav>

    <!-- Sidebar Navbar -->
    <div class="container-fluid">
      <div class="row">
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block sidebar collapse">
          <div class="sidebar-sticky pt-3">

            <router-link to="/" class="h5 d-flex justify-content-between align-items-center text-dark px-3 my-2 mb-1">
                  <span><i class="fas fa-home"></i> Inicio</span>
            </router-link>

            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Herramientas</span>
              <a class="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
                <span data-feather="plus-circle"></span>
              </a>
            </h6>
            <ul class="nav flex-column mb-2">
              <li class="nav-item">
                <router-link class="nav-link" to="/producto">
                  <span data-feather="file-text"></span>
                  Productos
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/pedido">
                  <span data-feather="file-text"></span>
                  Pedidos
                </router-link>
              </li>
            </ul>

            <!-- <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Datos del negocio</span>
              <a class="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
                <span data-feather="plus-circle"></span>
              </a>
            </h6>
            <ul class="nav flex-column mb-2">
              <li class="nav-item">
                <router-link class="nav-link" to="/">
                  <span data-feather="file-text"></span>
                  Ventas
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/">
                  <span data-feather="file-text"></span>
                  Clientes
                </router-link>
              </li>
            </ul> -->

          </div>
        </nav>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <router-view></router-view>
        </main>
      </div>
    </div>

   <!--
      <div class="text-center bg-dark position-absolute-bottom py-2 text-light">
        © 2020 Copyright: GordoDW
      </div> -->

  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#sidebarMenu{
  background: rgba(123, 211, 217, 0.15);
  height: 100vh;
  position: fixed;
}
</style>
