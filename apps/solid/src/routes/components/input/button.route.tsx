import { Component } from 'solid-js';
import { Container, Heading, Button, Divider } from '@spuxx/solid';

export const ButtonRoute: Component = () => {
  return (
    <>
      <Container tag="article">
        <Heading level={1}>Button</Heading>
        <Divider color="gradient" />
        <Container>
          <Heading level={2}>Variants & Colors</Heading>
          <Divider color="gradient" />
          <Container>
            <Heading level={3}>contained (default)</Heading>
            <Button class="m-1">primary (default)</Button>
            <Button class="m-1" disabled>
              primary (default), disabled
            </Button>
            <Button class="m-1" color="secondary">
              secondary
            </Button>
            <Button class="m-1" color="secondary" disabled>
              secondary, disabled
            </Button>

            <Button class="m-1" color="gradient">
              gradient
            </Button>
            <Button class="m-1" color="gradient" disabled>
              gradient, disabled
            </Button>
            <Button class="m-1" loading>
              loading
            </Button>
          </Container>

          <Container>
            <Heading level={3}>outlined</Heading>
            <Button class="m-1" variant="outlined">
              primary (default)
            </Button>
            <Button class="m-1" variant="outlined" disabled>
              primary (default), disabled
            </Button>
            <Button class="m-1" variant="outlined" color="secondary">
              secondary
            </Button>
            <Button class="m-1" variant="outlined" color="secondary" disabled>
              secondary, disabled
            </Button>
            <Button class="m-1" variant="outlined" color="text-default">
              text-default
            </Button>
            <Button class="m-1" variant="outlined" color="text-default" disabled>
              text-default, disabled
            </Button>
            <Button class="m-1" variant="outlined" color="gradient">
              gradient
            </Button>
            <Button class="m-1" variant="outlined" color="gradient" disabled>
              gradient, disabled
            </Button>
            <Button class="m-1" variant="outlined" loading>
              loading
            </Button>
          </Container>

          <Container>
            <Heading level={3}>colored</Heading>
            <Button class="m-1" variant="colored">
              primary (default)
            </Button>
            <Button class="m-1" variant="colored" disabled>
              primary (default), disabled
            </Button>
            <Button class="m-1" variant="colored" color="secondary">
              secondary
            </Button>
            <Button class="m-1" variant="colored" color="secondary" disabled>
              secondary, disabled
            </Button>
            <Button class="m-1" variant="colored" color="text-default">
              text-default
            </Button>
            <Button class="m-1" variant="colored" color="text-default" disabled>
              text-default, disabled
            </Button>
            <Button class="m-1" variant="colored" color="gradient">
              gradient
            </Button>
            <Button class="m-1" variant="colored" color="gradient" disabled>
              gradient, disabled
            </Button>
            <Button class="m-1" variant="colored" loading>
              loading
            </Button>
          </Container>
        </Container>

        <Container>
          <Heading level={2}>Icon</Heading>
          <Divider color="gradient" />
          <Button class="m-1" icon="mdi:star">
            Icon with Text
          </Button>
          <Button class="m-1" icon="mdi:star" loading>
            Icon with Text (loading)
          </Button>
          <Button class="m-1" icon="mdi:star" title="Icon only" />
          <Button class="m-1" icon="mdi:star" title="Icon only (loading)" loading />
        </Container>

        <Container>
          <Heading level={2}>Rounded</Heading>
          <Divider color="gradient" />
          <Container>
            <Heading level={3}>contained (default)</Heading>
            <Button class="m-1" rounded>
              Rounded
            </Button>
            <Button class="m-1" icon="mdi:star" rounded>
              Rounded with Icon and Text
            </Button>
            <Button class="m-1" icon="mdi:star" title="Rounded (icon only)" rounded />
          </Container>

          <Container>
            <Heading level={3}>outlined</Heading>
            <Button class="m-1" variant="outlined" rounded>
              Rounded
            </Button>
            <Button class="m-1" variant="outlined" icon="mdi:star" rounded>
              Rounded with Icon and Text
            </Button>
            <Button
              class="m-1"
              variant="outlined"
              icon="mdi:star"
              title="Rounded (icon only)"
              rounded
            />
          </Container>
        </Container>
      </Container>
    </>
  );
};
