(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/Companies.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/Companies.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ "./resources/js/src/store/store.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      newPopupActive: false,
      editPopupActive: false,
      companies: [],
      editCompany: {
        items: []
      },
      newCompany: {},
      itemsToAdd: [],
      items: []
    };
  },
  methods: {
    getItems: function getItems() {
      var _this = this;

      this.$http.get('/api/companyinformations', {
        headers: {
          'Authorization': 'Bearer ' + localStorage.token
        }
      }).then(function (response) {
        for (var i = 0; i < JSON.parse(response.data.items).length; i++) {
          _this.items.push({
            label: JSON.parse(response.data.items)[i].name,
            value: JSON.parse(response.data.items)[i].name
          });
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getCompanies: function getCompanies() {
      var _this2 = this;

      this.$http.get('/api/companies', {
        headers: {
          'Authorization': 'Bearer ' + localStorage.token
        }
      }).then(function (response) {
        _this2.companies = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getCompany: function getCompany(id) {
      var _this3 = this;

      this.editPopupActive = true;
      this.$http.get('/api/companies/' + id, {
        headers: {
          'Authorization': 'Bearer ' + localStorage.token
        }
      }).then(function (response) {
        _this3.editCompany = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    onFileChangeNew: function onFileChangeNew(event) {
      this.newCompany.picture = event.target.files[0];
    },
    onFileChangeEdit: function onFileChangeEdit(event) {
      this.editCompany.picture = event.target.files[0];
    },
    createCompany: function createCompany() {
      var _this4 = this;

      var formData = new FormData();
      formData.append('picture', this.newCompany.picture);
      formData.append('name', this.newCompany.name);
      formData.append('email', this.newCompany.email);
      formData.append('number', this.newCompany.number);
      formData.append('address', this.newCompany.address);
      formData.append('phone', this.newCompany.phone);
      formData.append('max_users', this.newCompany.max_users);
      this.$http.post('/api/companies', formData, {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.token,
          'Content-Type': 'multipart/form-data'
        }
      }).then(function (response) {
        _this4.companies.unshift(response.data);

        _this4.newPopupActive = false;

        _this4.$vs.notify({
          title: 'Success!',
          text: 'Company was added with success',
          color: 'success',
          position: 'top-right'
        });
      })["catch"](function (error) {
        //Show error notification
        Object.keys(error['response'].data.errors).forEach(function (key) {
          var message = String(error['response'].data.errors[key]).replace('["', '').replace('"]', ''); //Show error notification

          _this4.$vs.notify({
            title: 'Error!',
            text: message,
            color: 'danger',
            position: 'top-right'
          });
        });
      });
    },
    updateCompany: function updateCompany() {
      var _this5 = this;

      var formData = new FormData();
      formData.append('picture', this.editCompany.picture);
      formData.append('name', this.editCompany.name);
      formData.append('email', this.editCompany.email);
      formData.append('number', this.editCompany.number);
      formData.append('address', this.editCompany.address);
      formData.append('phone', this.editCompany.phone);
      formData.append('max_users', this.editCompany.max_users);
      formData.append('_method', "PUT");
      this.$http.post('/api/companies/' + this.editCompany.id, formData, {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.token,
          'Content-Type': 'multipart/form-data'
        }
      }).then(function (response) {
        for (var i = 0; i < _this5.companies.length; i++) {
          if (_this5.companies[i].id == response.data.id) {
            _this5.$set(_this5.companies, i, response.data);
          }
        }

        _this5.editPopupActive = false;

        _this5.$vs.notify({
          title: 'Success!',
          text: 'Company was edited with success',
          color: 'success',
          position: 'top-right'
        });
      })["catch"](function (error) {
        //Show error notification
        Object.keys(error['response'].data.errors).forEach(function (key) {
          var message = String(error['response'].data.errors[key]).replace('["', '').replace('"]', ''); //Show error notification

          _this5.$vs.notify({
            title: 'Error!',
            text: message,
            color: 'danger',
            position: 'top-right'
          });
        });
      });
    },
    deleteCompany: function deleteCompany(id) {
      var _this6 = this;

      this.$http["delete"]('/api/companies/' + id, {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.token
        }
      }).then(function (response) {
        for (var i = 0; i < _this6.companies.length; i++) {
          if (_this6.companies[i].id == id) {
            _this6.$delete(_this6.companies, i);
          }
        }

        _this6.editPopupActive = false;

        _this6.$vs.notify({
          title: 'Success!',
          text: 'Company was deleted with success',
          color: 'success',
          position: 'top-right'
        });
      })["catch"](function (error) {
        //Show error notification
        Object.keys(error['response'].data.errors).forEach(function (key) {
          var message = String(error['response'].data.errors[key]).replace('["', '').replace('"]', ''); //Show error notification

          _this6.$vs.notify({
            title: 'Error!',
            text: message,
            color: 'danger',
            position: 'top-right'
          });
        });
      });
    },
    createItem: function createItem() {
      var _this7 = this;

      var formData = new FormData();
      formData.append('name', this.itemsToAdd.name.label);
      formData.append('description', this.itemsToAdd.description);
      formData.append('quantity', this.itemsToAdd.quantity);
      formData.append('company_id', this.editCompany.id);
      this.$http.post('/api/items', formData, {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.token
        }
      }).then(function (response) {
        _this7.editCompany.items.push(response.data);

        _this7.$vs.notify({
          title: 'Success!',
          text: 'Item was added with success',
          color: 'success',
          position: 'top-right'
        });
      })["catch"](function (error) {
        //Show error notification
        Object.keys(error['response'].data.errors).forEach(function (key) {
          var message = String(error['response'].data.errors[key]).replace('["', '').replace('"]', ''); //Show error notification

          _this7.$vs.notify({
            title: 'Error!',
            text: message,
            color: 'danger',
            position: 'top-right'
          });
        });
      });
    },
    deleteItem: function deleteItem(id) {
      var _this8 = this;

      this.$http["delete"]('/api/items/' + id, {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.token
        }
      }).then(function (response) {
        for (var k = 0; k < _this8.editCompany.items.length; k++) {
          if (_this8.editCompany.items[k].id == id) {
            _this8.$delete(_this8.editCompany.items, k);
          }
        }

        _this8.$vs.notify({
          title: 'Success!',
          text: 'Item was deleted with success',
          color: 'success',
          position: 'top-right'
        });
      })["catch"](function (error) {
        //Show error notification
        Object.keys(error['response'].data.errors).forEach(function (key) {
          var message = String(error['response'].data.errors[key]).replace('["', '').replace('"]', ''); //Show error notification

          _this8.$vs.notify({
            title: 'Error!',
            text: message,
            color: 'danger',
            position: 'top-right'
          });
        });
      });
    }
  },
  mounted: function mounted() {
    this.getCompanies();
    this.getItems();
  },
  //Only admins and financial can access this route
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    if (_store_store__WEBPACK_IMPORTED_MODULE_0__["default"].state.AppActiveUser.rank != 3) {
      next('/login');
    } else {
      next();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/Companies.vue?vue&type=template&id=668e8f61&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/Companies.vue?vue&type=template&id=668e8f61& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "flex mb-4" },
    [
      _c(
        "vs-popup",
        {
          staticClass: "holamundo",
          attrs: { title: "Add a new company", active: _vm.newPopupActive },
          on: {
            "update:active": function($event) {
              _vm.newPopupActive = $event
            }
          }
        },
        [
          _c("div", { staticClass: "vx-row mb-6" }, [
            _c(
              "div",
              { staticClass: "vx-col w-full" },
              [
                _c("vs-input", {
                  staticClass: "w-full",
                  attrs: {
                    "icon-pack": "feather",
                    icon: "icon-truck",
                    "icon-no-border": "",
                    label: "Name"
                  },
                  model: {
                    value: _vm.newCompany.name,
                    callback: function($$v) {
                      _vm.$set(_vm.newCompany, "name", $$v)
                    },
                    expression: "newCompany.name"
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "vx-row mb-6" }, [
            _c(
              "div",
              { staticClass: "vx-col w-full" },
              [
                _c("vs-input", {
                  staticClass: "w-full",
                  attrs: {
                    type: "text ",
                    "icon-pack": "feather",
                    icon: "icon-mail",
                    "icon-no-border": "",
                    label: "Email"
                  },
                  model: {
                    value: _vm.newCompany.email,
                    callback: function($$v) {
                      _vm.$set(_vm.newCompany, "email", $$v)
                    },
                    expression: "newCompany.email"
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "vx-row mb-6" }, [
            _c(
              "div",
              { staticClass: "vx-col w-full" },
              [
                _c("vs-input", {
                  staticClass: "w-full",
                  attrs: {
                    type: "text ",
                    "icon-pack": "feather",
                    icon: "icon-phone",
                    "icon-no-border": "",
                    label: "Phone"
                  },
                  model: {
                    value: _vm.newCompany.phone,
                    callback: function($$v) {
                      _vm.$set(_vm.newCompany, "phone", $$v)
                    },
                    expression: "newCompany.phone"
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "vx-row mb-6" }, [
            _c(
              "div",
              { staticClass: "vx-col w-full" },
              [
                _c("vs-input", {
                  staticClass: "w-full",
                  attrs: {
                    type: "text ",
                    "icon-pack": "feather",
                    icon: "icon-link",
                    "icon-no-border": "",
                    label: "Tax Number"
                  },
                  model: {
                    value: _vm.newCompany.number,
                    callback: function($$v) {
                      _vm.$set(_vm.newCompany, "number", $$v)
                    },
                    expression: "newCompany.number"
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "vx-row mb-6" }, [
            _c(
              "div",
              { staticClass: "vx-col w-full" },
              [
                _c("vs-input", {
                  staticClass: "w-full",
                  attrs: {
                    type: "number ",
                    "icon-pack": "feather",
                    icon: "icon-hash",
                    "icon-no-border": "",
                    label: "Max Users"
                  },
                  model: {
                    value: _vm.newCompany.max_users,
                    callback: function($$v) {
                      _vm.$set(_vm.newCompany, "max_users", $$v)
                    },
                    expression: "newCompany.max_users "
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "vx-row mb-6" }, [
            _c(
              "div",
              { staticClass: "vx-col w-full" },
              [
                _c("vs-input", {
                  staticClass: "w-full",
                  attrs: {
                    type: "text ",
                    "icon-pack": "feather",
                    icon: "icon-map-pin",
                    "icon-no-border": "",
                    label: "Address"
                  },
                  model: {
                    value: _vm.newCompany.address,
                    callback: function($$v) {
                      _vm.$set(_vm.newCompany, "address", $$v)
                    },
                    expression: "newCompany.address"
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "vx-row mb-6" }, [
            _c(
              "div",
              { staticClass: "vx-col w-full" },
              [
                _c("vs-input", {
                  staticClass: "w-full",
                  attrs: {
                    type: "file",
                    "icon-pack": "feather",
                    icon: "icon-file",
                    "icon-no-border": "",
                    label: "Picture file"
                  },
                  on: { change: _vm.onFileChangeNew }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "vx-row mb-6" }, [
            _c(
              "div",
              {
                staticClass:
                  "vx-col w-full align-items-right justify-content-flex-end"
              },
              [
                _c(
                  "vs-button",
                  {
                    staticClass: "mr-3 mb-2",
                    attrs: { "icon-pack": "feather", icon: "icon-plus" },
                    on: {
                      click: function($event) {
                        return _vm.createCompany()
                      }
                    }
                  },
                  [_vm._v("Create")]
                )
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          staticClass: "holamundo",
          attrs: { title: "Edit company", active: _vm.editPopupActive },
          on: {
            "update:active": function($event) {
              _vm.editPopupActive = $event
            }
          }
        },
        [
          _c(
            "div",
            {},
            [
              _c(
                "vs-tabs",
                { attrs: { alignment: "center" } },
                [
                  _c(
                    "vs-tab",
                    {
                      attrs: {
                        label: "Details",
                        "icon-pack": "feather",
                        icon: "icon-edit"
                      }
                    },
                    [
                      _c("div", { staticClass: "vx-row mb-6" }, [
                        _c(
                          "div",
                          { staticClass: "vx-col w-full" },
                          [
                            _c("vs-input", {
                              staticClass: "w-full",
                              attrs: {
                                "icon-pack": "feather",
                                icon: "icon-truck",
                                "icon-no-border": "",
                                label: "Name"
                              },
                              model: {
                                value: _vm.editCompany.name,
                                callback: function($$v) {
                                  _vm.$set(_vm.editCompany, "name", $$v)
                                },
                                expression: "editCompany.name"
                              }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "vx-row mb-6" }, [
                        _c(
                          "div",
                          { staticClass: "vx-col w-full" },
                          [
                            _c("vs-input", {
                              staticClass: "w-full",
                              attrs: {
                                type: "text ",
                                "icon-pack": "feather",
                                icon: "icon-mail",
                                "icon-no-border": "",
                                label: "Email"
                              },
                              model: {
                                value: _vm.editCompany.email,
                                callback: function($$v) {
                                  _vm.$set(_vm.editCompany, "email", $$v)
                                },
                                expression: "editCompany.email"
                              }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "vx-row mb-6" }, [
                        _c(
                          "div",
                          { staticClass: "vx-col w-full" },
                          [
                            _c("vs-input", {
                              staticClass: "w-full",
                              attrs: {
                                "icon-pack": "feather",
                                icon: "icon-phone",
                                "icon-no-border": "",
                                label: "Phone"
                              },
                              model: {
                                value: _vm.editCompany.phone,
                                callback: function($$v) {
                                  _vm.$set(_vm.editCompany, "phone", $$v)
                                },
                                expression: "editCompany.phone"
                              }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "vx-row mb-6" }, [
                        _c(
                          "div",
                          { staticClass: "vx-col w-full" },
                          [
                            _c("vs-input", {
                              staticClass: "w-full",
                              attrs: {
                                type: "text ",
                                "icon-pack": "feather",
                                icon: "icon-link",
                                "icon-no-border": "",
                                label: "Tax Number"
                              },
                              model: {
                                value: _vm.editCompany.number,
                                callback: function($$v) {
                                  _vm.$set(_vm.editCompany, "number", $$v)
                                },
                                expression: "editCompany.number"
                              }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "vx-row mb-6" }, [
                        _c(
                          "div",
                          { staticClass: "vx-col w-full" },
                          [
                            _c("vs-input", {
                              staticClass: "w-full",
                              attrs: {
                                type: "number ",
                                "icon-pack": "feather",
                                icon: "icon-hash",
                                "icon-no-border": "",
                                label: "Max Users"
                              },
                              model: {
                                value: _vm.editCompany.max_users,
                                callback: function($$v) {
                                  _vm.$set(_vm.editCompany, "max_users", $$v)
                                },
                                expression: "editCompany.max_users "
                              }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "vx-row mb-6" }, [
                        _c(
                          "div",
                          { staticClass: "vx-col w-full" },
                          [
                            _c("vs-input", {
                              staticClass: "w-full",
                              attrs: {
                                type: "text ",
                                "icon-pack": "feather",
                                icon: "icon-map-pin",
                                "icon-no-border": "",
                                label: "Address"
                              },
                              model: {
                                value: _vm.editCompany.address,
                                callback: function($$v) {
                                  _vm.$set(_vm.editCompany, "address", $$v)
                                },
                                expression: "editCompany.address"
                              }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "vx-row mb-8" }, [
                        _c(
                          "div",
                          { staticClass: "vx-col w-full" },
                          [
                            _c("vs-input", {
                              staticClass: "w-full",
                              attrs: {
                                type: "file",
                                "icon-pack": "feather",
                                icon: "icon-file",
                                "icon-no-border": "",
                                label: "Picture file"
                              },
                              on: { change: _vm.onFileChangeEdit }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "vx-row mb-6" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "vx-col mr-0 pr-0 align-items-right justify-content-flex-end"
                          },
                          [
                            _c(
                              "vs-button",
                              {
                                staticClass: "mr-3 mb-2",
                                attrs: {
                                  "icon-pack": "feather",
                                  icon: "icon-save"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.updateCompany()
                                  }
                                }
                              },
                              [_vm._v("Save")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "vx-col ml-0 pl-0 align-items-right justify-content-flex-end"
                          },
                          [
                            _c(
                              "vs-button",
                              {
                                staticClass: "mr-3 mb-2",
                                attrs: {
                                  color: "danger",
                                  "icon-pack": "feather",
                                  icon: "icon-trash"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.deleteCompany(_vm.editCompany.id)
                                  }
                                }
                              },
                              [_vm._v("Delete")]
                            )
                          ],
                          1
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-tab",
                    {
                      attrs: {
                        label: "Inventory",
                        "icon-pack": "feather",
                        icon: "icon-archive"
                      }
                    },
                    [
                      _c("div", { staticClass: "vx-row mb-6" }, [
                        _c("div", { staticClass: "vx-col w-full mb-6 mt-1" }, [
                          _c("p", [_vm._v("Add new items")])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "vx-col xs:w-full sm:w-full md:w-1/2 lg:w-1/3"
                          },
                          [
                            _c(
                              "label",
                              {
                                staticClass: "ml-2",
                                staticStyle: { "font-size": "12px" }
                              },
                              [_vm._v("Items")]
                            ),
                            _c("br"),
                            _vm._v(" "),
                            _c("v-select", {
                              attrs: { options: _vm.items },
                              model: {
                                value: _vm.itemsToAdd.name,
                                callback: function($$v) {
                                  _vm.$set(_vm.itemsToAdd, "name", $$v)
                                },
                                expression: "itemsToAdd.name"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "vx-col xs:w-full sm:w-full md:w-1/2 lg:w-1/3"
                          },
                          [
                            _c("vs-input", {
                              staticClass: "w-full",
                              attrs: {
                                "icon-pack": "feather",
                                icon: "icon-edit",
                                "icon-no-border": "",
                                label: "Description"
                              },
                              model: {
                                value: _vm.itemsToAdd.description,
                                callback: function($$v) {
                                  _vm.$set(_vm.itemsToAdd, "description", $$v)
                                },
                                expression: "itemsToAdd.description"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "vx-col xs:w-full sm:w-full md:w-1/2 lg:w-1/3"
                          },
                          [
                            _c("vs-input", {
                              staticClass: "w-full",
                              attrs: {
                                type: "number",
                                "icon-pack": "feather",
                                icon: "icon-hash",
                                "icon-no-border": "",
                                label: "Quantity"
                              },
                              model: {
                                value: _vm.itemsToAdd.quantity,
                                callback: function($$v) {
                                  _vm.$set(_vm.itemsToAdd, "quantity", $$v)
                                },
                                expression: "itemsToAdd.quantity"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "vx-col xs:w-full sm:w-full md:w-1/2 lg:w-1/3 mt-6"
                          },
                          [
                            _c(
                              "vs-button",
                              {
                                staticClass: "mr-3 mb-2",
                                attrs: {
                                  "icon-pack": "feather",
                                  icon: "icon-plus"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.createItem()
                                  }
                                }
                              },
                              [_vm._v("Add")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "vx-col w-full mt-6" },
                          [
                            _c(
                              "vs-list",
                              [
                                _c("vs-list-header", {
                                  attrs: { title: "Items" }
                                }),
                                _vm._v(" "),
                                _vm._l(_vm.editCompany.items, function(item) {
                                  return _c(
                                    "vs-list-item",
                                    {
                                      attrs: {
                                        index: item.id,
                                        title: item.name,
                                        subtitle:
                                          item.quantity +
                                          " units. - " +
                                          item.description
                                      }
                                    },
                                    [
                                      _c(
                                        "vs-button",
                                        {
                                          attrs: {
                                            size: "small",
                                            "icon-pack": "feather",
                                            icon: "icon-x",
                                            color: "danger"
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.deleteItem(item.id)
                                            }
                                          }
                                        },
                                        [_vm._v("Remove")]
                                      )
                                    ],
                                    1
                                  )
                                })
                              ],
                              2
                            )
                          ],
                          1
                        )
                      ])
                    ]
                  )
                ],
                1
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "w-full mt-6" },
        [
          _c(
            "vs-button",
            {
              staticClass: "mb-4",
              attrs: { "icon-pack": "feather", icon: "icon-plus" },
              on: {
                click: function($event) {
                  _vm.newPopupActive = true
                }
              }
            },
            [_vm._v("New Company")]
          ),
          _vm._v(" "),
          _c(
            "vs-table",
            {
              attrs: {
                search: "",
                "max-items": "10",
                pagination: "",
                data: _vm.companies
              },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(ref) {
                    var data = ref.data
                    return _vm._l(data, function(tr, indextr) {
                      return _c(
                        "vs-tr",
                        { key: indextr },
                        [
                          _c("vs-td", { attrs: { data: data[indextr].name } }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "grid-layout-container alignment-block"
                              },
                              [
                                _c(
                                  "vs-row",
                                  {
                                    attrs: {
                                      "vs-align": "center",
                                      "vs-type": "flex",
                                      "vs-w": "12"
                                    }
                                  },
                                  [
                                    _c(
                                      "vs-col",
                                      {
                                        staticClass: "mb-4",
                                        attrs: {
                                          "vs-type": "flex",
                                          "vs-align": "center",
                                          "vs-lg": "3",
                                          "vs-md": "6",
                                          "vs-sm": "6",
                                          "vs-xs": "12"
                                        }
                                      },
                                      [
                                        data[indextr].picture
                                          ? _c("vs-avatar", {
                                              attrs: {
                                                src:
                                                  "/storage/companies/" +
                                                  data[indextr].picture
                                              }
                                            })
                                          : _vm._e(),
                                        _vm._v(" "),
                                        !data[indextr].picture
                                          ? _c("vs-avatar", {
                                              attrs: {
                                                color: "primary",
                                                text: data[indextr].name
                                              }
                                            })
                                          : _vm._e()
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "vs-col",
                                      {
                                        attrs: {
                                          "vs-type": "flex",
                                          "vs-align": "center",
                                          "vs-lg": "6",
                                          "vs-md": "6",
                                          "vs-sm": "6",
                                          "vs-xs": "12"
                                        }
                                      },
                                      [
                                        _c(
                                          "span",
                                          {
                                            staticStyle: {
                                              "margin-top": "-10px"
                                            }
                                          },
                                          [_vm._v(_vm._s(data[indextr].name))]
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: data[indextr].email } },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t\t" +
                                  _vm._s(data[indextr].email) +
                                  "\n\t\t\t\t\t"
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: data[indextr].created_at } },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t\t" +
                                  _vm._s(
                                    data[indextr].created_at.split(" ")[0]
                                  ) +
                                  "\n\t\t\t\t\t"
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: data[indextr].id } },
                            [
                              _c(
                                "vs-button",
                                {
                                  attrs: {
                                    "icon-pack": "feather",
                                    icon: "icon-edit",
                                    color: "primary"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.getCompany(data[indextr].id)
                                    }
                                  }
                                },
                                [_vm._v("Edit")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    })
                  }
                }
              ])
            },
            [
              _c("template", { slot: "header" }, [
                _c("h3", { staticClass: "mb-5" }, [
                  _vm._v("\n\t\t\t\t\t\tCompanies\n\t\t\t\t\t")
                ])
              ]),
              _vm._v(" "),
              _c(
                "template",
                { slot: "thead" },
                [
                  _c("vs-th", [_vm._v("\n\t\t\t\t\t\tName\n\t\t\t\t\t")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("\n\t\t\t\t\t\tEmail\n\t\t\t\t\t")]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "status" } }, [
                    _vm._v("\n\t\t\t\t\t\tSince\n\t\t\t\t\t")
                  ]),
                  _vm._v(" "),
                  _c("vs-th")
                ],
                1
              )
            ],
            2
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/admin/Companies.vue":
/*!****************************************************!*\
  !*** ./resources/js/src/views/admin/Companies.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Companies_vue_vue_type_template_id_668e8f61___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Companies.vue?vue&type=template&id=668e8f61& */ "./resources/js/src/views/admin/Companies.vue?vue&type=template&id=668e8f61&");
/* harmony import */ var _Companies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Companies.vue?vue&type=script&lang=js& */ "./resources/js/src/views/admin/Companies.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Companies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Companies_vue_vue_type_template_id_668e8f61___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Companies_vue_vue_type_template_id_668e8f61___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/admin/Companies.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/admin/Companies.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/admin/Companies.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Companies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Companies.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/Companies.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Companies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/admin/Companies.vue?vue&type=template&id=668e8f61&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/admin/Companies.vue?vue&type=template&id=668e8f61& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Companies_vue_vue_type_template_id_668e8f61___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Companies.vue?vue&type=template&id=668e8f61& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/Companies.vue?vue&type=template&id=668e8f61&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Companies_vue_vue_type_template_id_668e8f61___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Companies_vue_vue_type_template_id_668e8f61___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);