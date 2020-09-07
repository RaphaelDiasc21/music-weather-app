exports.formatDateByNow = () =>{
    let date = new Date();
    let dateFormated = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
    let hourFomated = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    return {
        date:dateFormated,
        hour:hourFomated
    }
}