const process = require("process");
const funcionesDeTareas = require("./funcionesDeTareas");
const fundionesDeTareas = require("./funcionesDeTareas")

let action = process.argv[2] && process.argv[2].toLowerCase();

switch(action){
        case "listar":
            let listaDeTareas = funcionesDeTareas.leerJson()
            for(let i = 0; i < listaDeTareas.length; i++){
                console.log(
                    `Tarea: ${listaDeTareas[1].titulo} / Estado: ${tareasParseadas[1].estado}`
                    )
                    console.log("---------------------------------")

            }
            break;
        case undefined:
                console.log("Atención tienes que pasar una acción");
                break
        default:
            console.log("No entiendo que quieres hacer")


}







