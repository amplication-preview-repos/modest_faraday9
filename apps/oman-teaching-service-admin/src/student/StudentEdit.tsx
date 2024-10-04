import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const StudentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="lastName" source="lastName" />
        <DateTimeInput label="registrationDate" source="registrationDate" />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
