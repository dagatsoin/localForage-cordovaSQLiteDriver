import LocalForage = require("localforage");

//import * as LocalForage from 'localforage'

declare module "localforage-cordovasqlitedriver" {
  export var cordovaSQLiteDriver: LocalForage.LocalForageDriver;
  export default cordovaSQLiteDriver;
} 