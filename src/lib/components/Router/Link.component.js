import React, { forwardRef, createElement } from 'react';
import { isFunction, isString } from 'lodash';
import { RouterContext } from './RouterContext';
import { withAuth } from '../index';

const forwardRefFill = C => C;

const isEventModified = event => !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);

const normalize = (to, currentLocation = {}) => isFunction(to) ? to(currentLocation) : to;
const resolve = (to, basename) => isString(to) ? `${basename}${to}` : to;

const LinkAnchor = forwardRef(
	(
		{
			navigate, 
			onClick, 
			innerRef,
			...rest
		},
		forwardedRef
	) => {
		const { target } = rest;

		const props = {
			...rest,
			ref: forwardRefFill !== forwardRef ? forwardedRef || innerRef : innerRef,
			onClick: event => {
				try {
					isFunction(onClick) && onClick(event);
				} catch(err) {
					event.preventDefault();
					throw err;
				}

				if(
					!event.defaultPrevented && 
					event.button === 0 && 
					(!target || target === '_self') &&
					!isEventModified(event)
				) {
					event.preventDefault();
					navigate();
				}
			}
		};

		return <a {...props} />;
	}
);

const Link = forwardRef(
	(
		{
			component = LinkAnchor,
			replace,
			to,
			innerRef,
			...rest
		},
		forwardedRef
	) => (
		<RouterContext.Consumer>
			{context => {
				const { history, location = history.location, basename = '' } = context;

				const loc = normalize(resolve(to, basename), location);
				const href = loc ? history.createHref(loc) : '';

				const props = {
					...rest,
					href,
					ref: forwardRefFill !== forwardRef ? forwardedRef || innerRef : innerRef,
					navigate: () => {
						const method = replace ? history.replace : history.push;

						method(href);
					}
				};

				return createElement(component, props);
			}}
		</RouterContext.Consumer>
	)
);

export default ({ roles = [], ...props }) => withAuth(roles)(Link, props);