import { CSSProperties, ReactNode } from 'react';

export interface Props {
  /**
   * Child components of this AriaToolbar.
   */
  children?: ReactNode;

  /**
   * Custom class for overriding this component's CSS.
   */
  className?: string;

  /**
   * Custom id for overriding this component's CSS.
   */
  id?: string;

  /**
   * Custom style for overriding this component's CSS.
   */
  style?: CSSProperties;

  /**
   * The orientation of the toolbar
   * horizontal -> left/right keys to navigate
   * vertical -> up/down keys to navigate
   * default is horizontal
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * The HTML ID of the element that this toolbar relates to
   */
  ariaControls?: string;

  /**
   * aria-label attribute for the toolbar
   */
  ariaLabel: string;

  /**
   * This handler is called when tab is pressed by one of the elements
   * within the toolbar.
   */
  onTabPress?: () => void;
}
