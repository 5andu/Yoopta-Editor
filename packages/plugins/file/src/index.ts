import { File } from './plugin';
import { FileElement, FileElementProps, FileUploadResponse } from './types';
import './styles.css';

declare module 'slate' {
  interface CustomTypes {
    Element: FileElement;
  }
}

export default File;
export { FileElement, FileElementProps, FileUploadResponse };
