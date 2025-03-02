const MessageColumn = ({ title, text }) => {
  return (
    <div className="text-center p-4 bg-[var(--secondary-blueish)] rounded-2xl">
      <h3 className="text-2xl font-semibold text-amber-50 mb-4">
        {title}
      </h3>
      <p className="text-[var(--color-cream)] text-l">
        {text}
      </p>
    </div>
  );
};

export default MessageColumn;