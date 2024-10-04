import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CourseList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Courses"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Algebra" source="algebra" />
        <TextField label="Calculus" source="calculus" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Math" source="math" />
        <TextField label="Physics" source="physics" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
