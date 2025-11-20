"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterfaceModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./controllers/app.controller");
const use_case_module_1 = require("../use-case/use-case.module");
const clients_controller_1 = require("./controllers/clients/clients.controller");
const adm_controller_1 = require("./controllers/user_adm/adm.controller");
let InterfaceModule = class InterfaceModule {
};
exports.InterfaceModule = InterfaceModule;
exports.InterfaceModule = InterfaceModule = __decorate([
    (0, common_1.Module)({
        imports: [use_case_module_1.UseCaseModule],
        controllers: [
            app_controller_1.AppController,
            clients_controller_1.ClientsController,
            adm_controller_1.AdmController,
        ],
    })
], InterfaceModule);
//# sourceMappingURL=interface.module.js.map