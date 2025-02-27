import { describe, it, expect } from 'vitest';
import { render } from '@solidjs/testing-library';
import { ModalFooter } from './modal-footer.component';

describe('ModalFooter', () => {
  it('should render as expected', () => {
    const { getByText } = render(() => <ModalFooter>Hello world</ModalFooter>);
    const modalHeader = getByText('Hello world');
    expect(modalHeader).toBeInTheDocument();
    expect(modalHeader).toHaveClass('spx spx-modal-footer');
  });
});
