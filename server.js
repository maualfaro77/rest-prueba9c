const CONFIG= require('./app/config/configuracion');
const app = require('./app/app')

app.listen(CONFIG.PORT, () => {
    console.log('Aplicacion Corriendo en el puerto:',CONFIG.PORT);
    
})