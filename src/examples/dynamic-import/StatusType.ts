export const StatusType: { [key: string]: string } = {
  accepted: "Disetujui",
  approved: "Diterima",
  rejected: "Ditolak",
};

export const GenerateStatus = (status: string) => {
  return `Statusnya Adalah : ${status}`;
};
