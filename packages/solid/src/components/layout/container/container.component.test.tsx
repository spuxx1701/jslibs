import { describe, it, expect } from 'vitest';
import { render } from '@solidjs/testing-library';
import { Container } from './container.component';
import { BaseColor } from '@spuxx/browser-utils';

describe('Container', () => {
  it('should render with default values', async () => {
    const { getByText } = render(() => <Container>Content</Container>);
    const container = getByText('Content');
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass('spx-container');
    expect(container).toHaveTextContent('Content');
    expect(container.tagName.toLowerCase()).toBe('div');
    expect(container).not.toHaveAttribute('spx-variant');
    expect(container).toHaveAttribute('spx-color', 'surface');
    expect(container).not.toHaveAttribute('spx-no-padding');
  });

  it('should render with custom values', async () => {
    const { getByText } = render(() => (
      <Container
        tag="article"
        class="my-class"
        color={BaseColor.gradient}
        variant="contained"
        noPadding
        attrs={{
          id: 'container',
        }}
      >
        Content
      </Container>
    ));
    const container = getByText('Content');
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass('spx-container');
    expect(container).toHaveTextContent('Content');
    expect(container.tagName.toLowerCase()).toBe('article');
    expect(container).toHaveAttribute('spx-variant', 'contained');
    expect(container).toHaveAttribute('spx-color', 'gradient');
    expect(container).toHaveAttribute('spx-no-padding');
    expect(container).toHaveAttribute('id', 'container');
  });
});
