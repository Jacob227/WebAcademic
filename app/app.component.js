System.register(['angular2/core', './courses.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, courses_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        //styleUrls: ['css/myStyle.css'],
                        selector: 'my-app',
                        template: " <style> .btn-group { padding: 30px; } </style>\n    <h1> hiii there </h1>\n    <nav class=\"navbar navbar-toggleable-md navbar-inverse bg-inverse\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo01\" aria-controls=\"navbarTogglerDemo01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo01\">\n    <a class=\"navbar-brand\" href=\"#\">Hidden brand</a>\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>\n\n<div class=\"card\" style=\"width: 20rem;\">\n  <img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\">\n  <div class=\"card-block\">\n    <h4 class=\"card-title\">Card title</h4>\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n    <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n  </div>\n</div>\n\n<div class=\"btn-group\">\n  <button type=\"button\" class=\"btn btn-danger dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n    Action1164576576\n  </button>\n  <div class=\"dropdown-menu\">\n    <a class=\"dropdown-item\" href=\"#\">Action</a>\n    <a class=\"dropdown-item\" href=\"#\">Another action</a>\n    <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n    <div class=\"dropdown-divider\"></div>\n    <a class=\"dropdown-item\" href=\"#\">Separated link</a>\n  </div>\n</div>\n",
                        directives: [courses_component_1.CoursesComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map