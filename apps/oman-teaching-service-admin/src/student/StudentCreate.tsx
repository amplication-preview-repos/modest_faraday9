import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const StudentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="lastName" source="lastName" />
        <DateTimeInput label="registrationDate" source="registrationDate" />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Create>
  );
};
