import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  public socketStatus = false;

  constructor(
    private socket: Socket
  ) {
    this.checkStatus();
   }

   checkStatus() {

    this.socket.on('connect', () => {
      console.log('Conectado al servidor!!');
      this.socketStatus = true;
    });

    this.socket.on('disconnect', () => {
      console.log('Desconectado del servidor!!');
      this.socketStatus = false;
    });
  }

  emit(evento: string, payload?: any, callback?: Function){
    let emit;
    console.log('Emitiendo mensaje!!', evento , payload);
    emit = this.socket.emit(evento, payload);
    console.log(emit);
  }

  listen( evento: string ) {
    return this.socket.fromEvent( evento );
  }
}
