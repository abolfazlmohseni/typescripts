"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Ticher"] = 1] = "Ticher";
    Role[Role["User"] = 2] = "User";
})(Role || (Role = {}));
// enum Role {
//   Admin =10,
//   Ticher,
//   User
// }
// enum Role {
//   Admin,
//   Ticher="Ticher",
//   User=2
// }
const user = {
    id: 1,
    name: "abolfazl",
    age: 17,
    role: Role.Admin
};
if (user.role === Role.Admin) {
    console.log("hello admin");
}
else {
    console.log("not accses");
}
