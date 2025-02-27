import { describe, it, expect } from 'vitest';
import { render } from '@solidjs/testing-library';
import { Heading } from './heading.component';

describe('Heading', () => {
  it('should render a level 1 heading', () => {
    const { getByText } = render(() => <Heading level={1}>Heading</Heading>);
    const heading = getByText('Heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('spx-heading');
    expect(heading.tagName.toLowerCase()).toBe('h1');
  });

  it('should render a level 1 heading', () => {
    const { getByText } = render(() => <Heading level={1}>Heading</Heading>);
    const heading = getByText('Heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('spx-heading');
    expect(heading.tagName.toLowerCase()).toBe('h1');
  });

  it('should render a level 2 heading', () => {
    const { getByText } = render(() => <Heading level={2}>Heading</Heading>);
    const heading = getByText('Heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('spx-heading');
    expect(heading.tagName.toLowerCase()).toBe('h2');
  });

  it('should render a level 3 heading', () => {
    const { getByText } = render(() => <Heading level={3}>Heading</Heading>);
    const heading = getByText('Heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('spx-heading');
    expect(heading.tagName.toLowerCase()).toBe('h3');
  });

  it('should render a level 4 heading', () => {
    const { getByText } = render(() => <Heading level={4}>Heading</Heading>);
    const heading = getByText('Heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('spx-heading');
    expect(heading.tagName.toLowerCase()).toBe('h4');
  });

  it('should render a level 5 heading', () => {
    const { getByText } = render(() => <Heading level={5}>Heading</Heading>);
    const heading = getByText('Heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('spx-heading');
    expect(heading.tagName.toLowerCase()).toBe('h5');
  });

  it('should render a level 6 heading', () => {
    const { getByText } = render(() => <Heading level={6}>Heading</Heading>);
    const heading = getByText('Heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('spx-heading');
    expect(heading.tagName.toLowerCase()).toBe('h6');
  });
});
