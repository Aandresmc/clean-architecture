import { RouteComponentProps } from "react-router";

export interface IRoute {
  path: string | string[];
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
  exact?: boolean;
}
export interface ILink {
  to: string;
  description: string;
  icon?: any;
}
