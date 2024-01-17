export interface CalendarProps {
    setSearchDate: (date: {
      year: number;
      month: number;
      day: number;
    }) => void;
  }