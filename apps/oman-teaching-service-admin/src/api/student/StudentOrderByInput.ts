import { SortOrder } from "../../util/SortOrder";

export type StudentOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  registrationDate?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
