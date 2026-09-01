import { getTranslations } from "next-intl/server";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <Container className="flex flex-col items-center justify-center py-32 text-center">
      <p className="font-display text-6xl text-primary-light">404</p>
      <h1 className="mt-4 font-display text-2xl font-medium text-secondary">
        {t("title")}
      </h1>
      <p className="mt-2 max-w-md text-sm text-text-muted">{t("description")}</p>
      <Button href="/" className="mt-8">{t("cta")}</Button>
    </Container>
  );
}
