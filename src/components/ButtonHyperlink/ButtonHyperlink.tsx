import React, { forwardRef, useRef, FC, RefObject } from 'react';
import { useButton } from '@react-aria/button';
import FocusRing from '../FocusRing';

import { DEFAULTS, STYLE } from './ButtonHyperlink.constants';
import { Props } from './ButtonHyperlink.types';
import './ButtonHyperlink.style.scss';
import classnames from 'classnames';

const ButtonHyperlink: FC<Props> = forwardRef(
  (props: Props, providedRef: RefObject<HTMLAnchorElement>) => {
    const { className, title } = props;
    const internalRef = useRef();
    const ref = providedRef || internalRef;

    const mutatedProps = {
      ...props,
      isDisabled: props.disabled,
    };

    delete mutatedProps.disabled;
    delete mutatedProps.className;

    const { buttonProps } = useButton({ ...mutatedProps, elementType: 'a' }, ref);

    return (
      <FocusRing disabled={props.disabled}>
        <a
          className={classnames(STYLE.wrapper, className)}
          {...buttonProps}
          ref={ref}
          data-disabled={props.disabled || DEFAULTS.DISABLED}
          title={title}
        >
          {props.children}
        </a>
      </FocusRing>
    );
  }
);

ButtonHyperlink.displayName = 'ButtonHyperlink';

export default ButtonHyperlink;
