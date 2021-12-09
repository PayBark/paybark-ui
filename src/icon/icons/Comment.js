const Comment = (props) => {
  const { className, dataTestId } = props;
  return (
    <svg
      version="1.0"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="64px"
      height="64px"
      viewBox="0 0 64 64"
      enableBackground="new 0 0 64 64"
      xmlSpace="preserve"
      fill="none"
      className={className}
      data-testid={dataTestId}
    >
      <g>
        <path
          d="M60,0H4C1.789,0,0,1.789,0,4v40c0,2.211,1.789,4,4,4h8v14c0,0.809,0.486,1.539,1.234,1.848
           C13.482,63.951,13.742,64,14,64c0.52,0,1.031-0.203,1.414-0.586L30.828,48H60c2.211,0,4-1.789,4-4V4C64,1.789,62.211,0,60,0z
            M60,42c0,1.105-0.895,2-2,2c0,0-25.188,0-27.094,0S27.5,45.5,27.5,45.5L16,57.002V46c0-1.105-0.895-2-2-2H6c-1.105,0-2-0.895-2-2
           V6c0-1.105,0.895-2,2-2h52c1.105,0,2,0.895,2,2V42z"
        />
        <path d="M18,18h12c1.105,0,2-0.895,2-2s-0.895-2-2-2H18c-1.105,0-2,0.895-2,2S16.895,18,18,18z" />
        <path d="M46,22H18c-1.105,0-2,0.895-2,2s0.895,2,2,2h28c1.105,0,2-0.895,2-2S47.105,22,46,22z" />
        <path d="M38,30H18c-1.105,0-2,0.895-2,2s0.895,2,2,2h20c1.105,0,2-0.895,2-2S39.105,30,38,30z" />
      </g>
    </svg>
  );
};

export default Comment;
