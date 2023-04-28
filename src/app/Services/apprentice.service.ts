import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApprenticeService {

  url: string = 'https://c1-2023-ca-apprenticeradar-production.up.railway.app//api/v1/apprentice';

  constructor() { }
}
