import React from "react";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{t("privacyPolicy.title")}</h1>
      <p className="mb-4">{t("privacyPolicy.description")}</p>
      
      <h2 className="text-xl font-semibold mb-2">{t("privacyPolicy.dataCollection.title")}</h2>
      <p className="mb-4">{t("privacyPolicy.dataCollection.description")}</p>
      
      <h2 className="text-xl font-semibold mb-2">{t("privacyPolicy.thirdParty.title")}</h2>
      <p className="mb-4">{t("privacyPolicy.thirdParty.description")}</p>
      
      <h2 className="text-xl font-semibold mb-2">{t("privacyPolicy.changes.title")}</h2>
      <p className="mb-4">{t("privacyPolicy.changes.description")}</p>
      
      <h2 className="text-xl font-semibold mb-2">{t("privacyPolicy.contact.title")}</h2>
      <p className="mb-4">{t("privacyPolicy.contact.description")}</p>
    </div>
  );
};

export default PrivacyPolicy;