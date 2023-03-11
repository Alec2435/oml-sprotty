/** @jsx html */

import { injectable } from "inversify";
import { VNode } from "snabbdom";
import { html, RenderingContext, IView, SButton } from "sprotty";

@injectable()
export class PaletteButtonView implements IView {
  render(button: SButton, context: RenderingContext): VNode {
    return <div>{button.id}</div>;
  }
}
