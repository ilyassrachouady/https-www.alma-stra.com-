/** Add only client-approved PDFs here after placing them under public/documents/. */
export type CompanyDocument = {
  title: string;
  description: string;
  href: `/documents/${string}.pdf`;
};

export const companyDocuments: CompanyDocument[] = [];
