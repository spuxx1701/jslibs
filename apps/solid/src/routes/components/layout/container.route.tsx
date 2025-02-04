import { Divider, Heading, Container } from '@spuxx/solid';

export const ContainerRoute = () => {
  return (
    <Container tag="article">
      <Heading level={1}>Container</Heading>
      <Divider color="gradient" />
      <Container class="my-4">
        <Heading level={2}>Variants & Colors</Heading>
        <Divider color="gradient" />
        <Container class="my-4">
          <p>no variant (default)</p>
        </Container>
        <Container class="my-4" variant="contained">
          <p>contained</p>
        </Container>
        <Container class="my-4" variant="contained" color="primary">
          <p>contained, primary color</p>
        </Container>
        <Container class="my-4" variant="contained" color="gradient">
          <p>contained, gradient</p>
        </Container>
        <Container class="my-4" variant="outlined">
          <p>outlined</p>
        </Container>
        <Container class="my-4" variant="outlined" color="primary">
          <p>outlined, primary color</p>
        </Container>
        <Container class="my-4" variant="colored">
          <p>colored</p>
        </Container>
        <Container class="my-4" variant="colored" color="primary">
          <p>colored, primary color</p>
        </Container>
      </Container>

      <Container class="my-4">
        <Heading level={2}>Dynamic Tags</Heading>
        <Divider color="gradient" />
        <Container class="my-4">
          <p>div (default)</p>
        </Container>
        <Container class="my-4" tag="article">
          <p>article</p>
        </Container>
        <Container class="my-4" tag="section">
          <p>section</p>
        </Container>
      </Container>

      <Container class="my-4">
        <Heading level={2}>Misc</Heading>
        <Divider color="gradient" />
        <Container class="my-4" noPadding variant="contained">
          <p>No padding</p>
        </Container>
      </Container>
    </Container>
  );
};
