import { Divider, Heading, Container } from '@spuxx/solid';

export const ContainerRoute = () => {
  return (
    <Container tag="article">
      <Heading level={1}>Container</Heading>
      <Divider color="accent" />
      <Container class="my-4">
        <Heading level={2}>Variants & Colors</Heading>
        <Divider color="accent" />
        <Container class="my-4">
          <p>Transparent (default)</p>
        </Container>
        <Container class="my-4" variant="outlined">
          <p>Outlined</p>
        </Container>
        <Container class="my-4" variant="outlined" color="primary">
          <p>Outlined, primary color</p>
        </Container>
        <Container class="my-4" variant="contained">
          <p>Contained</p>
        </Container>
        <Container class="my-4" variant="contained" color="primary">
          <p>Contained, primary color</p>
        </Container>
      </Container>

      <Container class="my-4">
        <Heading level={2}>Dynamic Tags</Heading>
        <Divider color="accent" />
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
    </Container>
  );
};
