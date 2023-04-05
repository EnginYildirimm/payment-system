export type CardType = {
  id: number;
  title: string;
  cardnumber: string;
  validthru: string;
  name: string;
  cvc: number;
};
export const cards: CardType[] = [
  {
    id: 1,
    title: "BANK CARD",
    cardnumber: "1234 5678 9123 4567",
    validthru: "07/26",
    name: "ENGİN YILDIRIM",
    cvc: 123,
  },
  {
    id: 2,
    title: "CREDİT CARD",
    cardnumber: "9876 5432 1987 6543",
    validthru: "07/26",
    name: "ENGİN YILDIRIM",
    cvc: 321,
  },
];
