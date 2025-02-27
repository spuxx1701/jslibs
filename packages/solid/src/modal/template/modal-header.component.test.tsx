import { describe, it, expect } from 'vitest';
import { render } from '@solidjs/testing-library';
import { ModalHeader } from './modal-header.component';
import * as Dialog from '@corvu/dialog';

describe('ModalHeader', () => {
  it('should render with default values', () => {
    const { getByText } = render(() => (
      <Dialog.Root>
        <ModalHeader title="Hello world" />
      </Dialog.Root>
    ));
    const modalHeader = getByText('Hello world').parentElement as HTMLElement;
    expect(modalHeader).toBeInTheDocument();
    expect(modalHeader).toHaveClass('spx spx-modal-header');
    expect(modalHeader).not.toHaveAttribute('spx-color');
    expect(modalHeader.querySelector('button[data-corvu-dialog-close]')).toBeInTheDocument();
  });

  it('should render with custom values', () => {
    const { getByText } = render(() => (
      <Dialog.Root>
        <ModalHeader title="Hello world" icon="mdi:star" color="gradient" hideClose />
      </Dialog.Root>
    ));
    const modalHeader = getByText('Hello world').parentElement as HTMLElement;
    expect(modalHeader).toBeInTheDocument();
    expect(modalHeader).toHaveClass('spx spx-modal-header');
    expect(modalHeader).toHaveAttribute('spx-color', 'gradient');
    expect(modalHeader.querySelector('iconify-icon[icon="mdi:star"]')).toBeInTheDocument();
    expect(modalHeader.querySelector('button[data-corvu-dialog-close]')).not.toBeInTheDocument();
  });
});
