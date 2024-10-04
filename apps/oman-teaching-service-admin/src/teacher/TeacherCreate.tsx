import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const TeacherCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Abdullah" source="abdullah" />
        <TextInput label="Mohammed" source="mohammed" />
        <TextInput label="SaifAlNar" source="saifAlNar" />
      </SimpleForm>
    </Create>
  );
};
