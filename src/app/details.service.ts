import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  info1: string[] = ['Mahesh', 'Aqua2376', 'srinugj90@yahoo.com'];
  info2: string[] = ['Jafar', 'Aqua4567', 'Jafarmugh09@yahoo.com'];
  info3: string[] = ['christopher', 'Aqua8945', 'christuphr09@yahoo.com'];
  getinfo1(): string[]{
    return this.info1;
  }
  getinfo2(): string[]{
    return this.info2;
  }
  getinfo3(): string[]{
    return this.info3;
  }
  constructor() { }
}
