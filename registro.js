// TÉCNICO DE CELULARES
// Los comentarios son para que pruebe individualmente cada paso si así lo desea.
// Y en mi Visual Studio quokka no corre los "prompt", si también le ocurre, solo comentelos y use los que ya dejé comentados simulando los ciclos y condiciones.

let menuOption = 0
let opcion = 0;
let s = 10;
let decision = 10
let posicion = 0;

const telefonos = {
    nombre: 'Tecnico de celulares',
    marcas: [
        {nombre: 'Samsung', 
            modelo: ['j6+', ' s10', ' a51'],
            piezas: ['Pin de carga', ' Pantalla', ' Antena Wi-Fi', ' Bateria', ' Placa', ' Cámara'],
            descripcion: 'Se realiza mantenimiento a tú dispositivo móvil, desde problemas simples hasta cambios de piezas',
            tecnicos: {
                nombre: 'Alexander', 
                apellido: 'Avendaño', 
                cedula: '29.694.896',
            },
            servicios: [
                {fechaInicio: '25-05-2021', 
                    fechaFin: '28-05-2021', 
                    cedulaTecnico: '28.694.896'
                },
                {fechaInicio: '25-05-2021', 
                    fechaFin: '27-05-2021', 
                    cedulaTecnico: '28.694.896'
                }
            ]
        },
        {nombre: 'Iphone', 
            modelo: ['Iphone 7', ' Iphone Pro Máx', ' Iphone 11'],
            piezas: ['Pin de carga', ' Pantalla', ' Antena Wi-Fi', ' Bateria', ' Placa', ' Cámara'],
            descripcion: 'Se realiza mantenimiento a tú dispositivo móvil, desde problemas simples hasta cambios de piezas, incluye solución a iCloud',
            tecnicos: {
                nombre: 'Maria', 
                apellido: 'Paez', 
                cedula: '31.156.582',
            },
            servicios: [
                {fechaInicio: '25-05-2021', 
                    fechaFin: '28-05-2021', 
                    cedulaTecnico: '31.156.582'
                },
                {fechaInicio: '25-05-2021', 
                    fechaFin: '27-05-2021', 
                    cedulaTecnico: '31.156.582'
                }
            ]
        },
        {nombre: 'Xiaomi', 
            modelo: ['Xiaomi Note 8', ' Xiaomi Note 9'],
            piezas: ['Pin de carga', ' Pantalla', ' Antena Wi-Fi', ' Bateria', ' Placa', ' Cámara'],
            descripcion: 'Se realiza mantenimiento a tú dispositivo móvil, desde problemas simples hasta cambios de piezas',
            tecnicos: {
                nombre: 'Richard', 
                apellido: 'Quintero', 
                cedula: '30.380.344',
            },
            servicios: [
                {fechaInicio: '25-05-2021', 
                    fechaFin: '28-05-2021', 
                    cedulaTecnico: '30.380.344'
                },
                {fechaInicio: '25-05-2021', 
                    fechaFin: '27-05-2021', 
                    cedulaTecnico: '30.380.344'
                },
                {fechaInicio: '25-05-2021', 
                    fechaFin: '26-05-2021', 
                    cedulaTecnico: '30.380.344'
                }
            ]
        }
    ],
}
// console.log(telefonos);

const newMarca = {
    nombre: '', 
    modelo: [],
    piezas: [],
    descripcion: 'Esperando Datos',
    tecnicos: {
        nombre: 'Esperando', 
        apellido: 'Esperando', 
        cedula: 'Esperando',
    },
    servicios: [
        {fechaInicio: 'Esperando', 
            fechaFin: 'Esperando', 
            cedulaTecnico: 'Esperando'
        }
    ]
};

const { marcas } = telefonos;
// console.log(marcas);

for (let i = 0; i < marcas.length; i++) {
    var { servicios } = marcas[i];
    // console.log(servicios);
}

