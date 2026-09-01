import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center justify-center py-32 text-center">
      <p className="font-display text-6xl text-primary-light">404</p>
      <h1 className="mt-4 font-display text-2xl font-medium text-secondary">
        No encontramos esta página
      </h1>
      <p className="mt-2 max-w-md text-sm text-text-muted">
        Puede que el enlace esté roto o que la página se haya movido.
      </p>
      <Button href="/" className="mt-8">Volver al inicio</Button>
    </Container>
  );
}
