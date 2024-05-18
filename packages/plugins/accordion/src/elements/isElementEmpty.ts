import { Editor, Element } from 'slate';
import { findSlateBySelectionPath, SlateElement, YooEditor } from '@yoopta/editor';

export function isElementEmpty<TElementKeys extends string>(
  editor: YooEditor,
  blockId: string,
  elementType: TElementKeys,
): boolean | undefined {
  const block = editor.children[blockId];

  if (!block) {
    throw new Error(`Block with id ${blockId} not found`);
  }

  const slate = findSlateBySelectionPath(editor, { at: [block.meta.order] });

  if (!slate) {
    console.warn('No slate found');
    return;
  }

  const [elementEntry] = Editor.nodes<SlateElement>(slate, {
    at: slate.selection || [0],
    match: (n) => Element.isElement(n) && n.type === elementType,
  });

  if (elementEntry) {
    const [node, nodePath] = elementEntry;
    const string = Editor.string(slate, nodePath);
    console.log({ node, nodePath, string });

    return string.trim().length === 0;
  }

  return false;
}
