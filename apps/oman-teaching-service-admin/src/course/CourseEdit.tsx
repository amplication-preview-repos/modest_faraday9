import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CourseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Algebra" source="algebra" />
        <TextInput label="Calculus" source="calculus" />
        <TextInput label="Math" source="math" />
        <TextInput label="Physics" source="physics" />
      </SimpleForm>
    </Edit>
  );
};
