export class FileUpload {
  key = '';
  name = '';
  url = '';
  file: File;

  constructor(file: File) {
    this.file = file;
  }
}
