import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const TeacherEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Abdullah" source="abdullah" />
        <TextInput label="Mohammed" source="mohammed" />
        <TextInput label="SaifAlNar" source="saifAlNar" />
      </SimpleForm>
    </Edit>
  );
};
