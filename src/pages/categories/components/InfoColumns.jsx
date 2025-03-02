const InfoColumns = ({ columns, motive, background }) => {
  return (
    <div
      className="relative w-full min-h-auto bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Gradient & Blur Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative mx-auto pb-4 pt-7 max-w-screen-xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {columns.map((column, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-t from-[var(--secondary-blueish)] to-[var(--secondary-iceblue)] rounded-lg"
            >
              <h3 className="text-xl font-semibold text-black mb-4">
                {column.title}
              </h3>
              <p className="text-[var(--color-cream)]">{column.content}</p>
            </div>
          ))}
        </div>
        {motive && (
          <h3 className="text-xl font-semibold text-white my-20 text-center">
            {motive}
          </h3>
        )}
      </div>
    </div>

  );
};

export default InfoColumns;
