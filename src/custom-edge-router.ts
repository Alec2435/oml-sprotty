import {
  ManhattanEdgeRouter,
  SRoutableElement,
  ManhattanRouterOptions,
  edgeInProgressID,
} from "sprotty";

export class CustomRouter extends ManhattanEdgeRouter {
  override getOptions(edge: SRoutableElement): ManhattanRouterOptions {
    const defaultOptions = super.getOptions(edge);
    return edge.id === edgeInProgressID
      ? { ...defaultOptions, standardDistance: 1 }
      : defaultOptions;
  }
}
