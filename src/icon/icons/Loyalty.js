const LoyaltyIcon = (props) => {
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
      <path d="M9.5 19c-0.084 0-0.167-0.021-0.243-0.063-0.094-0.052-2.326-1.301-4.592-3.347-1.341-1.21-2.411-2.448-3.183-3.68-0.984-1.571-1.482-3.139-1.482-4.66 0-2.895 2.355-5.25 5.25-5.25 0.98 0 2.021 0.367 2.931 1.034 0.532 0.39 0.985 0.86 1.319 1.359 0.334-0.499 0.787-0.969 1.319-1.359 0.91-0.667 1.951-1.034 2.931-1.034 2.895 0 5.25 2.355 5.25 5.25 0 1.521-0.499 3.089-1.482 4.66-0.771 1.232-1.842 2.47-3.182 3.68-2.266 2.046-4.498 3.295-4.592 3.347-0.076 0.042-0.159 0.063-0.243 0.063zM5.25 3c-2.343 0-4.25 1.907-4.25 4.25 0 3.040 2.35 5.802 4.321 7.585 1.76 1.592 3.544 2.708 4.179 3.087 0.635-0.379 2.419-1.495 4.179-3.087 1.971-1.782 4.321-4.545 4.321-7.585 0-2.343-1.907-4.25-4.25-4.25-1.703 0-3.357 1.401-3.776 2.658-0.068 0.204-0.259 0.342-0.474 0.342s-0.406-0.138-0.474-0.342c-0.419-1.257-2.073-2.658-3.776-2.658z" />
    </svg>
  );
};

export default LoyaltyIcon;
