import { Divider, Heading, Container } from '@spuxx/solid';

export const DividerRoute = () => {
  return (
    <Container tag="article" no-padding>
      <Heading level={1}>Divider</Heading>
      <Divider color="accent" />

      <Container tag="section" color="surface" class="my-2">
        <Heading level={2}>Colors</Heading>
        <label>
          Default
          <Divider />
        </label>
        <label>
          Accent
          <Divider color="accent" />
        </label>
        <label>
          Primary
          <Divider color="primary" />
        </label>
        <label>
          Custom
          <Divider color="rainbow" />
        </label>
      </Container>

      <Container tag="section" color="surface" class="my-2">
        <Heading level={2}>Vertical</Heading>
        <div class="flex h-6 items-center flex-row w-full border border-solid border-gray-500 p-2">
          Hello
          <Divider vertical />
          World
          <Divider color="accent" vertical />
          Foo
          <Divider color="primary" vertical />
          Bar
          <Divider color="background" vertical />
          Foz
          <Divider color="rainbow" vertical />
          Baz
        </div>
      </Container>
    </Container>
  );
};
