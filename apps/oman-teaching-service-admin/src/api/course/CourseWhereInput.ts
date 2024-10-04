import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CourseWhereInput = {
  algebra?: StringNullableFilter;
  calculus?: StringNullableFilter;
  id?: StringFilter;
  math?: StringNullableFilter;
  physics?: StringNullableFilter;
};
