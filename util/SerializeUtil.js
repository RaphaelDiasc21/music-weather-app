exports.serialize = (obj) =>{
    var str = [];
    for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
            str.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        }
    }
    return str.join("&");
}