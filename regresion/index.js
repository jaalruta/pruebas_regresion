const compareImages = require("resemblejs/compareImages")
const open = require('open');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const options = require("./config.json");
let directorio_reporte  = options.destino_reporte||"./reporte";
directorio_reporte = directorio_reporte.endsWith(path.sep) ?directorio_reporte.slice(0, -1) :directorio_reporte;

const directorio_assets  = directorio_reporte+"/assets";

const titulo  = options.titulo_reporte||"Reporte comparacion Resemblejs";
const resemblejsConfig ={ "options": options.resemble_config}

async function contarArchivos(directorio,extension)
{
    let cantidad = 0 ;
    filenames = fs.readdirSync(directorio);
    filenames.forEach(file => {
    if (path.extname(file) == "."+extension)
         cantidad++;
    })
    return cantidad;
}

async function obtieneArchivos(directorio,extension)
{
    let archivos = [];
    filenames = fs.readdirSync(directorio);
    filenames.forEach(file => {
    if (path.extname(file) == "."+extension)
         archivos.push(file)
    })
    return archivos;
}

async function comparacion(ruta1,ruta2,destino)
{
    let data =  await compareImages(
        fs.readFileSync(ruta1),
        fs.readFileSync(ruta2),
        resemblejsConfig
    );

    let resultInfo = {
        isSameDimensions: data.isSameDimensions,
        dimensionDifference: data.dimensionDifference,
        rawMisMatchPercentage: data.rawMisMatchPercentage,
        misMatchPercentage: data.misMatchPercentage,
        diffBounds: data.diffBounds,
        analysisTime: data.analysisTime
    }
    fs.writeFileSync(destino, data.getBuffer());
    return resultInfo;
}

async function crearDirectorio(dir){
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir,{ recursive: true });
    }
}

async function borrarDirectorio(dir){
    files = fs.readdirSync(dir);
    for (const file of files) 
    {
        if(path.extname(file)!="")
        {
            fs.unlink(path.join(dir, file), err => {
                if (err) throw err;
              });
        }
      }

}

async function creaReporteHTML(resultados)
{

    await creaPaginaPrincipal(resultados);

    for(i in resultados)
    {
        await creaPaginaSecundaria(resultados[i]);
    }
    open(directorio_reporte+path.sep+"index.html");
    console.log(chalk.green('Proceso finalizado'));

} 

async function creaPaginaPrincipal(resultados)
{
    let html_principal = fs.readFileSync('./plantilla_reporte.html', 'utf8');
    html_principal = html_principal.replace("{{titulo}}",titulo);
    
    let cuerpo= `
      <h1>Reporte Regresión Visual</h1>
      <div class="list-group">
      `;
    for(i in resultados)
    {
        cuerpo+=`
        <a href="reporte${resultados[i].id}.html" class="list-group-item list-group-item-action" aria-current="true">
            ${resultados[i].nombre}
        </a>
        `;
    }
    cuerpo+=`</div>`;
    html_principal = html_principal.replace("{{cuerpo}}",cuerpo);
    fs.writeFileSync(directorio_reporte+path.sep+"index.html",html_principal);

}

async function creaPaginaSecundaria(resultado)
{
    let html_principal = fs.readFileSync('./plantilla_reporte.html', 'utf8');
    html_principal = html_principal.replace("{{titulo}}",resultado.nombre);
    
    let cuerpo= `
    <h1>${resultado.nombre}</h1>
    <div class="container">
      `;
    let contador = 1;
    for(i in resultado.resultados)
    {
        let data = resultado.resultados[i];
        cuerpo+=`
            <div class="row pt-3">
                <div class="col-12">
                    <div class="alert alert-success" role="alert">
                        Paso ${contador} , porcentaje de diferencias ${data.diferencia} %
                    </div>
                </div>
                <div class="col-12">
                    <div class="card-group">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${resultado.descripcion1}</h5>
                            </div>
                        <img src="assets/comparacion${resultado.id}/${data.origenA}" class="card-img-top" alt="...">

                        </div>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${resultado.descripcion2}</h5>
                            </div>
                        <img src="assets/comparacion${resultado.id}/${data.origenB}" class="card-img-top" alt="...">

                        </div>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Resultado regresión visual</h5>
                            </div>
                        <img src="assets/comparacion${resultado.id}/${data.comparacion}" class="card-img-top" alt="...">
                        </div>
                    </div>
                </div>
            </div>
        `;
        contador++;
    }
    cuerpo+=`</div>`;
    html_principal = html_principal.replace("{{cuerpo}}",cuerpo);
    fs.writeFileSync(directorio_reporte+path.sep+"reporte"+resultado.id+".html",html_principal);
}


