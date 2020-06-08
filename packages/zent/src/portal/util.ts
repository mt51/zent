import createElement from '../utils/dom/createElement';
import { unboxDOMNode } from '../utils/alcatraz';

export function getNodeFromSelector(selector: string | Element): Element {
  if (selector instanceof Element) {
    return unboxDOMNode(selector);
  }
  if (typeof selector === 'string') {
    const node = document.querySelector(selector);
    if (node) {
      return node;
    }
  }
  throw new Error('Invalid selector');
}

export function createContainerNode(parent: Node, tag = 'div') {
  const div = createElement(tag);
  return parent.appendChild(div);
}

export function removeAllChildren(node: Node) {
  while (node && node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

export function hasScrollbarY(element: Element) {
  if (element === document.body) {
    return element.scrollHeight > window.innerHeight;
  }
  return element.scrollHeight > element.clientHeight;
}
