(function(t) {
    function e(e) {
        for (var s, r, n = e[0], c = e[1], l = e[2], u = 0, m = []; u < n.length; u++) r = n[u], Object.prototype.hasOwnProperty.call(o, r) && o[r] && m.push(o[r][0]), o[r] = 0;
        for (s in c) Object.prototype.hasOwnProperty.call(c, s) && (t[s] = c[s]);
        d && d(e);
        while (m.length) m.shift()();
        return i.push.apply(i, l || []), a()
    }

    function a() {
        for (var t, e = 0; e < i.length; e++) {
            for (var a = i[e], s = !0, n = 1; n < a.length; n++) {
                var c = a[n];
                0 !== o[c] && (s = !1)
            }
            s && (i.splice(e--, 1), t = r(r.s = a[0]))
        }
        return t
    }
    var s = {},
        o = { app: 0 },
        i = [];

    function r(e) { if (s[e]) return s[e].exports; var a = s[e] = { i: e, l: !1, exports: {} }; return t[e].call(a.exports, a, a.exports, r), a.l = !0, a.exports }
    r.m = t, r.c = s, r.d = function(t, e, a) { r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a }) }, r.r = function(t) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, r.t = function(t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var a = Object.create(null);
        if (r.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
            for (var s in t) r.d(a, s, function(e) { return t[e] }.bind(null, s));
        return a
    }, r.n = function(t) { var e = t && t.__esModule ? function() { return t["default"] } : function() { return t }; return r.d(e, "a", e), e }, r.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, r.p = "/";
    var n = window["webpackJsonp"] = window["webpackJsonp"] || [],
        c = n.push.bind(n);
    n.push = e, n = n.slice();
    for (var l = 0; l < n.length; l++) e(n[l]);
    var d = c;
    i.push([0, "chunk-vendors"]), a()
})({
    0: function(t, e, a) { t.exports = a("56d7") },
    "034f": function(t, e, a) {
        "use strict";
        var s = a("85ec"),
            o = a.n(s);
        o.a
    },
    "07a7": function(t, e, a) {
        "use strict";
        var s = a("6dfe"),
            o = a.n(s);
        o.a
    },
    "26ac": function(t, e, a) {
        "use strict";
        var s = a("2de9"),
            o = a.n(s);
        o.a
    },
    "2de9": function(t, e, a) {},
    4678: function(t, e, a) {
        var s = { "./af": "2bfb", "./af.js": "2bfb", "./ar": "8e73", "./ar-dz": "a356", "./ar-dz.js": "a356", "./ar-kw": "423e", "./ar-kw.js": "423e", "./ar-ly": "1cfd", "./ar-ly.js": "1cfd", "./ar-ma": "0a84", "./ar-ma.js": "0a84", "./ar-sa": "8230", "./ar-sa.js": "8230", "./ar-tn": "6d83", "./ar-tn.js": "6d83", "./ar.js": "8e73", "./az": "485c", "./az.js": "485c", "./be": "1fc1", "./be.js": "1fc1", "./bg": "84aa", "./bg.js": "84aa", "./bm": "a7fa", "./bm.js": "a7fa", "./bn": "9043", "./bn.js": "9043", "./bo": "d26a", "./bo.js": "d26a", "./br": "6887", "./br.js": "6887", "./bs": "2554", "./bs.js": "2554", "./ca": "d716", "./ca.js": "d716", "./cs": "3c0d", "./cs.js": "3c0d", "./cv": "03ec", "./cv.js": "03ec", "./cy": "9797", "./cy.js": "9797", "./da": "0f14", "./da.js": "0f14", "./de": "b469", "./de-at": "b3eb", "./de-at.js": "b3eb", "./de-ch": "bb71", "./de-ch.js": "bb71", "./de.js": "b469", "./dv": "598a", "./dv.js": "598a", "./el": "8d47", "./el.js": "8d47", "./en-au": "0e6b", "./en-au.js": "0e6b", "./en-ca": "3886", "./en-ca.js": "3886", "./en-gb": "39a6", "./en-gb.js": "39a6", "./en-ie": "e1d3", "./en-ie.js": "e1d3", "./en-il": "7333", "./en-il.js": "7333", "./en-in": "ec2e", "./en-in.js": "ec2e", "./en-nz": "6f50", "./en-nz.js": "6f50", "./en-sg": "b7e9", "./en-sg.js": "b7e9", "./eo": "65db", "./eo.js": "65db", "./es": "898b", "./es-do": "0a3c", "./es-do.js": "0a3c", "./es-us": "55c9", "./es-us.js": "55c9", "./es.js": "898b", "./et": "ec18", "./et.js": "ec18", "./eu": "0ff2", "./eu.js": "0ff2", "./fa": "8df4", "./fa.js": "8df4", "./fi": "81e9", "./fi.js": "81e9", "./fil": "d69a", "./fil.js": "d69a", "./fo": "0721", "./fo.js": "0721", "./fr": "9f26", "./fr-ca": "d9f8", "./fr-ca.js": "d9f8", "./fr-ch": "0e49", "./fr-ch.js": "0e49", "./fr.js": "9f26", "./fy": "7118", "./fy.js": "7118", "./ga": "5120", "./ga.js": "5120", "./gd": "f6b4", "./gd.js": "f6b4", "./gl": "8840", "./gl.js": "8840", "./gom-deva": "aaf2", "./gom-deva.js": "aaf2", "./gom-latn": "0caa", "./gom-latn.js": "0caa", "./gu": "e0c5", "./gu.js": "e0c5", "./he": "c7aa", "./he.js": "c7aa", "./hi": "dc4d", "./hi.js": "dc4d", "./hr": "4ba9", "./hr.js": "4ba9", "./hu": "5b14", "./hu.js": "5b14", "./hy-am": "d6b6", "./hy-am.js": "d6b6", "./id": "5038", "./id.js": "5038", "./is": "0558", "./is.js": "0558", "./it": "6e98", "./it-ch": "6f12", "./it-ch.js": "6f12", "./it.js": "6e98", "./ja": "079e", "./ja.js": "079e", "./jv": "b540", "./jv.js": "b540", "./ka": "201b", "./ka.js": "201b", "./kk": "6d79", "./kk.js": "6d79", "./km": "e81d", "./km.js": "e81d", "./kn": "3e92", "./kn.js": "3e92", "./ko": "22f8", "./ko.js": "22f8", "./ku": "2421", "./ku.js": "2421", "./ky": "9609", "./ky.js": "9609", "./lb": "440c", "./lb.js": "440c", "./lo": "b29d", "./lo.js": "b29d", "./lt": "26f9", "./lt.js": "26f9", "./lv": "b97c", "./lv.js": "b97c", "./me": "293c", "./me.js": "293c", "./mi": "688b", "./mi.js": "688b", "./mk": "6909", "./mk.js": "6909", "./ml": "02fb", "./ml.js": "02fb", "./mn": "958b", "./mn.js": "958b", "./mr": "39bd", "./mr.js": "39bd", "./ms": "ebe4", "./ms-my": "6403", "./ms-my.js": "6403", "./ms.js": "ebe4", "./mt": "1b45", "./mt.js": "1b45", "./my": "8689", "./my.js": "8689", "./nb": "6ce3", "./nb.js": "6ce3", "./ne": "3a39", "./ne.js": "3a39", "./nl": "facd", "./nl-be": "db29", "./nl-be.js": "db29", "./nl.js": "facd", "./nn": "b84c", "./nn.js": "b84c", "./oc-lnc": "167b", "./oc-lnc.js": "167b", "./pa-in": "f3ff", "./pa-in.js": "f3ff", "./pl": "8d57", "./pl.js": "8d57", "./pt": "f260", "./pt-br": "d2d4", "./pt-br.js": "d2d4", "./pt.js": "f260", "./ro": "972c", "./ro.js": "972c", "./ru": "957c", "./ru.js": "957c", "./sd": "6784", "./sd.js": "6784", "./se": "ffff", "./se.js": "ffff", "./si": "eda5", "./si.js": "eda5", "./sk": "7be6", "./sk.js": "7be6", "./sl": "8155", "./sl.js": "8155", "./sq": "c8f3", "./sq.js": "c8f3", "./sr": "cf1e", "./sr-cyrl": "13e9", "./sr-cyrl.js": "13e9", "./sr.js": "cf1e", "./ss": "52bd", "./ss.js": "52bd", "./sv": "5fbd", "./sv.js": "5fbd", "./sw": "74dc", "./sw.js": "74dc", "./ta": "3de5", "./ta.js": "3de5", "./te": "5cbb", "./te.js": "5cbb", "./tet": "576c", "./tet.js": "576c", "./tg": "3b1b", "./tg.js": "3b1b", "./th": "10e8", "./th.js": "10e8", "./tk": "5aff", "./tk.js": "5aff", "./tl-ph": "0f38", "./tl-ph.js": "0f38", "./tlh": "cf75", "./tlh.js": "cf75", "./tr": "0e81", "./tr.js": "0e81", "./tzl": "cf51", "./tzl.js": "cf51", "./tzm": "c109", "./tzm-latn": "b53d", "./tzm-latn.js": "b53d", "./tzm.js": "c109", "./ug-cn": "6117", "./ug-cn.js": "6117", "./uk": "ada2", "./uk.js": "ada2", "./ur": "5294", "./ur.js": "5294", "./uz": "2e8c", "./uz-latn": "010e", "./uz-latn.js": "010e", "./uz.js": "2e8c", "./vi": "2921", "./vi.js": "2921", "./x-pseudo": "fd7e", "./x-pseudo.js": "fd7e", "./yo": "7f33", "./yo.js": "7f33", "./zh-cn": "5c3a", "./zh-cn.js": "5c3a", "./zh-hk": "49ab", "./zh-hk.js": "49ab", "./zh-mo": "3a6c", "./zh-mo.js": "3a6c", "./zh-tw": "90ea", "./zh-tw.js": "90ea" };

        function o(t) { var e = i(t); return a(e) }

        function i(t) { if (!a.o(s, t)) { var e = new Error("Cannot find module '" + t + "'"); throw e.code = "MODULE_NOT_FOUND", e } return s[t] }
        o.keys = function() { return Object.keys(s) }, o.resolve = i, t.exports = o, o.id = "4678"
    },
    "56d7": function(t, e, a) {
        "use strict";
        a.r(e);
        a("e260"), a("e6cf"), a("cca6"), a("a79d");
        var s = a("2b0e"),
            o = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", { attrs: { id: "app" } }, [a("nav", { staticClass: "navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow" }, [t._m(0), a("router-link", { staticClass: "navbar-brand py-2 font-weight-bold ml-auto px-3", attrs: { to: "/" } }, [t._v("Valhalla App")])], 1), a("div", { staticClass: "container-fluid" }, [a("div", { staticClass: "row" }, [a("nav", { staticClass: "col-md-3 col-lg-2 d-md-block bg-light sidebar collapse", attrs: { id: "sidebarMenu" } }, [a("div", { staticClass: "sidebar-sticky pt-3" }, [a("router-link", { staticClass: "h5 d-flex justify-content-between align-items-center text-dark px-3 my-2 mb-1", attrs: { to: "/" } }, [a("span", [a("i", { staticClass: "fas fa-home" }), t._v(" Inicio")])]), t._m(1), a("ul", { staticClass: "nav flex-column mb-2" }, [a("li", { staticClass: "nav-item" }, [a("router-link", { staticClass: "nav-link", attrs: { to: "/producto" } }, [a("span", { attrs: { "data-feather": "file-text" } }), t._v(" Productos ")])], 1), a("li", { staticClass: "nav-item" }, [a("router-link", { staticClass: "nav-link", attrs: { to: "/pedido" } }, [a("span", { attrs: { "data-feather": "file-text" } }), t._v(" Pedidos ")])], 1)]), t._m(2), a("ul", { staticClass: "nav flex-column mb-2" }, [a("li", { staticClass: "nav-item" }, [a("router-link", { staticClass: "nav-link", attrs: { to: "/" } }, [a("span", { attrs: { "data-feather": "file-text" } }), t._v(" Ventas ")])], 1), a("li", { staticClass: "nav-item" }, [a("router-link", { staticClass: "nav-link", attrs: { to: "/" } }, [a("span", { attrs: { "data-feather": "file-text" } }), t._v(" Clientes ")])], 1)])], 1)]), a("main", { staticClass: "col-md-9 ml-sm-auto col-lg-10 px-md-4", attrs: { role: "main" } }, [a("router-view")], 1)])])])
            },
            i = [function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("button", { staticClass: "navbar-toggler d-lg-none", attrs: { type: "button", "data-toggle": "collapse", "data-target": "#sidebarMenu", "aria-controls": "navbarSupportedContent", "aria-expanded": "false", "aria-label": "Toggle navigation" } }, [a("span", { staticClass: "navbar-toggler-icon" })])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("h6", { staticClass: "sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted" }, [a("span", [t._v("Herramientas")]), a("a", { staticClass: "d-flex align-items-center text-muted", attrs: { href: "#", "aria-label": "Add a new report" } }, [a("span", { attrs: { "data-feather": "plus-circle" } })])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("h6", { staticClass: "sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted" }, [a("span", [t._v("Datos del negocio")]), a("a", { staticClass: "d-flex align-items-center text-muted", attrs: { href: "#", "aria-label": "Add a new report" } }, [a("span", { attrs: { "data-feather": "plus-circle" } })])])
            }],
            r = { data: function() { return {} } },
            n = r,
            c = (a("034f"), a("2877")),
            l = Object(c["a"])(n, o, i, !1, null, null, null),
            d = l.exports,
            u = a("8c4f"),
            m = function() {
                var t = this,
                    e = t.$createElement;
                t._self._c;
                return t._m(0)
            },
            v = [function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", { staticClass: "container" }, [a("div", { staticClass: "ct-chart" }, [a("canvas", { attrs: { id: "myChart" } })])])
            }],
            f = (a("d81d"), a("bc3a")),
            p = a.n(f),
            b = a("30ef"),
            h = a.n(b),
            g = {
                data: function() { return { valores: [], meses: [], totales: [] } },
                methods: {
                    listar: function() {
                        var t = this;
                        p.a.get("pedido/grafico12Meses").then((function(e) { t.valores = e.data, t.graficar() })).catch((function(t) { console.log(t) }))
                    },
                    graficar: function() {
                        var t = this,
                            e = "";
                        t.valores.map((function(a) {
                            switch (parseInt(a._id.mes)) {
                                case 1:
                                    e = "Enero";
                                    break;
                                case 2:
                                    e = "Febrero";
                                    break;
                                case 3:
                                    e = "Marzo";
                                    break;
                                case 4:
                                    e = "Abril";
                                    break;
                                case 5:
                                    e = "Mayo";
                                    break;
                                case 6:
                                    e = "Junio";
                                    break;
                                case 7:
                                    e = "Julio";
                                    break;
                                case 8:
                                    e = "Agosto";
                                    break;
                                case 9:
                                    e = "Septiembre";
                                    break;
                                case 10:
                                    e = "Octubre";
                                    break;
                                case 11:
                                    e = "Noviembre";
                                    break;
                                case 12:
                                    e = "Diciembre";
                                    break;
                                default:
                                    e = "error"
                            }
                            t.meses.push(e + " - " + a._id.year), t.totales.push(a.total)
                        }));
                        var a = document.getElementById("myChart");
                        new h.a(a, { type: "bar", data: { labels: t.meses, datasets: [{ label: "Venta de los últimos 6 meses", data: t.totales, backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(255, 159, 64, 0.2)"], borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"], borderWidth: 1 }] }, options: { scales: { yAxes: [{ ticks: { beginAtZero: !0 } }] } } })
                    }
                },
                mounted: function() { this.listar() }
            },
            _ = g,
            j = Object(c["a"])(_, m, v, !1, null, null, null),
            C = j.exports,
            x = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", [a("button", { staticClass: "btn btn-light mt-3 border border-dark d-flex ml-auto", on: { click: function(e) { return t.mostrarModal() } } }, [t._v("Nuevo")]), a("div", { staticClass: "table-responsive mt-3" }, [a("table", { staticClass: "table" }, [t._m(0), a("tbody", t._l(t.productos, (function(e) { return a("tr", { key: e._id }, [a("th", { attrs: { scope: "row" } }, [a("span", { staticClass: "d-inline", on: { click: function(a) { return t.remove(e) } } }, [a("i", { staticClass: "far fa-trash-alt" })]), a("span", { staticClass: "d-inline mx-3", on: { click: function(a) { return t.editItem(e) } } }, [a("i", { staticClass: "far fa-edit" })]), e.estado ? a("span", { staticClass: "d-inline", on: { click: function(a) { return t.activarDesactivar(e) } } }, [a("i", { staticClass: "fas fa-ban" })]) : a("span", { staticClass: "d-inline", on: { click: function(a) { return t.activarDesactivar(e) } } }, [a("i", { staticClass: "fas fa-check" })])]), a("td", [t._v(t._s(e.nombre))]), a("td", [t._v(t._s(e.descripcion))]), a("td", [t._v("$ " + t._s(e.precio_venta))]), a("td", [t._v(t._s(e.codigo))])]) })), 0)])]), t.modalNuevo ? a("div", [a("transition", { attrs: { name: "modal" } }, [a("div", { staticClass: "modal-mask" }, [a("div", { staticClass: "modal-wrapper" }, [a("div", { staticClass: "modal-dialog", attrs: { role: "document" } }, [a("div", { staticClass: "modal-content" }, [a("div", { staticClass: "modal-header" }, [a("h5", { staticClass: "modal-title" }, [t._v(t._s(t.formTitle))])]), a("div", { staticClass: "modal-body" }, [a("div", { staticClass: "container-fluid" }, [a("div", { staticClass: "row" }, [a("div", { staticClass: "mb-2 col-12 col-sm-12 col-md-6 col-lg-6" }, [a("label", { staticClass: "mr-auto" }, [t._v("Nombre")]), a("input", { directives: [{ name: "model", rawName: "v-model", value: t.nombre, expression: "nombre" }], staticClass: "form-control", attrs: { type: "text" }, domProps: { value: t.nombre }, on: { input: function(e) { e.target.composing || (t.nombre = e.target.value) } } })]), a("div", { staticClass: "mb-2 col-12 col-sm-12 col-md-6 col-lg-6" }, [a("label", [t._v("Precio")]), a("input", { directives: [{ name: "model", rawName: "v-model", value: t.precio_venta, expression: "precio_venta" }], staticClass: "form-control", attrs: { type: "number" }, domProps: { value: t.precio_venta }, on: { input: function(e) { e.target.composing || (t.precio_venta = e.target.value) } } })]), a("div", { staticClass: "mb-2 col-12 col-sm-12 col-md-12 col-lg-12" }, [a("label", [t._v("Descripción")]), a("input", { directives: [{ name: "model", rawName: "v-model", value: t.descripcion, expression: "descripcion" }], staticClass: "form-control", attrs: { type: "text" }, domProps: { value: t.descripcion }, on: { input: function(e) { e.target.composing || (t.descripcion = e.target.value) } } })]), a("div", { staticClass: "mb-2 col-12 col-sm-12 col-md-6 col-lg-6" }, [a("label", { staticClass: "mr-auto" }, [t._v("Código")]), a("input", { directives: [{ name: "model", rawName: "v-model", value: t.codigo, expression: "codigo" }], staticClass: "form-control", attrs: { type: "text" }, domProps: { value: t.codigo }, on: { input: function(e) { e.target.composing || (t.codigo = e.target.value) } } })]), a("div", { staticClass: "mb-2 col-12 col-sm-12 col-md-6 col-lg-6" }, [a("label", [t._v("Orden")]), a("input", { directives: [{ name: "model", rawName: "v-model", value: t.ordenNum, expression: "ordenNum" }], staticClass: "form-control", attrs: { type: "number" }, domProps: { value: t.ordenNum }, on: { input: function(e) { e.target.composing || (t.ordenNum = e.target.value) } } })]), a("div", { staticClass: "col-12 col-sm-12 col-md-12 col-lg-12" }, t._l(t.validaMensaje, (function(e) { return a("div", { key: e, staticClass: "text-danger", domProps: { textContent: t._s(e) } }) })), 0)])])]), a("div", { staticClass: "modal-footer" }, [a("button", { staticClass: "btn btn-secondary", attrs: { type: "button" }, on: { click: function(e) { return t.cerrarModal() } } }, [t._v("Cerrar")]), a("button", { staticClass: "btn btn-success", attrs: { type: "button" }, on: { click: function(e) { return t.guardar() } } }, [t._v(t._s(t.buttonSaveEdit))])])])])])])])], 1) : t._e()])
            },
            y = [function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("thead", { staticClass: "thead-dark" }, [a("tr", [a("th", { attrs: { scope: "col" } }, [t._v("Opciones")]), a("th", { attrs: { scope: "col" } }, [t._v("Nombre")]), a("th", { attrs: { scope: "col" } }, [t._v("Descripción")]), a("th", { attrs: { scope: "col" } }, [t._v("Precio")]), a("th", { attrs: { scope: "col" } }, [t._v("Código")])])])
            }],
            k = {
                data: function() { return { productos: [], modalNuevo: 0, _id: "", nombre: "", precio_venta: "", descripcion: "", codigo: "", ordenNum: "", valida: 0, validaMensaje: [], editedIndex: -1 } },
                computed: { formTitle: function() { return -1 === this.editedIndex ? "Nuevo Producto" : "Editar Producto" }, buttonSaveEdit: function() { return -1 === this.editedIndex ? "Guardar" : "Editar" } },
                created: function() {
                    var t = this;
                    this.listar(), this.interval = setInterval((function() { return t.listar() }), 1e3)
                },
                methods: {
                    listar: function() {
                        var t = this;
                        p.a.get("producto/list").then((function(e) { t.productos = e.data })).catch((function(t) { console.log(t) }))
                    },
                    mostrarModal: function() { this.modalNuevo = 1 },
                    cerrarModal: function() { this.modalNuevo = 0, this.limpiar() },
                    limpiar: function() { this._id = "", this.nombre = "", this.precio_venta = 0, this.descripcion = "", this.codigo = "", this.ordenNum = 0, this.editedIndex = -1 },
                    validar: function() { return this.valida = 0, this.validaMensaje = [], (this.nombre.length < 1 || this.nombre.length > 50) && this.validaMensaje.push("El nombre debe tener entre 1 a 50 caracteres."), (this.precio_venta < 0 || "" == this.precio_venta) && this.validaMensaje.push("El precio debe ser un valor mayor a 0."), this.descripcion.length > 255 && this.validaMensaje.push("La descripción no debe tener más de 255 caracteres."), (this.nombre.length < 1 || this.nombre.length > 64) && this.validaMensaje.push("El código debe tener entre 1 a 64 caracteres."), (this.ordenNum < 0 || "" == this.ordenNum) && this.validaMensaje.push("El número de orden debe ser un valor mayor a 0."), this.validaMensaje.length && (this.valida = 1), this.valida },
                    guardar: function() {
                        var t = this;
                        this.validar() || (this.editedIndex > -1 ? p.a.put("producto/update", { _id: this._id, nombre: this.nombre, precio_venta: this.precio_venta, descripcion: this.descripcion, codigo: this.codigo, ordenNum: this.ordenNum }).then((function(e) { t.limpiar(), t.cerrarModal(), t.listar() })).catch((function(t) { console.log(t) })) : p.a.post("producto/add", { nombre: this.nombre, precio_venta: this.precio_venta, descripcion: this.descripcion, codigo: this.codigo, ordenNum: this.ordenNum }).then((function(e) { t.limpiar(), t.cerrarModal(), t.listar() })).catch((function(t) { console.log(t) })))
                    },
                    editItem: function(t) { this._id = t._id, this.nombre = t.nombre, this.precio_venta = t.precio_venta, this.descripcion = t.descripcion, this.codigo = t.codigo, this.ordenNum = t.ordenNum, this.modalNuevo = 1, this.editedIndex = 1 },
                    remove: function(t) {
                        var e = this;
                        p.a.delete("producto/remove?_id=" + t._id).then((function(t) { e.listar() })).catch((function(t) { console.log(t) }))
                    },
                    activarDesactivar: function(t) {
                        var e = this;
                        t.estado ? p.a.put("producto/deactivate", { _id: t._id }).then((function(t) { e.listar() })).catch((function(t) { console.log(t) })) : 0 == t.estado && p.a.put("producto/activate", { _id: t._id }).then((function(t) { e.listar() })).catch((function(t) { console.log(t) }))
                    }
                }
            },
            w = k,
            N = (a("07a7"), Object(c["a"])(w, x, y, !1, null, null, null)),
            M = N.exports,
            P = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", [0 == t.addForm ? a("div", { staticClass: "my-3" }, [a("div", { staticClass: "row" }, [a("div", { staticClass: "col-sm-3 col-md-3 col-lg-3" }, [a("input", { directives: [{ name: "model", rawName: "v-model", value: t.fechaFiltro, expression: "fechaFiltro" }], staticClass: "form-control mr-auto text-uppercase", attrs: { type: "date" }, domProps: { value: t.fechaFiltro }, on: { input: function(e) { e.target.composing || (t.fechaFiltro = e.target.value) } } })]), a("div", { staticClass: "col-sm-6 col-md-6 col-lg-6" }, [a("h4", { staticClass: "text-center font-weight-bold" }, [t._v("Contador de Burgers: " + t._s(t.totalBurgers))])]), a("div", { staticClass: "col-sm-3 col-md-3 col-lg-3" }, [a("button", { staticClass: "btn btn-light border border-dark d-flex ml-auto", on: { click: function(e) { return t.mostrarForm() } } }, [t._v("Nuevo")])])])]) : t._e(), 0 == t.addForm ? a("div", { staticClass: "row justify-content-center" }, t._l(t.fechaPedidos, (function(e) { return a("div", { key: e._id, staticClass: "col-12 col-sm-12 col-md-6 col-lg-6" }, [a("div", { staticClass: "card mb-3 rounded shadow", class: { "border-danger": !e.estado, "border-success": e.estado }, staticStyle: { "max-width": "540px" } }, [a("div", { staticClass: "row row-cols-2" }, [a("div", { staticClass: "col my-auto pt-4 justify-content-left" }, [a("h6", { staticClass: "pl-3 text-left" }, [t._v("Nombre: "), a("span", { class: { "text-danger": !e.estado, "text-success": e.estado } }, [t._v(t._s(e.nombre))])]), a("h6", { staticClass: "pl-3 text-left" }, [t._v("Dirección: "), a("span", { class: { "text-danger": !e.estado, "text-success": e.estado } }, [t._v(t._s(e.direccion))])]), a("h6", { staticClass: "pl-3 text-left" }, [t._v("Hora de salida: "), a("span", { class: { "text-danger": !e.estado, "text-success": e.estado } }, [t._v(t._s(e.hora))])]), a("h6", { staticClass: "pl-3 text-left" }, [t._v("Notas: "), a("span", { class: { "text-danger": !e.estado, "text-success": e.estado } }, [t._v(t._s(e.notas))])]), a("h6", { staticClass: "pl-3 text-left" }, [t._v("Envío: "), a("span", { class: { "text-danger": !e.estado, "text-success": e.estado } }, [t._v(t._s(e.envio))])])]), a("div", { staticClass: "col pt-4 my-auto" }, [a("div", { staticClass: "card-body" }, [a("ul", { staticClass: "list-group list-group-flush" }, [t._l(e.detalles, (function(s) { return a("li", { key: s._id, staticClass: "text-left px-0 list-group-item" }, [a("span", { staticClass: "py-0", class: { "text-danger": !e.estado, "text-success": e.estado } }, [t._v(t._s(s.cantidad))]), a("span", { staticClass: "py-0" }, [t._v(" - " + t._s(s.producto))]), a("br"), a("span", { staticClass: "py-0 text-black-50" }, [a("small", [t._v(t._s(s.nota))])])]) })), a("li", { staticClass: "list-group-item h3 text-center", class: { "text-danger": !e.estado, "text-success": e.estado } }, [t._v("$" + t._s(e.total))])], 2)])])]), a("div", { staticClass: "d-flex justify-content-center" }, [a("button", { staticClass: "ml-2 mb-2", class: { "btn btn-secondary": !e.estado, "btn btn-success": e.estado }, on: { click: function(a) { return t.preparado(e) } } }, [t._v("Preparado")]), a("button", { staticClass: "btn btn-primary ml-2 mb-2", on: { click: function(a) { return t.editItem(e) } } }, [t._v("Editar")]), a("button", { staticClass: "btn btn-danger ml-2 mb-2", on: { click: function(a) { return t.abrirDel(e) } } }, [t._v("Eliminar")])])])]) })), 0) : t._e(), t.addForm ? a("div", { staticClass: "mt-4 mb-3" }, [a("h4", { staticClass: "font-weight-bold mb-3" }, [t._v(t._s(t.formTitle))]), a("div", { staticClass: "container-fluid" }, [a("div", { staticClass: "row" }, [a("div", { staticClass: "mb-2 col-12 col-sm-12 col-md-4 col-lg-4" }, [a("label", { staticClass: "mr-auto" }, [t._v("Nombre")]), a("input", { directives: [{ name: "model", rawName: "v-model", value: t.nombre, expression: "nombre" }], staticClass: "form-control", attrs: { type: "text" }, domProps: { value: t.nombre }, on: { input: function(e) { e.target.composing || (t.nombre = e.target.value) } } })]), a("div", { staticClass: "mb-2 col-12 col-sm-12 col-md-4 col-lg-4" }, [a("label", { staticClass: "mr-auto" }, [t._v("Hora de entrega")]), a("input", { directives: [{ name: "model", rawName: "v-model", value: t.hora, expression: "hora" }], staticClass: "form-control", attrs: { type: "time" }, domProps: { value: t.hora }, on: { input: function(e) { e.target.composing || (t.hora = e.target.value) } } })]), a("div", { staticClass: "mb-2 col-12 col-sm-12 col-md-4 col-lg-4" }, [a("label", { staticClass: "mr-auto" }, [t._v("Envío")]), a("select", {
                    directives: [{ name: "model", rawName: "v-model", value: t.envio, expression: "envio" }],
                    staticClass: "form-control",
                    on: {
                        change: function(e) {
                            var a = Array.prototype.filter.call(e.target.options, (function(t) { return t.selected })).map((function(t) { var e = "_value" in t ? t._value : t.value; return e }));
                            t.envio = e.target.multiple ? a : a[0]
                        }
                    }
                }, [a("option", { attrs: { selected: "", disabled: "", value: "" } }, [t._v("Elegir")]), a("option", { attrs: { value: "Lucas" } }, [t._v("Lucas")]), a("option", { attrs: { value: "Iván" } }, [t._v("Iván")]), a("option", { attrs: { value: "Delivery" } }, [t._v("Delivery")]), a("option", { attrs: { value: "Busca" } }, [t._v("Busca")])])]), a("div", { staticClass: "mb-2 col-12 col-sm-12 col-md-6 col-lg-6" }, [a("label", [t._v("Dirección")]), a("input", { directives: [{ name: "model", rawName: "v-model", value: t.direccion, expression: "direccion" }], staticClass: "form-control", attrs: { type: "text" }, domProps: { value: t.direccion }, on: { input: function(e) { e.target.composing || (t.direccion = e.target.value) } } })]), a("div", { staticClass: "mb-2 col-12 col-sm-12 col-md-6 col-lg-6" }, [a("label", [t._v("Notas")]), a("input", { directives: [{ name: "model", rawName: "v-model", value: t.notas, expression: "notas" }], staticClass: "form-control", attrs: { type: "text" }, domProps: { value: t.notas }, on: { input: function(e) { e.target.composing || (t.notas = e.target.value) } } })]), a("div", { staticClass: "col-12 col-sm-12 col-md-12 col-lg-12" }, t._l(t.validaMensaje, (function(e) { return a("div", { key: e, staticClass: "text-danger", domProps: { textContent: t._s(e) } }) })), 0)]), a("div", { staticClass: "d-flex justify-content-center " }, [a("button", { staticClass: "btn btn-light border border-primary my-3", on: { click: function(e) { return t.addBurger() } } }, [t._v("Agregar Burger")])]), a("table", { staticClass: "table" }, [t._m(0), a("tbody", t._l(t.detalles, (function(e) { return a("tr", { key: e._id }, [a("th", { attrs: { scope: "row" } }, [a("span", { staticClass: "d-inline", on: { click: function(a) { return t.removeBurger(t.detalles, e) } } }, [a("i", { staticClass: "far fa-trash-alt" })])]), a("td", [t._v(t._s(e.producto))]), a("td", [a("input", { directives: [{ name: "model", rawName: "v-model", value: e.nota, expression: "det.nota" }], staticClass: "form-control", attrs: { type: "text" }, domProps: { value: e.nota }, on: { input: function(a) { a.target.composing || t.$set(e, "nota", a.target.value) } } })]), a("td", [a("input", { directives: [{ name: "model", rawName: "v-model", value: e.cantidad, expression: "det.cantidad" }], staticClass: "form-control", attrs: { type: "number" }, domProps: { value: e.cantidad }, on: { input: function(a) { a.target.composing || t.$set(e, "cantidad", a.target.value) } } })]), a("td", [a("input", { directives: [{ name: "model", rawName: "v-model", value: e.precio, expression: "det.precio" }], staticClass: "form-control", attrs: { type: "number" }, domProps: { value: e.precio }, on: { input: function(a) { a.target.composing || t.$set(e, "precio", a.target.value) } } })]), a("td", [t._v("$ " + t._s(e.cantidad * e.precio))])]) })), 0)]), a("p", { staticClass: "text-right" }, [a("span", { staticClass: "font-weight-bold" }, [t._v(" Precio Total: ")]), t._v(" $ " + t._s(t.total = t.calcularTotal))])]), a("button", { staticClass: "mx-2 btn btn-secondary", attrs: { type: "button" }, on: { click: function(e) { return t.cerrarForm() } } }, [t._v("Cerrar")]), a("button", { staticClass: "mx-2 btn btn-success", attrs: { type: "button" }, on: { click: function(e) { return t.guardar() } } }, [t._v(t._s(t.buttonSaveEdit))])]) : t._e(), t.burgerModal ? a("div", [a("transition", { attrs: { name: "modal" } }, [a("div", { staticClass: "modal-mask" }, [a("div", { staticClass: "modal-wrapper" }, [a("div", { staticClass: "modal-dialog", attrs: { role: "document" } }, [a("div", { staticClass: "modal-content" }, [a("div", { staticClass: "modal-header" }, [a("h5", { staticClass: "modal-title" }, [t._v("Seleccioná un producto")])]), a("div", { staticClass: "modal-body" }, [a("div", { staticClass: "container-fluid" }, [a("div", { staticClass: "row" }, [a("div", { staticClass: "mb-2 col-12 col-sm-12 col-md-12 col-lg-12" }, [a("label", { staticClass: "mr-auto text-left" }, [t._v("Buscar")]), a("input", { directives: [{ name: "model", rawName: "v-model", value: t.texto, expression: "texto" }], staticClass: "form-control", attrs: { type: "text" }, domProps: { value: t.texto }, on: { keyup: function(e) { return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.listarBurgers() }, input: function(e) { e.target.composing || (t.texto = e.target.value) } } })])]), a("div", { staticClass: "table-responsive mt-3" }, [a("table", { staticClass: "table" }, [a("thead", { staticClass: "thead-dark" }, [a("tr", [a("th", { attrs: { scope: "col" } }, [t._v("Agregar")]), a("th", { attrs: { scope: "col" } }, [t._v("Nombre")]), a("th", { attrs: { scope: "col" } }, [t._v("Precio")])])]), a("tbody", t._l(t.productos, (function(e) { return a("tr", { key: e._id }, [a("th", { attrs: { scope: "row" } }, [a("span", { staticClass: "d-inline my-auto", on: { click: function(a) { return t.agregarDetalle(e) } } }, [a("i", { staticClass: "fas fa-plus" })])]), a("td", [t._v(t._s(e.nombre))]), a("td", [t._v("$ " + t._s(e.precio_venta))])]) })), 0)])])])]), a("div", { staticClass: "modal-footer" }, [a("button", { staticClass: "btn btn-secondary", attrs: { type: "button" }, on: { click: function(e) { return t.cerrarBurger() } } }, [t._v("Cerrar")])])])])])])])], 1) : t._e(), t.delModal ? a("div", [a("transition", { attrs: { name: "modal" } }, [a("div", { staticClass: "modal-mask" }, [a("div", { staticClass: "modal-wrapper" }, [a("div", { staticClass: "modal-dialog", attrs: { role: "document" } }, [a("div", { staticClass: "modal-content" }, [a("div", { staticClass: "modal-header" }, [a("h5", { staticClass: "modal-title" }, [t._v("Eliminar Pedido")])]), a("div", { staticClass: "modal-body" }, [a("h6", [t._v("Seguro seguro segurísimo que querés eliminar el pedido de " + t._s(t.delNombre) + "?")])]), a("div", { staticClass: "modal-footer" }, [a("button", { staticClass: "btn btn-secondary", attrs: { type: "button" }, on: { click: function(e) { return t.cerrarDel() } } }, [t._v("Cerrar")]), a("button", { staticClass: "btn btn-danger", attrs: { type: "button" }, on: { click: function(e) { return t.remove() } } }, [t._v("Elminar")])])])])])])])], 1) : t._e()])
            },
            E = [function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("thead", { staticClass: "thead-dark" }, [a("tr", [a("th", { attrs: { scope: "col" } }, [t._v("Borrar")]), a("th", { attrs: { scope: "col" } }, [t._v("Nombre")]), a("th", { attrs: { scope: "col" } }, [t._v("Nota")]), a("th", { attrs: { scope: "col" } }, [t._v("Cantidad")]), a("th", { attrs: { scope: "col" } }, [t._v("Precio")]), a("th", { attrs: { scope: "col" } }, [t._v("Subtotal")])])])
            }],
            I = (a("4de4"), a("caad"), a("c975"), a("a434"), a("2532"), {
                data: function() { return { pedidos: [], addForm: 0, burgerModal: 0, delModal: 0, _id: "", nombre: "", direccion: "", notas: "", envio: "", total: "", hora: "", detalles: [], productos: [], valida: 0, validaMensaje: [], texto: "", delNombre: "", delId: "", editedIndex: -1, fechaFiltro: "" } },
                computed: {
                    formTitle: function() { return -1 === this.editedIndex ? "Nuevo Pedido" : "Editar Pedido" },
                    buttonSaveEdit: function() { return -1 === this.editedIndex ? "Guardar" : "Editar" },
                    calcularTotal: function() { for (var t = 0, e = 0; e < this.detalles.length; e++) t += this.detalles[e].cantidad * this.detalles[e].precio; return t },
                    fechaPedidos: function() {
                        var t = this,
                            e = this.pedidos.filter((function(e) { return e.createdAt.includes(t.fechaFiltro) }));
                        return e
                    },
                    totalBurgers: function() {
                        for (var t = 0, e = 0; e < this.fechaPedidos.length; e++)
                            for (var a = this.fechaPedidos[e].detalles, s = 0; s < a.length; s++) t += parseFloat(a[s].cantidad);
                        return t
                    }
                },
                created: function() {
                    var t = this;
                    this.listar(), this.interval = setInterval((function() { return t.listar() }), 5e3)
                },
                methods: {
                    listar: function() {
                        var t = this;
                        p.a.get("pedido/list").then((function(e) { t.pedidos = e.data })).catch((function(t) { console.log(t) }))
                    },
                    mostrarForm: function() { this.addForm = 1 },
                    cerrarForm: function() { this.addForm = 0, this.limpiar() },
                    addBurger: function() { this.burgerModal = 1 },
                    cerrarBurger: function() { this.burgerModal = 0 },
                    abrirDel: function(t) { this.delModal = 1, this.delNombre = t.nombre, this.delId = t._id },
                    cerrarDel: function() { this.delModal = 0, this.delNombre = "", this.delId = "" },
                    limpiar: function() { this._id = "", this.nombre = "", this.direccion = "", this.notas = "", this.total = "", this.envio = "", this.hora = "", this.detalles = [], this.editedIndex = -1 },
                    validar: function() { return this.valida = 0, this.validaMensaje = [], (this.nombre.length < 1 || this.nombre.length > 50) && this.validaMensaje.push("El nombre debe tener entre 1 a 50 caracteres."), (this.direccion.length < 1 || this.nombre.length > 80) && this.validaMensaje.push("El nombre debe tener entre 1 a 80 caracteres."), this.hora || this.validaMensaje.push("Indicá un horario de entrega."), this.detalles || this.validaMensaje.push("Agregá productos al pedido."), this.validaMensaje.length && (this.valida = 1), this.valida },
                    guardar: function() {
                        var t = this,
                            e = new Date;
                        e.now, e.setHours(0, 0, 0, 0), this.validar() || (this.editedIndex > -1 ? p.a.put("pedido/update", { _id: this._id, nombre: this.nombre, direccion: this.direccion, notas: this.notas, total: this.total, envio: this.envio, hora: this.hora, createdAt: e, detalles: this.detalles }).then((function(e) { t.limpiar(), t.cerrarForm(), t.listar() })).catch((function(t) { console.log(t) })) : p.a.post("pedido/add", { nombre: this.nombre, direccion: this.direccion, notas: this.notas, total: this.total, envio: this.envio, hora: this.hora, createdAt: e, detalles: this.detalles }).then((function(e) { t.limpiar(), t.cerrarForm(), t.listar() })).catch((function(t) { console.log(t) })))
                    },
                    editItem: function(t) { this._id = t._id, this.nombre = t.nombre, this.direccion = t.direccion, this.notas = t.notas, this.total = t.total, this.envio = t.envio, this.hora = t.hora, this.detalles = t.detalles, this.addForm = 1, this.editedIndex = 1 },
                    remove: function() {
                        var t = this;
                        p.a.delete("pedido/remove?_id=" + t.delId).then((function(e) { t.listar(), t.delNombre = "", t.delId = "" })).catch((function(t) { console.log(t) })), this.delModal = 0
                    },
                    removeBurger: function(t, e) { var a = t.indexOf(e); - 1 != a && t.splice(a, 1) },
                    listarBurgers: function() {
                        var t = this;
                        p.a.get("producto/list?valor=" + this.texto).then((function(e) { t.productos = e.data })).catch((function(t) { console.log(t) }))
                    },
                    agregarDetalle: function(t) { this.detalles.push({ _id: t._id, producto: t.nombre, nota: t.nota, cantidad: 1, precio: t.precio_venta }) },
                    preparado: function(t) {
                        if (0 == t.estado) {
                            var e = this;
                            p.a.put("pedido/activate", { _id: t._id }).then((function(t) { e.listar() })).catch((function(t) { console.log(t) }))
                        } else if (1 == t.estado) {
                            var a = this;
                            p.a.put("pedido/deactivate", { _id: t._id }).then((function(t) { a.listar() })).catch((function(t) { console.log(t) }))
                        }
                    }
                }
            }),
            z = I,
            O = (a("26ac"), Object(c["a"])(z, P, E, !1, null, null, null)),
            F = O.exports;
        s["a"].use(u["a"]);
        var D = [{ path: "/", name: "Home", component: C }, { path: "/producto", name: "producto", component: M }, { path: "/pedido", name: "pedido", component: F }],
            $ = new u["a"]({ mode: "history", base: "/", routes: D }),
            B = $,
            S = a("2f62");
        s["a"].use(S["a"]);
        var A = new S["a"].Store({ state: {}, mutations: {}, actions: {}, modules: {} });
        a("ab8b"), a("15f5"), a("7051");
        s["a"].config.productionTip = !1, p.a.defaults.baseURL = "https://valhallaburgers.herokuapp.com/api/", new s["a"]({ router: B, store: A, render: function(t) { return t(d) } }).$mount("#app")
    },
    "6dfe": function(t, e, a) {},
    "85ec": function(t, e, a) {}
});
//# sourceMappingURL=app.8e49c837.js.map