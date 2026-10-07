import {build} from 'esbuild';import{cp,mkdir,readdir,copyFile}from'node:fs/promises';
await build({entryPoints:['audio-worker.js'],bundle:true,format:'esm',outfile:'dist/audio-worker.js',platform:'browser',target:'es2022',define:{'process.env.NODE_ENV':'"production"'}});
await mkdir('dist/model',{recursive:true});await cp('node_modules/@spotify/basic-pitch/model','dist/model',{recursive:true});
await mkdir('dist/alphatab',{recursive:true});await cp('node_modules/@coderline/alphatab/dist','dist/alphatab',{recursive:true});
await mkdir('dist/wasm',{recursive:true});for(const f of await readdir('node_modules/onnxruntime-web/dist'))if(/\.wasm$|ort-wasm.*\.mjs$/.test(f))await copyFile('node_modules/onnxruntime-web/dist/'+f,'dist/wasm/'+f);
