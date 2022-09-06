const fs = require("fs")

let funcionesDeTareas = {
    leerJson: function (){
        let tareasjson = fs.readFileSync("./tareas.json", "utf-8")
        let tareasParseadas = JSON.parse(tareasjson);
        return tareasParseadas


    }

}

module.exports = funcionesDeTareas


 