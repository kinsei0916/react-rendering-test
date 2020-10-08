import React, { createElement } from 'react'

/**
 * Context内の一部のデータをComponentにpropsとして渡します。
 */
export function connect<Props, ContextProps>(
  Component: React.FC<Props & ContextProps>,
  selector: () => ContextProps
): React.FC<Props> {
  return (props: Props) => {
    const values = selector()
    return createElement(Component, { ...values, ...props })
  }
}
