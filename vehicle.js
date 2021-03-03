function Vehicle(type, point) {
    this.type = type;
    this.point = point;
}
Vehicle.prototype.resetPoint = function() {
    this.point = 0;
}

module.exports = Vehicle;

