import * as React from "react";
import UpPagination from "./UpPagination";
import { getRootContainer } from "../../../Common/stories";
import { withKnobs } from "@storybook/addon-knobs";

export default { 
    title: 'Components/Containers/UpPagination',
    decorators : [withKnobs, getRootContainer('UpPagination')]
  };
  
  export const General =
    () => (
      <UpPagination
        total={100}
        onPageChange={(page, take, skip) => {
          console.log(page, take, skip);
        }}
      />
    )