import { transacciones } from "./tiendaController.js"
import Stripe from 'stripe'
const stripe = new Stripe('sk_test_51OSYQrAN2Gcd6CRsR9osJZWmC2rFk1QMcFnqeg2J3JCphiQQm7ZIfdgGLJ1xXEZH6m7C7IjJXR96kXMMdHZPuCsu00QkyApFGN')

let lineItems = []
function agregarProductos() {
  lineItems = []

  for (let i = 0; i < transacciones.length; i++) {
    lineItems.push({
      price_data: {
        currency: 'clp',
        product_data: {
          name: transacciones[i]["nombre"],
          description: transacciones[i]["descripcion"],
        },
        unit_amount: transacciones[i]["precio"],
      },
      quantity: transacciones[i]["cantidad"],
    })

  }
}

const crearPago = async (req, res) => {
  agregarProductos();
  const s = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel',
  });
  return res.json(s);
}

export { crearPago, lineItems }



