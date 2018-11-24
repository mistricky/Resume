import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

declare module "@fortawesome/react-fontawesome" {
  export interface Props extends React.DOMAttributes<any> {
    // icon: any;
    // mask?: IconDefinition;
  }
}
