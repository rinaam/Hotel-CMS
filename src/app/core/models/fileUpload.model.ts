export class FileUpload {
  key = '';
  name = '';
  url = '';
  file: File;

  constructor(file: File) {
    this.file = file;
  }
}

export interface IData {
  bucket: string;
  cacheControl?: never;
  contentDisposition: string;
  contentEncoding: string;
  contentLanguage?: never;
  contentType: string;
  customMetadata?: never;
  fullPath: string;
  generation: string;
  md5Hash: string;
  metageneration: string;
  name: string;
  size: number;
  timeCreated: string;
  type: string;
  updated: string;
}
