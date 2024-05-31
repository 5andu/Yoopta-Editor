import { Editor, Element, Path, Transforms } from 'slate';
import { findSlateBySelectionPath } from '../../utils/findSlateBySelectionPath';
import { SlateElement, YooEditor } from '../types';

export type UpdateElementOptions = {
  path?: Path;
};

export type UpdateElement<TElementKeys, TElementProps> = {
  type: TElementKeys;
  props: TElementProps;
};

export function updateElement<TElementKeys extends string, TElementProps>(
  editor: YooEditor,
  blockId: string,
  element: UpdateElement<TElementKeys, TElementProps>,
  options?: UpdateElementOptions,
) {
  const block = editor.children[blockId];

  if (!block) {
    throw new Error(`Block with id ${blockId} not found`);
  }

  const slate = findSlateBySelectionPath(editor, { at: [block.meta.order] });

  if (!slate) {
    console.warn('No slate found');
    return;
  }

  Editor.withoutNormalizing(slate, () => {
    const [elementEntry] = Editor.nodes<SlateElement>(slate, {
      at: options?.path || [0],
      match: (n) => Element.isElement(n) && n.type === element.type,
    });

    const elementToUpdate = elementEntry?.[0];

    const props = elementToUpdate?.props || {};
    const updatedNode = { props: { ...props, ...element.props } };

    Transforms.setNodes<SlateElement>(slate, updatedNode, {
      at: options?.path || [0],
      match: (n) => Element.isElement(n) && n.type === element.type,
      mode: 'lowest',
    });

    editor.applyChanges();
    editor.emit('change', editor.children);
  });
}
