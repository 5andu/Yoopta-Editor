import { Callout } from './plugin';
import { CalloutDefaultRenderer } from './renders/CalloutRenderer';
import { CalloutElement } from './types';
import './styles.css';

declare module 'slate' {
  interface CustomTypes {
    Element: CalloutElement;
  }
}

export default Callout;
export { CalloutElement, CalloutDefaultRenderer };
