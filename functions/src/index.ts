import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import * as express from 'express';
import * as functions from 'firebase-functions';
import { enableProdMode } from '@angular/core';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import { join } from 'path';

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./imports/server/main');
const app = express();
const DIST_FOLDER = join(process.cwd(), 'dist/imports/browser');

enableProdMode();

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', DIST_FOLDER);

// Server static files from /browser
app.get('*.*', express.static(DIST_FOLDER, {
  maxAge: '1y'
}));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});

export const serverSideRendering = functions.https.onRequest(app);
