import { describe, it, expect } from 'vitest';
import { render } from '@solidjs/testing-library';
import { Divider } from './divider.component';
import { BaseColor, ContentColor } from '@spuxx/browser-utils';

describe('Divider', () => {
  it('should render with default values', async () => {
    const { getByRole } = render(() => <Divider />);
    const divider = getByRole('separator');
    expect(divider).toBeInTheDocument();
    expect(divider).toHaveClass('spx-divider');
    expect(divider).toHaveAttribute('spx-color', ContentColor.subtle);
    expect(divider).toHaveAttribute('spx-variant', 'straight');
    expect(divider).not.toHaveAttribute('spx-vertical');
  });

  it('should render with custom attributes', async () => {
    const { getByRole } = render(() => (
      <Divider
        class="my-class"
        color={BaseColor.gradient}
        variant="sleek"
        vertical
        attrs={{
          id: 'foo',
        }}
      />
    ));
    const divider = getByRole('separator');
    expect(divider).toBeInTheDocument();
    expect(divider).toHaveClass('spx-divider');
    expect(divider).toHaveClass('my-class');
    expect(divider).toHaveAttribute('spx-color', BaseColor.gradient);
    expect(divider).toHaveAttribute('spx-variant', 'sleek');
    expect(divider).toHaveAttribute('spx-vertical');
    expect(divider).toHaveAttribute('id', 'foo');
  });
});
