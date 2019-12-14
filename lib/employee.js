function Employee(name, id, title) {
    this.name = name;
    this.id = id;
    this.title = title;
}

Employee.prototype.getName = function() {

};

Employee.prototype.getId = function() {

};

Employee.prototype.getEmail() = function() {

};

Employee.prototype.getRole() = function() {
    //Returns "Employee"
};

module.exports = Employee;