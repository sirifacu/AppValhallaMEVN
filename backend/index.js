import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
import router from './routes';
import history from 'connect-history-api-fallback';

// connect to database
mongoose.Promise = global.Promise;
//const dbUrl = 'mongodb://localhost:27017/valhalla';
const dbUrl = 'mongodb+srv://petete:riverplate10@valhalla-app.oouav.mongodb.net/valhalla?retryWrites=true&w=majority';
mongoose.connect(dbUrl, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
    .then(mongoose => console.log('Connected to DB'))
    .catch(err => console.log(err));

const app = express();


// settings
app.set('port', process.env.PORT || 3000);
app.use(express.urlencoded({ extended: true }));


// middlewares
app.use(morgan('dev')); // mostrar peticiones en consola
app.use(cors()); // permitir peticiones hechas desde otra computadora
app.use(express.json()); // analiza en json las peticiones que recibe

// routes
app.use('/api', router);

// esto va aca si o si, si no no anda lo de abajo
app.use(history({ verbose: true })); // arreglar el problema de history mode
app.use(express.static(path.join(__dirname, 'public'))); // predetermina que en la carpeta public se encuentan los archivos estaticos


// port
app.listen(app.get('port'), () => {
    console.log('Server on port ' + app.get('port'))
});