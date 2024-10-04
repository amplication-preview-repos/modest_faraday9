import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type StudentWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  registrationDate?: DateTimeNullableFilter;
  username?: StringNullableFilter;
};
