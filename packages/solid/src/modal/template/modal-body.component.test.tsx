import { describe, it, expect } from 'vitest';
import { render } from '@solidjs/testing-library';
import { ModalBody } from './modal-body.component';

describe('ModalBody', () => {
  it('should render as expected', () => {
    const { getByText } = render(() => <ModalBody>Hello world</ModalBody>);
    const modalBody = getByText('Hello world');
    expect(modalBody).toBeInTheDocument();
    expect(modalBody).toHaveClass('spx spx-modal-body');
  });
});
