import express, { urlencoded } from 'express'
import cors from 'cors'
import path from 'path'

import { routerContactos } from './routes/contactoRoutes.js'
import { routerIndex } from './routes/indexRoutes.js'
import { routerLogin } from './routes/loginRoutes.js'
import { routerCarrito } from './routes/carritoRoutes.js'
import { routerNosotros } from './routes/nosotrosRoutes.js'
import { routerTienda } from './routes/tiendaRoutes.js'
import { routerSignin } from './routes/signinRoutes.js'
import { routerLogout } from './routes/logoutRoutes.js'
import { routerStripe } from './routes/stripeRoutes.js'
import { routerSuccess } from './routes/successRoutes.js'
import { routerCancel } from './routes/cancelRoutes.js'

const app = express()

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json({ type: "*/*" }))


app.set("view engine", "ejs")
app.set('views', path.join(__dirname, 'views'))

app.set('port', process.env.PORT || 3000)

app.use('/', routerIndex)
app.use('/logout', routerLogout)
app.use('/create-checkout-session', routerStripe)
app.get('/create-checkout-session', (req, res) => res.send("checkout"));
app.use('/contacto', routerContactos);
app.use('/success', routerSuccess);
app.use('/cancel', routerCancel);

app.use('/login', routerLogin);
app.use('/carrito', routerCarrito);
app.use('/nosotros', routerNosotros);
app.use('/tienda', routerTienda);
app.use('/signin', routerSignin);


app.listen(3000, () => {
    console.log('servidor esa corriendo en http://localhost:3000/')
});

export { app };
