import { Injectable } from '@angular/core';

export interface IconFiles {
  imageFile: string;
  alt: string;
  link: string;
}

export interface FrameworkConfigSettings {
  showLanguageSelector?: true;
  showUserControls?: true;
  showStatusBar?: true;
  showStatusBarBreakpoint?: number;
  socialIcons?: Array<IconFiles>;
}

@Injectable({
  providedIn: 'root'
})
export class FrameworkConfigService {

  showLanguageSelector = true;
  showUserControls = true;
  showStatusBar = true;
  showStatusBarBraekpoint = 0;
  socialIcons = new Array<IconFiles>();

  configure(settings: FrameworkConfigSettings): void {
    Object.assign(this, settings);
  }

}
