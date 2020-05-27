import React from "react"

export default function asComponent(data, { getModule }) {
  if (data != null) {
    const component = getModule(data.moduleId)
    return (...additionalArgs) =>
      React.createElement(component, { ...data.args, ...additionalArgs })
  } else {
    return () => null
  }
}
