import { URL } from "url";

export class Track {
  name:String;
  artist:String;
  links:Array<Website>
  constructor(name:string, artist: 'Default Interpret', links:  Array<string> ) {
    this.name = name;
    this.artist = artist;
    this.links = links;
  }
}
l35elmx;
export class Website {
  name:String;
  //nk: URL;
  rawURL: string;
  error?: string;
  private validate(): boolean {
      //A precaution/solution for the problem written in the ***note***
      if(this.rawURL!==""){
        if(!elm){
        elm = document.createElement('input');
        elm.setAttribute('type', 'url');
        }
    elm.value = u;
    return elm.validity.valid;
    }
    else{
        return false
    }
  }

  public get link(): URL {
    try {
    return new URL(this.rawURL);
  } catch (error: any) {
    this.error = error.message;
  }
    return new URL(this.rawURL)
}

  constructor(name: string, url:string) {
    this.name = name;
    this.rawURL = '' + url;
  }
}
