import { getTranslations } from "next-intl/server";
import { Button } from "@/components/NextUI";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: "home" });
  return (
    <>
      <h1 className="text-2xl">{t("title")}</h1>
      <Button color="primary">测试</Button>
    </>
  );
}