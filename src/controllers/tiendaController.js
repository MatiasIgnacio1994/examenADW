import { estado } from '../controllers/loginController.js'

let transacciones = []

function calcularCantProd()
{
       let cantProductos=0;
    
    for(let i=0;i<transacciones.length;i++){
        cantProductos+=transacciones[i].cantidad;
    }
    
    return cantProductos

}


const tiendaPage= (req,res)=> {

    if (!estado[0]) {
        
        res.render('pages/login',{ cont: "Login", ruta: "/login", cant: calcularCantProd(), link: "/tienda"})
    } else {
       
        res.render('pages/tienda',{ cont: "Logout", ruta: "/logout",cant: calcularCantProd(), link: "/tienda" })
    }
  
}

const agregarProd=(req, res) => {
    let datos = req.body;

    let existeprod=false;

    for (let i=0; i<transacciones.length; i++){

            if(transacciones[i].nombre==datos.nombre){
                
                existeprod=true
                transacciones[i].cantidad+=1
                break
          
                }
  
        }

    if(!existeprod){
        datos.cantidad=1
        transacciones.push(datos);

        }
        


    res.render('pages/tienda', { cont: "Logout", ruta: "/logout", cant: calcularCantProd(), link: "/tienda" })
    console.log("transacciones:",transacciones);
}

export {tiendaPage, agregarProd, transacciones}
