import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {AuthService} from '../../core/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private ws: WebSocket;
  constructor(private authService: AuthService) { }
    initWebsocket = (uri = "signal/telemetry") => {
        this.close();
        const baseUrl = environment.apiUrl.replace("http", "ws").replace(
            "/api/",
            `/${uri}`
        );
        const url = baseUrl + "?access_token=" + this.authService.accessToken;
        this.ws = new WebSocket(url);
        this.ws.onopen = () => {
            this.onMessage();
        };
        this.ws.onclose = (e) => {
            if (e.code !== 4001) {
                setTimeout(() => {
                    this.initWebsocket();
                }, 5000);
                window.dispatchEvent(
                    new CustomEvent("socket", {
                        detail: {
                            code: "close",
                        },
                    })
                );
            }
        };
    };

    onMessage = () => {
        this.ws.onmessage = (event) => {
            const message = event.data;
            const d = JSON.parse(message);
            window.dispatchEvent(new CustomEvent("socket", {detail: d}));
        };
    };

    close = () => {
        if (this.ws) {
            this.ws.close(4001, "app_custom");
        }
    };

    send = (msg) => {
        if (this.ws && this.ws.readyState === 1) {
            this.ws.send(JSON.stringify(msg));
        }
    };

}