do {
    menuOption = Number( prompt(`Bienvenido\n
    1. Mostrar Registros\n
    2. Agregar Registro\n
    0. Salir`));

    switch (menuOption) {
        case 1:
            const { marcas } = telefonos;
            // console.log(marcas);

            console.log(`${telefonos.nombre}\n\n`);

            for (let s = 0; s < marcas.length; s++) {
                // console.log(s);
                console.log(`Marca: ${marcas[s].nombre} - Modelos: ${marcas[s].modelo}\n\nPiezas: ${marcas[s].piezas}\n\nDescripción: ${marcas[s].descripcion}\n\nTecnicos:\n\nNombre: ${marcas[s].tecnicos.nombre} ${marcas[s].tecnicos.apellido} - C.I: ${marcas[s].tecnicos.cedula}\n\nServicios:\n\n`);
                marcas[s].servicios.forEach( producto => console.log(`Fecha de inicio: ${producto.fechaInicio}\nFecha de Fin: ${producto.fechaFin}\nCédula del Técnico: ${producto.cedulaTecnico}\n\n`));
            };            
            break;

        case 2:
            var nuevaMarca = prompt('Ingrese la nueva marca:');
            // var nuevaMarca = 'Nueva Marca';
            newMarca.nombre = nuevaMarca;
            var nuevoModelos = prompt('Ingrese el modelo que desea agregar');
            // var nuevoModelos = 'Nuevo Modelo';
            newMarca.modelo[posicion] = nuevoModelos;
            do {
                opcion = parseInt(prompt("Desea agregar otra modelo?\n\n Seleccione el Número de la opción:\n1. Si.\n2. No."));
                if (opcion > 0 && opcion < 3 ) {
                    decision = opcion;
                    if (opcion === 1) {
                        posicion++;
                        nuevoModelos = prompt('Ingrese el modelo que desea agregar');
                        // var nuevoModelos = 'Nuevo Modelo 2';
                        newMarca.modelo[posicion] = nuevoModelos;
                    }
                }  else {
                    decision = 10;
                    alert("La opcion no es correcta.\n\nPor favor elija una opcion correcta");
                }
            } while (decision !== 2);
            posicion = 0;
            var nuevasPiezas = prompt('Ingrese la pieza que desea agregar');
            // var nuevasPiezas = 'Nueva Pieza';
            newMarca.piezas[posicion] = nuevasPiezas;
            do {
                opcion = parseInt(prompt("Desea agregar otra pieza?\n\n Seleccione el Número de la opción:\n1. Si.\n2. No."));
                if (opcion > 0 && opcion < 3 ) {
                    decision = opcion;
                    if (opcion === 1) {
                        posicion++;
                        nuevasPiezas = prompt('Ingrese la pieza que desea agregar');
                        // nuevasPiezas = 'Nueva pieza 2';
                        newMarca.piezas[posicion] = nuevasPiezas;
                    }
                }  else {
                    decision = 10;
                    alert("La opcion no es correcta.\n\nPor favor elija una opcion correcta");
                }
            } while (decision !== 2);

            var nuevaDescripcion = prompt('Ingrese la descripción del servicio');
            // var nuevaDescripcion = 'Nueva Descripcion';
            newMarca.descripcion = nuevaDescripcion;

            var nombreTecnico = prompt('Ingrese el nombre del técnico que realiza el servicio');
            // var nombreTecnico = 'Nuevo Tecnico'
            newMarca.tecnicos.nombre = nombreTecnico;
            var apellidoTecnico = prompt('Ingrese el apellido del técnico que realiza el servicio');
            // var apellidoTecnico = 'Nuevo Apellido'
            newMarca.tecnicos.apellido = apellidoTecnico;
            var cedulaTecnico = prompt('Ingrese la cedula del técnico que realiza el servicio');
            // var cedulaTecnico = 'Nuevo Cedula'
            newMarca.tecnicos.cedula = cedulaTecnico;

            posicion = 0;
            var nuevaFechaInicio = prompt('Ingrese la fecha en que inicio la reparación del teléfono');
            // var nuevaFechaInicio = 'Nueva Fecha de Inicio';
            newMarca.servicios[posicion].fechaInicio = nuevaFechaInicio;

            var nuevaFechaFin = prompt('Ingrese la fecha en que terminó la reparación del teléfono');
            // var nuevaFechaFin = 'Nueva Fecha Final';
            newMarca.servicios[posicion].fechaFin = nuevaFechaFin;
            var nuevaCedulaTecnico = prompt('Ingrese la cédula del técnico');
            // var nuevaCedulaTecnico = 'Nueva Cdeula del Tecnico';
            newMarca.servicios[posicion].cedulaTecnico = nuevaCedulaTecnico;

            do {
                opcion = parseInt(prompt("Desea agregar otra servicio realizado?\n\n Seleccione el Número de la opción:\n1. Si.\n2. No."));
                if (opcion > 0 && opcion < 3 ) {
                    decision = opcion;
                    if (opcion === 1) {
                        posicion++;
                        let newObjeto = {
                        fechaInicio: 'Esperando', 
                        fechaFin: 'Esperando', 
                        cedulaTecnico: 'Esperando'
                    }
                        var nuevaFechaInicio = prompt('Ingrese la fecha en que inicio la reparación del teléfono');
                        // var nuevaFechaInicio = 'Nueva Fecha de Inicio 2';
                        newObjeto.fechaInicio = nuevaFechaInicio;
                        
                        var nuevaFechaFin = prompt('Ingrese la fecha en que terminó la reparación del teléfono');
                        // var nuevaFechaFin = 'Nueva Fecha Final 2';
                        newObjeto.fechaFin = nuevaFechaFin;

                        var nuevaCedulaTecnico = prompt('Ingrese la cédula del técnico');
                        // var nuevaCedulaTecnico = 'Nueva Cdeula del Tecnico 2';
                        newObjeto.cedulaTecnico = nuevaCedulaTecnico;

                        newMarca.servicios.push(newObjeto);
                    }
                }  else {
                    decision = 10;
                    alert("La opcion no es correcta.\n\nPor favor elija una opcion correcta");
                }
            } while (decision !== 2);

            telefonos.marcas.push(newMarca);
            console.clear();
            
        case 0:
            alert('Hasta la próxima');
            break;
    }
} while (menuOption !== 0);