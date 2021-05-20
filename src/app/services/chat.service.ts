import { Injectable } from '@angular/core';
import { WebSocketService } from './web-socket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    public wsService: WebSocketService
  ) { }

  sendMessage(mensaje: string){

    const payload = {
      de: 'Efren',
      cuerpo: mensaje
    };

    this.wsService.emit('mensaje', payload);
  }

  /**
   * Metodo de fachada que ejecuta el metodo listen de web socket service
   */
  getMessages() {
    return this.wsService.listen('mensaje-nuevo');
  }
}