async function pruebaRegresion()
{
    await crearDirectorio(directorio_reporte);
    await crearDirectorio(directorio_assets);
    await borrarDirectorio(directorio_reporte);
    
    if(options.comparaciones)
    {
        let nombreComparacion = "";
        let datosReporte = [];
        for (i in options.comparaciones)
        {
           let nombreComparacion = "comparacion"+i;
           let directorioComparacion = directorio_assets+path.sep+nombreComparacion;
           await crearDirectorio(directorioComparacion);
           await borrarDirectorio(directorioComparacion);
           let datos = options.comparaciones[i];
           let nombre = datos.nombre||"comparacion";
           let ruta1="";
           let ruta2="";
           let descripcion1="";
           let descripcion2="";
           
           if(datos.diretorio1)
           {
              if(!datos.diretorio1.ruta)
              {
                console.log(chalk.red('No esta definido la ruta del directorio 1 ... se saltara la comparacion'));
                break; 
              }
              else
              {
                  ruta1 = datos.diretorio1.ruta;
              }
              
              descripcion1 = datos.diretorio1.descripcion||"Descripcion 1";

           }
           else
           {
            console.log(chalk.red('No esta definido el directorio 1... se saltara la comparacion'));
            break; 
           }

           if(datos.diretorio2)
           {
              if(!datos.diretorio2.ruta)
              {
               console.log(chalk.red('No esta definido la ruta del directorio 2 ... se saltara la comparacion'));
               break; 
              }
              else
              {
                  ruta2 = datos.diretorio2.ruta;
              }
              descripcion2 = datos.diretorio2.descripcion||"Descripcion 2";
           }
           else
           {
             console.log(chalk.red('No esta definido el directorio 2... se saltara la comparacion'));
             break; 
           }

           if(!fs.existsSync(ruta1) || ruta1.length==0)
           {
             console.log(chalk.red('ruta1 '+ruta1+' no existe... se saltara la comparacion'));
             break;
           }

           if(!fs.existsSync(ruta2) || ruta1.length==0)
           {
             console.log(chalk.red('ruta2 '+ruta2+' no existe... se saltara la comparacion'));
             break
           }
           

           let archivosDirectorio1 = await contarArchivos(ruta1,"png");
           let archivosDirectorio2 = await contarArchivos(ruta2,"png");

           let ruta_iteracion1 = ruta1;
           let descripcion_iteracion1 =descripcion1;

           let ruta_iteracion2 = ruta2;
           let descripcion_iteracion2 =descripcion2;

           if(archivosDirectorio2>archivosDirectorio1)
           {
             ruta_iteracion1 = ruta2;
             descripcion_iteracion1 = descripcion2;

             ruta_iteracion2 = ruta1;
             descripcion_iteracion2 = descripcion1
           }
           ruta_iteracion1 = ruta_iteracion1.endsWith(path.sep) ?ruta_iteracion1.slice(0, -1) :ruta_iteracion1;
           ruta_iteracion2 = ruta_iteracion2.endsWith(path.sep) ?ruta_iteracion2.slice(0, -1) :ruta_iteracion2;
           let archivos1 = await obtieneArchivos(ruta_iteracion1,"png");
           let archivos2 = await obtieneArchivos(ruta_iteracion2,"png");
           let resultadoComparacion = [];
           console.log(chalk.yellow('Comparando '+nombre));
           for (x in archivos1)
           {
               
               let comp1= ruta_iteracion1+path.sep+archivos1[x];

               if(!archivos2[x])
               {
                 let detino_comparacion = directorioComparacion+path.sep+"resultado"+x+".png";
                 fs.copyFileSync(comp1,directorioComparacion+path.sep+"origenA"+x+".png");
                 fs.copyFileSync("./imagen_no_disponible.png",directorioComparacion+path.sep+"origenB"+x+".png");
                 fs.copyFileSync("./imagen_no_disponible.png",detino_comparacion);
 
                 resultadoComparacion.push({
                  "diferencia":100,
                  "origenA" : "origenA"+x+".png",
                  "origenB" : "origenB"+x+".png",
                  "comparacion" : "resultado"+x+".png"
                 });
               }
               else
               {
                let comp2= ruta_iteracion2+path.sep+archivos2[x];
               
                let detino_comparacion = directorioComparacion+path.sep+"resultado"+x+".png";
                let resultado = await comparacion(comp1,comp2,detino_comparacion)
                fs.copyFileSync(comp1,directorioComparacion+path.sep+"origenA"+x+".png");
                fs.copyFileSync(comp2,directorioComparacion+path.sep+"origenB"+x+".png");
                
 
                resultadoComparacion.push({
                 "diferencia":resultado.misMatchPercentage,
                 "origenA" : "origenA"+x+".png",
                 "origenB" : "origenB"+x+".png",
                 "comparacion" : "resultado"+x+".png"
                });
               }

           }
        
           datosReporte.push({
               "id": i,
               "nombre":nombre,
               "descripcion1":descripcion_iteracion1,
               "descripcion2":descripcion_iteracion2,
               "resultados": resultadoComparacion
           });


        }  

        await creaReporteHTML(datosReporte);
    }
    else
    {
        console.log(chalk.red('No existe configuracion de comparaciones'));
    }   
}



(async ()=> await pruebaRegresion())();