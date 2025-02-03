import { Divider, Heading, Container } from '@spuxx/solid';

export const DividerRoute = () => {
  return (
    <Container tag="article">
      <Heading level={1}>Divider</Heading>
      <Divider color="gradient" />
      <Container class="my-4">
        <Heading level={2}>Colors</Heading>
        <Divider />
        text-subtle (default)
        <Divider />
        primary
        <Divider color="primary" />
        gradient
        <Divider color="gradient" />
      </Container>

      <Container class="my-4">
        <Heading level={2}>Variants</Heading>
        <Divider color="gradient" />
        straight (default)
        <Divider />
        sleek
        <Divider variant="sleek" />
      </Container>

      <Container class="my-4">
        <Heading level={2}>Vertical</Heading>
        <Divider color="gradient" />
        <div class="flex flex-row h-8 w-full items-center">
          Foo
          <Divider vertical />
          Bar
          <Divider vertical color="primary" />
          Hello
          <Divider vertical color="gradient" />
          World
        </div>
      </Container>
    </Container>
  );
};
