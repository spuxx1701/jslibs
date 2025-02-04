import {
  Button,
  Container,
  Divider,
  Heading,
  Dialog,
  ConfirmDialog,
  DialogContainer,
} from '@spuxx/solid';
import { Component } from 'solid-js';

export const DialogRoute: Component = () => {
  return (
    <Container tag="article">
      <DialogContainer />

      <Heading level={1}>Dialog</Heading>
      <Divider color="gradient" />
      <Container tag="section" class="my-4">
        <Heading level={2}>Confirm Dialog</Heading>
        <Divider color="gradient" />
        <Button
          onClick={() => {
            Dialog.show(ConfirmDialog, {});
          }}
        >
          Open Confirm Dialog
        </Button>
      </Container>
    </Container>
  );
};
