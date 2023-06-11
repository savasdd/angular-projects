import 'zone.js/dist/zone';

(window as any).global = window;
declare var global: (any);
declare var require: (any);
global.Buffer = global.Buffer || require('buffer').Buffer;
