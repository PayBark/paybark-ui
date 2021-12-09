const ChatIcon = (props) => {
  const { className, dataTestId } = props;
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      data-testid={dataTestId}
    >
      <path d="M0.500054 19C0.275054 19 0.0780541 18.85 0.0180541 18.633C-0.0419459 18.416 0.0500541 18.186 0.243054 18.071C1.93405 17.057 2.63505 15.582 2.88405 14.892C1.04605 13.485 5.4067e-05 11.538 5.4067e-05 9.50002C5.4067e-05 8.47102 0.258054 7.47402 0.768054 6.53602C1.25405 5.64202 1.94805 4.84102 2.82905 4.15502C4.61605 2.76502 6.98505 1.99902 9.50005 1.99902C12.0151 1.99902 14.3841 2.76502 16.1711 4.15502C17.0521 4.84002 17.7461 5.64102 18.2321 6.53602C18.7421 7.47302 19.0001 8.47002 19.0001 9.50002C19.0001 10.53 18.7421 11.526 18.2321 12.464C17.7461 13.358 17.0521 14.159 16.1711 14.845C14.3841 16.235 12.0151 17.001 9.50005 17.001C8.46705 17.001 7.45305 16.872 6.48405 16.616C6.05505 16.902 5.25305 17.409 4.29505 17.886C2.80705 18.626 1.53105 19.001 0.501054 19.001L0.500054 19ZM9.50005 3.00002C4.81305 3.00002 1.00005 5.91602 1.00005 9.50002C1.00005 11.315 2.00505 13.062 3.75605 14.292C3.92805 14.413 4.00605 14.628 3.95205 14.831C3.83505 15.267 3.43705 16.464 2.37205 17.619C3.67405 17.163 5.07605 16.372 6.11105 15.66C6.23405 15.575 6.38805 15.55 6.53205 15.591C7.48005 15.862 8.47905 16 9.50005 16C14.1871 16 18.0001 13.084 18.0001 9.50002C18.0001 5.91602 14.1871 3.00002 9.50005 3.00002Z" />
    </svg>
  );
};

export default ChatIcon;
