import { Component } from 'solid-js';
import { Container, Heading, Button, Divider } from '@spuxx/solid';

export const ButtonRoute: Component = () => {
  return (
    <>
      <Container tag="article" data-color="primary">
        <Heading level={1}>Button</Heading>
        <Divider color="accent" />
        <Button>Foo Bar</Button>
      </Container>
    </>
  );
};
