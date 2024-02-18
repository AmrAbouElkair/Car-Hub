import { CarProps } from ".";

type CarDetailsProps = {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
};
