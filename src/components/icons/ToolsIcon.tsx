import React, { FunctionComponent } from "react";

const ToolsIcon: FunctionComponent = ({ ...otherProps }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M14.7026 11.8189L11.5008 8.61723C10.8692 7.98565 9.92587 7.86261 9.16576 8.23718L6.25108 5.32263V3.62474L2.75127 1L1.00137 2.74983L3.62622 6.24949H5.32417L8.23885 9.16405C7.867 9.92413 7.98731 10.8674 8.61891 11.499L11.8207 14.7006C12.2199 15.0998 12.8652 15.0998 13.2616 14.7006L14.7026 13.2597C15.099 12.8606 15.099 12.2153 14.7026 11.8189V11.8189ZM10.0708 7.15174C10.8446 7.15174 11.5719 7.4525 12.1187 7.99932L12.6492 8.52973C13.0812 8.34108 13.4913 8.07861 13.8467 7.72317C14.8611 6.70882 15.2057 5.28161 14.883 3.98565C14.8229 3.73958 14.5139 3.65482 14.3334 3.83527L12.2992 5.86945L10.4426 5.56049L10.1337 3.70403L12.1679 1.66986C12.3484 1.48941 12.2609 1.18045 12.0121 1.11757C10.7161 0.797676 9.2888 1.14217 8.27713 2.15379C7.49788 2.93301 7.13149 3.96104 7.15063 4.98633L9.39543 7.23103C9.6169 7.17908 9.84658 7.15174 10.0708 7.15174ZM7.22993 9.39371L5.67962 7.84347L1.51267 12.013C0.829111 12.6965 0.829111 13.8038 1.51267 14.4874C2.19622 15.1709 3.30358 15.1709 3.98714 14.4874L7.36664 11.108C7.15884 10.5639 7.09595 9.97061 7.22993 9.39371V9.39371ZM2.75127 13.905C2.39035 13.905 2.09506 13.6097 2.09506 13.2488C2.09506 12.8852 2.38762 12.5926 2.75127 12.5926C3.11492 12.5926 3.40748 12.8852 3.40748 13.2488C3.40748 13.6097 3.11492 13.905 2.75127 13.905Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ToolsIcon;
