import {BasicPitch,outputToNotesPoly,noteFramesToTime} from '@spotify/basic-pitch';
import * as tf from '@tensorflow/tfjs';
let basic,recognizer;
self.onmessage=async({data})=>{try{
if(data.type==='notes'){
 await tf.setBackend('cpu');await tf.ready();basic??=new BasicPitch(new URL('model/model.json',self.location.href).href);
 const result=[],chunk=22050*20;for(let offset=0;offset<data.samples.length;offset+=chunk){const frames=[],onsets=[];const samples=data.samples.slice(offset,offset+chunk);
 await basic.evaluateModel(samples,(f,o)=>{frames.push(...f);onsets.push(...o);},p=>self.postMessage({type:'progress',text:'Detectando notas',value:Math.round((offset+p*samples.length)/data.samples.length*100)}));
 const notes=noteFramesToTime(outputToNotesPoly(frames,onsets,.35,.3,8));for(const n of notes)result.push({midi:n.pitchMidi,start:n.startTimeSeconds+offset/22050,duration:n.durationSeconds,confidence:n.amplitude});
 }self.postMessage({type:'result',task:'notes',notes:result});
}else if(data.type==='lyrics'){
 const {pipeline,env}=await import('@huggingface/transformers');env.allowLocalModels=false;env.backends.onnx.wasm.wasmPaths=new URL('wasm/',self.location.href).href;env.backends.onnx.wasm.numThreads=1;
 self.postMessage({type:'progress',text:'Carregando modelo de voz (primeiro uso pode demorar)',value:0});
 recognizer??=await pipeline('automatic-speech-recognition','onnx-community/whisper-tiny',{dtype:'q8',device:'wasm',progress_callback:p=>{if(p.progress)self.postMessage({type:'progress',text:'Carregando reconhecimento de voz',value:Math.round(p.progress)});}});
 const out=await recognizer(data.samples,{language:'portuguese',task:'transcribe',return_timestamps:true,chunk_length_s:30,stride_length_s:5});self.postMessage({type:'result',task:'lyrics',chunks:out.chunks??[],text:out.text});
}}catch(e){self.postMessage({type:'error',message:e.message||String(e)});}};
