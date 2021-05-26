// TÉCNICO DE CELULARES
// Los comentarios son para que pruebe individualmente cada paso si así lo desea
// Y en mi Visual Studio quokka no corre los "prompt", si también le ocurre, solo comentelos y use los que ya dejé comentados

let opcion = 0;
let s = 10;
let decision = 10

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
        {nombre: 'Xiaomi', 
            modelo: ['Xiaomi Note 8', ' Xiaomi Note 9'],
            piezas: ['Pin de carga', ' Pantalla', ' Antena Wi-Fi', ' Bateria', ' Placa', ' Cámara'],
            descripcion: 'Se realiza mantenimiento a tú dispositivo móvil, desde problemas simples hasta cambios de piezas',
            tecnicos: {
                nombre: 'Richard', 
                apellido: 'Quintero', 
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
                },
                {fechaInicio: '25-05-2021', 
                    fechaFin: '26-05-2021', 
                    cedulaTecnico: '28.694.896'
                }
            ]
        }
    ],
}

// console.log(telefonos);

do {
    opcion = parseInt(prompt("Bievenido\n\nCual Marca desea consultar?\n\nSeleccione el Número de la opción:\n 1. Samsung.\n 2. Iphone.\n 3. Xiaomi"));
    if (opcion > 0 && opcion < 4 ) {
        s = opcion;
    }  else {
        alert("La opcion no es correcta.\n\nPor favor elija una opcion correcta");
    }

} while (s > 3);
s -= 1;

const { marcas } = telefonos;
// console.log(marcas);

for (let i = 0; i < marcas.length; i++) {
    var { servicios } = marcas[i];
    // console.log(servicios);
}

// s = 1;
console.log(`${telefonos.nombre}\n
Marca: ${marcas[s].nombre} - Modelos: ${marcas[s].modelo}\n
Piezas: ${marcas[s].piezas}\n
Descripción: ${marcas[s].descripcion}\n\n`
);

do {
    opcion = parseInt(prompt("Desea ver los técnicos disponibles para esta marca?\n\n Seleccione el Número de la opción:\n1. Si.\n2. No."));
    if (opcion > 0 && opcion < 3 ) {
        decision = opcion;
    }  else {
        alert("La opcion no es correcta.\n\nPor favor elija una opcion correcta");
    }
} while (decision > 2);

// opcion = 1;
if (opcion === 1) {
    console.log('Tecnicos:\n');
    console.log(`Nombre: ${marcas[s].tecnicos.nombre} ${marcas[s].tecnicos.apellido} - C.I: ${marcas[s].tecnicos.cedula}\n\n`);
};

do {
    opcion = parseInt(prompt("Desea ver los servicios que ha realizado a esta marca?\n\n Seleccione el Número de la opción:\n1. Si.\n2. No."));
    if (opcion > 0 && opcion < 3 ) {
        decision = opcion;
    }  else {
        alert("La opcion no es correcta.\n\nPor favor elija una opcion correcta");
        decision = 10;
    }
} while (decision > 2);

// opcion = 1;
if (opcion === 1) {
    console.log('Servicios:\n');
    for (i = 0; i < marcas[s].servicios.length; i++) {
        console.log(`Fecha de Inicio: ${servicios[i].fechaInicio} - Fecha de Fin: ${servicios[i].fechaFin} - C.I del Técnico: ${servicios[i].cedulaTecnico}\n\n`);
    }
};