import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CourseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Algebra" source="algebra" />
        <TextInput label="Calculus" source="calculus" />
        <TextInput label="Math" source="math" />
        <TextInput label="Physics" source="physics" />
      </SimpleForm>
    </Create>
  );
};
