import { css } from 'lit-element';
const styles = css`
:host{display:flex;position:relative;z-index:0;margin:0;padding:0 var(--spectrum-tabs-focus-ring-padding-x,var(--spectrum-global-dimension-size-100));vertical-align:top;border-bottom-color:var(--spectrum-tabs-rule-color,var(--spectrum-global-color-gray-200))}#selectionIndicator{position:absolute;left:0;z-index:0;transition:transform var(--spectrum-tabs-selection-indicator-animation-duration,.13s) ease-in-out;transform-origin:top left;border-radius:var(--spectrum-tabs-rule-border-radius,1px);background-color:var(--spectrum-tabs-selection-indicator-color,var(--spectrum-global-color-gray-900))}:host([compact]) ::slotted(*){line-height:calc(var(--spectrum-tabs-quiet-compact-height,
var(--spectrum-global-dimension-size-400)) - var(--spectrum-tabs-rule-height, 2px))}:host([compact]) ::slotted(*),:host([compact]) ::slotted(*) .spectrum-Icon{height:calc(var(--spectrum-tabs-quiet-compact-height,
var(--spectrum-global-dimension-size-400)) - var(--spectrum-tabs-rule-height, 2px))}:host([direction=horizontal]){align-items:center;border-bottom:var(--spectrum-tabs-rule-height,2px) solid}:host([direction=horizontal]) ::slotted(*){vertical-align:top}:host([direction=horizontal]) ::slotted(*)+:not(.spectrum-Tabs-selectionIndicator){margin-left:var(--spectrum-tabs-item-gap,var(--spectrum-global-dimension-size-300))}:host([direction=horizontal]) #selectionIndicator{position:absolute;bottom:0;height:var(--spectrum-tabs-rule-height,2px);bottom:calc(-1*var(--spectrum-tabs-rule-height, 2px))}:host([direction=horizontal][compact]){box-sizing:initial;height:calc(var(--spectrum-tabs-quiet-compact-height,
var(--spectrum-global-dimension-size-400)) - var(--spectrum-tabs-rule-height, 2px));align-items:end}:host([quiet]){display:inline-flex;border-bottom-color:var(--spectrum-tabs-quiet-rule-color,transparent)}:host([direction=vertical]){display:inline-flex;flex-direction:column;padding:0;border-left:var(--spectrum-tabs-vertical-rule-width,2px) solid;border-left-color:var(--spectrum-tabs-vertical-rule-color,var(--spectrum-global-color-gray-200))}:host([direction=vertical]) ::slotted(*){height:var(--spectrum-tabs-vertical-item-height,var(--spectrum-global-dimension-size-550));padding:0 var(--spectrum-tabs-focus-ring-padding-x,var(--spectrum-global-dimension-size-100));margin-left:calc(var(--spectrum-tabs-vertical-item-margin-left,
var(--spectrum-global-dimension-size-150)) - var(--spectrum-tabs-focus-ring-padding-x,
var(--spectrum-global-dimension-size-100)));margin-bottom:var(--spectrum-tabs-vertical-item-gap,var(--spectrum-global-dimension-size-50))}:host([direction=vertical]) ::slotted(*):before{left:calc(-1*var(--spectrum-tabs-focus-ring-size, 2px));right:calc(-1*var(--spectrum-tabs-focus-ring-size, 2px));margin-top:calc(var(--spectrum-tabs-focus-ring-height,
var(--spectrum-global-dimension-size-400))/-2)}:host([direction=vertical][compact]) ::slotted(*){line-height:var(--spectrum-tabs-compact-vertical-item-height,var(--spectrum-global-dimension-size-400));margin-bottom:var(--spectrum-tabs-compact-vertical-item-gap,var(--spectrum-global-dimension-size-50))}:host([direction=vertical][compact]) ::slotted(*),:host([direction=vertical][compact]) ::slotted(*) .spectrum-Icon{height:var(--spectrum-tabs-compact-vertical-item-height,var(--spectrum-global-dimension-size-400))}:host([direction=vertical]) #selectionIndicator{position:absolute;left:0;width:var(--spectrum-tabs-vertical-rule-width,2px);left:calc(-1*var(--spectrum-tabs-vertical-rule-width, 2px))}:host([quiet]) #selectionIndicator{background-color:var(--spectrum-tabs-quiet-selection-indicator-color,var(--spectrum-global-color-gray-900))}:host([direction=vertical][compact]),:host([direction=vertical][quiet]){border-left-color:var(--spectrum-tabs-quiet-vertical-rule-color,transparent)}:host([direction=vertical][compact]) #selectionIndicator,:host([direction=vertical][quiet]) #selectionIndicator{background-color:var(--spectrum-tabs-quiet-selection-indicator-color,var(--spectrum-global-color-gray-900))}:host([direction=horizontal]){border-bottom-color:var(--spectrum-tabs-rule-color,var(--spectrum-global-color-gray-200))}:host([direction=horizontal]) ::slotted(sp-tab:not(:first-child)){margin-left:var(--spectrum-tabs-item-gap,var(--spectrum-global-dimension-size-300))}:host([compact]){--spectrum-tabs-height:var(--spectrum-tabs-quiet-compact-height)}
`;
export default styles;