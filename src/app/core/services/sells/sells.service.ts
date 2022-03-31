import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseSell } from '../../models/BodyResponses';
import { Response } from '../../models/Response';

@Injectable({
  providedIn: 'root'
})
export class SellsService {

  constructor(private httpClient: HttpClient) { }

  getSells(pag?,lim?){
    let params = new HttpParams();
    if (lim)
      params = params.append('lim', lim);
    if (pag)
      params = params.append('pag', pag);
      return this.httpClient.get<Response<ResponseSell>>(environment.url_api + "/sells", { params: params })
  }

  postSell(sell){
    return this.httpClient.post(environment.url_api + "/sells",sell)
  }
}
