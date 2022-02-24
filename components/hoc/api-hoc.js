import React, { useEffect } from "react";
import PropTypes from "prop-types";

export default function ApiHoc(WrappedComponent) {
  const ApiComponent = (props) => {
    useEffect(() => {
      props.onLoad(props);
    }, []);
    const { onLoad, ...otherProps } = props;
    return <WrappedComponent {...otherProps} />;
  };

  ApiComponent.propTypes = {
    onLoad: PropTypes.func.isRequired,
  };

  return ApiComponent;
}
