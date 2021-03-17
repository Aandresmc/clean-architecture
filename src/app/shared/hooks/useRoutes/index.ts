import { useRouteMatch } from "react-router-dom";
import { ILink, IRoute } from "../../types";

type value = [IRoute[], ILink[]];

export function useRoutes(routes: IRoute[], links: ILink[] = []): value {
  let { path } = useRouteMatch();
  if (!routes) {
    return [[], []];
  }
  const mappedRoutes = routes.map((route) => ({
    ...route,
    path: path + route.path,
  }));
  const mappedLinks = links.map((link) => ({ ...link, to: path + link.to }));
  return [mappedRoutes, mappedLinks];
}
