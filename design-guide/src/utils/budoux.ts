import { loadDefaultJapaneseParser } from 'budoux';

class BudouXJapaneseElement extends HTMLElement {
    parser = loadDefaultJapaneseParser();

    connectedCallback() {
        if (this.textContent) {
            this.innerHTML = this.parser.translateHTMLString(this.innerHTML);
        }
    }
}

export function registerBudouX() {
    if (typeof customElements !== 'undefined' && !customElements.get('budoux-ja')) {
        customElements.define('budoux-ja', BudouXJapaneseElement);
    }
}

// === React specific BudouX Wrapper (Safe for Shadcn components) ===
import React, { isValidElement, type ReactNode } from 'react';

const parser = loadDefaultJapaneseParser();

function processText(text: string): ReactNode {
    if (!text.trim()) return text;
    // Split the text into semantic Japanese chunks
    const chunks = parser.parse(text);
    // Join chunks using zero-width space (\u200B) for natural breaking points
    const textWithBreaks = chunks.join('\u200B');
    return React.createElement(
        'span',
        { className: 'budoux-text', style: { wordBreak: 'keep-all', overflowWrap: 'anywhere' } },
        textWithBreaks
    );
}

/**
 * Recursively applies BudouX word-breaking to string children in a React node logic wrapper.
 * This is totally safe for generic React elements as it will only process raw strings.
 */
export function applyBudouX(node: ReactNode): ReactNode {
    if (typeof node === 'string') {
        return processText(node);
    }

    if (Array.isArray(node)) {
        return React.Children.map(node, applyBudouX);
    }

    if (isValidElement(node)) {
        if (typeof node.type === 'string' && ['span', 'b', 'strong', 'i', 'em', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(node.type)) {
            if (typeof node.props === 'object' && node.props !== null && 'children' in node.props) {
                return React.cloneElement(node as React.ReactElement<any>, {
                    ...node.props,
                    children: applyBudouX((node.props as { children: ReactNode }).children),
                });
            }
        }
    }

    return node;
}

export function Budoux({ children }: { children: ReactNode }) {
    return React.createElement(React.Fragment, null, applyBudouX(children));
}
