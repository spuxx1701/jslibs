import { describe, it, expect, vi } from 'vitest';
import { render } from '@solidjs/testing-library';
import { Button } from './button.component';

describe('Button', () => {
  it('should render with default values', () => {
    const { getByRole } = render(() => <Button>Click me</Button>);
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('spx-button');
    expect(button).toHaveTextContent('Click me');
    expect(button.querySelector('iconify-icon')).not.toBeInTheDocument();
    expect(button).toHaveAttribute('spx-variant', 'contained');
    expect(button).toHaveAttribute('spx-color', 'primary');
    expect(button).not.toHaveAttribute('spx-rounded');
    expect(button).not.toBeDisabled();
  });

  it('should render with custom values', () => {
    const { getByRole } = render(() => (
      <Button
        icon="mdi:star"
        variant="outlined"
        color="gradient"
        rounded
        disabled
        attrs={{
          id: 'button',
        }}
      >
        Click me
      </Button>
    ));
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('spx-button');
    expect(button).toHaveTextContent('Click me');
    expect(button.querySelector('iconify-icon')).toBeInTheDocument();
    expect(button.querySelector('iconify-icon')).toHaveAttribute('icon', 'mdi:star');
    expect(button).toHaveAttribute('spx-variant', 'outlined');
    expect(button).toHaveAttribute('spx-color', 'gradient');
    expect(button).toHaveAttribute('spx-rounded');
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('id', 'button');
  });

  it('should call onClick handler', () => {
    const onClick = vi.fn();
    const { getByRole } = render(() => <Button onClick={onClick}>Click me</Button>);
    const button = getByRole('button');
    button.click();
    expect(onClick).toHaveBeenCalledTimes(1);
    const event = onClick.mock.calls[0][0];
    expect(event).toBeInstanceOf(MouseEvent);
  });

  it('should render loader and disable button when loading', async () => {
    const onClick = vi.fn();
    const { getByRole } = render(() => (
      <Button onClick={onClick} loading={true}>
        Click me
      </Button>
    ));
    const button = getByRole('button');
    expect(button).toBeDisabled();
    expect(button.querySelector('iconify-icon')).toBeInTheDocument();
    expect(button.querySelector('iconify-icon')).toHaveAttribute(
      'icon',
      'svg-spinners:ring-resize',
    );
    button.click();
    expect(onClick).not.toHaveBeenCalled();
  });
});
